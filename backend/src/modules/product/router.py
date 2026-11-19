"""
Module API Sản Phẩm - JML Store Marketplace
===========================================
Task: TF17478 - [BE] API chi tiết sản phẩm
Cung cấp đầy đủ thông tin chi tiết sản phẩm: ảnh, mô tả, thương hiệu, tồn kho, giá.
"""

import json
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException, Query
from backend.src.config.database import get_db_connection

router = APIRouter(prefix="/api/products", tags=["Products"])

KNOWN_BRANDS = (
    "Sony",
    "Apple",
    "Samsung",
    "Logitech",
    "Marshall",
    "Harman Kardon",
    "Tissot",
    "Seiko",
    "Canon",
    "Fujifilm",
    "NuPhy",
    "Ray-Ban",
    "Nike",
    "Adidas",
    "Zara",
)


def _safe_json_list(raw_value: Any) -> List[Any]:
    """Parse chuỗi JSON mảng an toàn, trả về [] nếu dữ liệu trống hoặc lỗi."""
    if not raw_value:
        return []
    if isinstance(raw_value, list):
        return raw_value
    try:
        parsed = json.loads(raw_value)
        return parsed if isinstance(parsed, list) else []
    except (TypeError, ValueError):
        return []


def _infer_brand(title: str, shop_name: str, explicit_brand: Optional[str]) -> str:
    """Xác định tên thương hiệu từ cột brand hoặc suy luận từ tên sản phẩm/cửa hàng."""
    if explicit_brand and str(explicit_brand).strip():
        return str(explicit_brand).strip()

    title_lower = (title or "").lower()
    for brand in KNOWN_BRANDS:
        if brand.lower() in title_lower:
            return brand

    if "ipad" in title_lower or "iphone" in title_lower or "macbook" in title_lower or "airpods" in title_lower:
        return "Apple"

    if shop_name and str(shop_name).strip():
        return str(shop_name).strip()

    return "JML Official"


def _compute_inventory(row: Dict[str, Any]) -> Dict[str, Any]:
    """Tính toán thông tin tồn kho khả dụng, trạng thái còn hàng / sắp hết / hết hàng."""
    total_stock = int(row.get("total_stock") or 0)
    sold = int(row.get("sold") or 0)

    raw_stock = row.get("stock")
    if raw_stock is not None:
        available_stock = max(0, int(raw_stock))
    else:
        available_stock = max(0, total_stock - sold)

    if available_stock <= 0:
        stock_status = "out_of_stock"
        stock_label = "Hết hàng"
    elif available_stock <= 10:
        stock_status = "low_stock"
        stock_label = f"Sắp hết hàng (còn {available_stock})"
    else:
        stock_status = "in_stock"
        stock_label = "Còn hàng"

    return {
        "available": available_stock,
        "total": total_stock,
        "sold": sold,
        "inStock": available_stock > 0,
        "status": stock_status,
        "label": stock_label,
    }


def _compute_pricing(row: Dict[str, Any]) -> Dict[str, Any]:
    """Tổng hợp thông tin giá bán, giá gốc, mức giảm và đơn vị tiền tệ."""
    price = int(row.get("price") or 0)
    original_price = int(row.get("original_price") or price)
    if original_price < price:
        original_price = price

    discount_amount = max(0, original_price - price)
    discount_str = row.get("discount") or ""
    if not discount_str and original_price > price > 0:
        pct = round((discount_amount / original_price) * 100)
        discount_str = f"-{pct}%" if pct > 0 else "0%"

    return {
        "price": price,
        "originalPrice": original_price,
        "discount": discount_str or "0%",
        "discountAmount": discount_amount,
        "currency": "VND",
    }


def _build_default_description(title: str, brand: str, shop_name: str, category: str) -> str:
    """Tạo mô tả mặc định rõ ràng khi sản phẩm chưa có mô tả riêng trong DB."""
    return (
        f"{title} - Sản phẩm chính hãng thương hiệu {brand}, thuộc ngành hàng {category}, "
        f"được phân phối bởi {shop_name}. Hỗ trợ bảo hành chính hãng và đổi trả trong 30 ngày."
    )


def _serialize_summary_item(r: Dict[str, Any]) -> Dict[str, Any]:
    """Chuyển đổi row sản phẩm sang cấu trúc danh sách (tương thích ngược với FE)."""
    images = _safe_json_list(r.get("images_json"))
    angles = _safe_json_list(r.get("angles_json"))
    inventory = _compute_inventory(r)
    pricing = _compute_pricing(r)
    brand_name = _infer_brand(r.get("title", ""), r.get("shop_name", ""), r.get("brand_name") or r.get("brand"))

    return {
        "id": r["id"],
        "category": r["category"],
        "brand": brand_name,
        "title": r["title"],
        "price": pricing["price"],
        "originalPrice": pricing["originalPrice"],
        "discount": pricing["discount"],
        "rating": r.get("rating", 5.0),
        "sold": inventory["sold"],
        "soldCount": inventory["sold"],
        "stock": inventory["available"],
        "totalStock": inventory["total"],
        "inStock": inventory["inStock"],
        "images": images,
        "thumbnail": images[0] if images else "",
        "angles": angles,
        "exclusive": r.get("exclusive") or "Bán Chạy",
        "shopName": r.get("shop_name") or "JML Official Store",
        "isFlashSale": bool(r.get("is_flash_sale")),
    }


def _load_optional_relations(cursor, row: Dict[str, Any]) -> Dict[str, Any]:
    """Truy vấn thêm bảng brands, product_images nếu tồn tại trong database."""
    extra_images: List[Dict[str, Any]] = []
    brand_info: Optional[Dict[str, Any]] = None

    try:
        cursor.execute("SHOW TABLES LIKE 'product_images';")
        if cursor.fetchone():
            cursor.execute(
                "SELECT image_url, angle_name, is_primary FROM product_images WHERE product_id = ? ORDER BY is_primary DESC, display_order ASC, id ASC;",
                (row["id"],),
            )
            for img_row in cursor.fetchall():
                extra_images.append({
                    "url": img_row["image_url"],
                    "angle": img_row.get("angle_name") or "Góc chụp",
                    "isPrimary": bool(img_row.get("is_primary")),
                })
    except Exception:
        pass

    try:
        if row.get("brand_id"):
            cursor.execute("SHOW TABLES LIKE 'brands';")
            if cursor.fetchone():
                cursor.execute("SELECT id, code, name, origin, logo_url FROM brands WHERE id = ?;", (row["brand_id"],))
                b_row = cursor.fetchone()
                if b_row:
                    brand_info = {
                        "id": b_row["id"],
                        "code": b_row.get("code") or "",
                        "name": b_row["name"],
                        "origin": b_row.get("origin") or "",
                        "logoUrl": b_row.get("logo_url") or "",
                    }
    except Exception:
        pass

    return {"extra_images": extra_images, "brand_info": brand_info}


@router.get("")
def get_all_products(category: str = Query(None), q: str = Query(None)):
    """Lấy danh sách sản phẩm Flash Sale và Gợi ý hôm nay từ SQL."""
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM products WHERE status = 'approved'"
        params: List[Any] = []

        if category and category != "all":
            query += " AND category = ?"
            params.append(category)

        if q:
            query += " AND (title LIKE ? OR shop_name LIKE ?)"
            params.extend([f"%{q}%", f"%{q}%"])

        query += " ORDER BY id DESC;"
        cursor.execute(query, tuple(params))
        rows = cursor.fetchall()
    finally:
        conn.close()

    flash_products = []
    recommend_products = []

    for r in rows:
        item = _serialize_summary_item(r)
        if r.get("is_flash_sale") == 1:
            flash_products.append(item)
        else:
            recommend_products.append(item)

    flash_products.sort(key=lambda x: x["id"])

    return {
        "flash_products": flash_products,
        "recommend_products": recommend_products,
    }


@router.get("/{product_id}")
def get_product_by_id(product_id: int):
    """
    API chi tiết sản phẩm theo ID (TF17478).
    Trả về đầy đủ: ảnh (thumbnail, images, imageDetails), mô tả (description),
    thương hiệu (brand, brandInfo), tồn kho (stock, totalStock, sold, inStock, inventory),
    giá (price, originalPrice, discount, discountAmount, pricing) và sản phẩm liên quan.
    """
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM products WHERE id = ?;", (product_id,))
        r = cursor.fetchone()

        if not r:
            raise HTTPException(status_code=404, detail="Sản phẩm không tồn tại!")

        relations = _load_optional_relations(cursor, r)

        cursor.execute(
            "SELECT * FROM products WHERE status = 'approved' AND category = ? AND id != ? ORDER BY sold DESC, id DESC LIMIT 4;",
            (r["category"], product_id),
        )
        related_rows = cursor.fetchall()
    finally:
        conn.close()

    json_images = _safe_json_list(r.get("images_json"))
    angles = _safe_json_list(r.get("angles_json"))

    if relations["extra_images"]:
        image_details = relations["extra_images"]
        images = [img["url"] for img in image_details]
    else:
        images = json_images
        image_details = [
            {
                "url": url,
                "angle": angles[idx] if idx < len(angles) else f"Góc chụp {idx + 1}",
                "isPrimary": idx == 0,
            }
            for idx, url in enumerate(images)
        ]

    brand_info = relations["brand_info"]
    brand_name = (
        brand_info["name"]
        if brand_info
        else _infer_brand(r.get("title", ""), r.get("shop_name", ""), r.get("brand"))
    )
    if not brand_info:
        brand_info = {
            "id": r.get("brand_id"),
            "code": brand_name.lower().replace(" ", "-"),
            "name": brand_name,
            "origin": "",
            "logoUrl": "",
        }

    inventory = _compute_inventory(r)
    pricing = _compute_pricing(r)
    raw_desc = (r.get("description") or "").strip()
    description = raw_desc or _build_default_description(
        r.get("title", ""),
        brand_name,
        r.get("shop_name") or "JML Official Store",
        r.get("category") or "general",
    )

    return {
        "id": r["id"],
        "category": r["category"],
        "title": r["title"],
        "description": description,
        "brand": brand_name,
        "brandInfo": brand_info,
        "thumbnail": images[0] if images else "",
        "images": images,
        "imageDetails": image_details,
        "angles": angles,
        "price": pricing["price"],
        "originalPrice": pricing["originalPrice"],
        "discount": pricing["discount"],
        "discountAmount": pricing["discountAmount"],
        "currency": pricing["currency"],
        "pricing": pricing,
        "stock": inventory["available"],
        "totalStock": inventory["total"],
        "sold": inventory["sold"],
        "inStock": inventory["inStock"],
        "stockStatus": inventory["status"],
        "inventory": inventory,
        "rating": r.get("rating", 5.0),
        "exclusive": r.get("exclusive") or "Chính Hãng",
        "shopName": r.get("shop_name") or "JML Official Store",
        "isFlashSale": bool(r.get("is_flash_sale")),
        "status": r.get("status") or "approved",
        "relatedProducts": [_serialize_summary_item(rel) for rel in related_rows],
    }


@router.delete("/{product_id}")
def delete_product_by_id(product_id: int):
    """Chủ Shop hoặc Admin xóa sản phẩm theo ID khỏi MySQL."""
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM products WHERE id = ?;", (product_id,))
        conn.commit()
    finally:
        conn.close()
    return {"message": f"Đã xóa sản phẩm #{product_id} khỏi MySQL Database."}
