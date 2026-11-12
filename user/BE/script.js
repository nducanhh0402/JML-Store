const FLASH_PRODUCTS = [
  {
    id: 101,
    category: "audio",
    title: "Tai Nghe Chống Ồn Cao Cấp Sony WH-1000XM5 Black Edition",
    price: 7490000,
    originalPrice: 9490000,
    discount: "-21%",
    rating: 4.9,
    sold: 84,
    totalStock: 100,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Chính diện",
      "Góc nghiêng",
      "Cận cảnh đệm da",
      "Trên tay lifestyle",
    ],
    exclusive: "Bán Chạy",
  },
  {
    id: 102,
    category: "watch",
    title: "Đồng Hồ Nam Cơ Tự Động Tissot Le Locle Powermatic 80",
    price: 13800000,
    originalPrice: 17250000,
    discount: "-20%",
    rating: 5.0,
    sold: 46,
    totalStock: 50,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Mặt số Guilloche",
      "Góc nghiêng viền",
      "Nắp lưng lộ cơ",
      "Đeo trên cổ tay",
    ],
    exclusive: "Hot Deal",
  },
  {
    id: 103,
    category: "audio",
    title: "Loa Bluetooth Harman Kardon Aura Studio 4 Hi-End",
    price: 5890000,
    originalPrice: 7500000,
    discount: "-22%",
    rating: 4.8,
    sold: 92,
    totalStock: 100,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Vòm Acrylic",
      "Đèn Ambient LED",
      "Màng Subwoofer",
      "Phòng khách tối giản",
    ],
    exclusive: "Flash",
  },
  {
    id: 104,
    category: "fashion",
    title: "Kính Mát Phân Cực Ray-Ban Aviator Classic Gold Frame",
    price: 3650000,
    originalPrice: 4800000,
    discount: "-24%",
    rating: 4.7,
    sold: 71,
    totalStock: 80,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Khung mạ vàng",
      "Mặt nghiêng gọng",
      "Tròng kính râm",
      "Phối đồ phong cách",
    ],
    exclusive: "Trend",
  },
  {
    id: 105,
    category: "tech",
    title: "Bàn Phím Cơ Không Dây NuPhy Air75 V2 Low-Profile",
    price: 2990000,
    originalPrice: 3800000,
    discount: "-21%",
    rating: 4.9,
    sold: 58,
    totalStock: 60,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Mặt phím PBT",
      "Độ mỏng hông",
      "Switch cơ học",
      "Bàn làm việc Desk",
    ],
    exclusive: "Sắp Cháy Hàng",
  },
];

const RECOMMEND_PRODUCTS = [
  {
    id: 201,
    category: "tech",
    title: "iPad Pro M4 11-inch OLED Siêu Mỏng 256GB Space Black",
    price: 26990000,
    originalPrice: 28990000,
    discount: "-7%",
    rating: 5.0,
    soldCount: 342,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585792180666-f75a7c518801?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Màn hình Ultra OLED",
      "Cạnh vát mỏng 5.1mm",
      "Mặt lưng Space Black",
      "Trải nghiệm Apple Pencil",
    ],
  },
  {
    id: 202,
    category: "watch",
    title: "Apple Watch Ultra 2 GPS + Cellular Dây Alpine Loop",
    price: 20490000,
    originalPrice: 21990000,
    discount: "-7%",
    rating: 4.9,
    soldCount: 512,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Màn hình 3000 nits",
      "Nút Action Titanium",
      "Khóa dệt Alpine",
      "Đeo dã ngoại ngoài trời",
    ],
  },
  {
    id: 203,
    category: "audio",
    title: "Tai Nghe Airpods Max Apple Bản Không Gian Chống Ồn",
    price: 12490000,
    originalPrice: 13990000,
    discount: "-11%",
    rating: 4.8,
    soldCount: 189,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Chụp tai vòm lưới",
      "Khung thép không gỉ",
      "Núm xoay Digital Crown",
      "Phối trang phục thời thượng",
    ],
  },
  {
    id: 204,
    category: "fashion",
    title: "Ví Da Nam Cầm Tay Epsom Đen Thủ Công Phong Cách Pháp",
    price: 1850000,
    originalPrice: 2400000,
    discount: "-23%",
    rating: 4.9,
    soldCount: 420,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606503829066-512aaee498e9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Vân da dập Epsom",
      "Đường may chỉ sáp",
      "Ngăn thẻ & tiền",
      "Cầm tay phong cách quý ông",
    ],
  },
  {
    id: 205,
    category: "tech",
    title: "Máy Ảnh Mirrorless Fujifilm X-T5 Cổ Điển Kèm Ống Kính Kit",
    price: 43900000,
    originalPrice: 46500000,
    discount: "-6%",
    rating: 5.0,
    soldCount: 95,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Mặt trước phong cách Retro",
      "Vòng xoay kim loại cơ",
      "Màn hình lật đa hướng",
      "Chụp thực địa đường phố",
    ],
  },
  {
    id: 206,
    category: "fashion",
    title: "Áo Blazer Dạ Nam Thiết Kế Slimfit Chuẩn Phong Cách Ý",
    price: 2450000,
    originalPrice: 3200000,
    discount: "-23%",
    rating: 4.7,
    soldCount: 130,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Dáng áo Slimfit",
      "Cận cảnh ve áo & cúc sừng",
      "Chất dạ cừu dệt mịn",
      "Phối tổng thể thanh lịch",
    ],
  },
  {
    id: 207,
    category: "watch",
    title: "Đồng Hồ Nữ Dây Kim Loại Citizen Eco-Drive Năng Lượng Ánh Sáng",
    price: 5200000,
    originalPrice: 6500000,
    discount: "-20%",
    rating: 4.8,
    soldCount: 215,
    images: [
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Khảm xà cừ mặt số",
      "Góc nghiêng viền đá",
      "Dây thép đan mắt nhỏ",
      "Đeo tay dạ tiệc sang trọng",
    ],
  },
  {
    id: 208,
    category: "audio",
    title: "Loa Di Động Marshall Emberton II Âm Thanh Đa Hướng",
    price: 3950000,
    originalPrice: 4600000,
    discount: "-14%",
    rating: 4.9,
    soldCount: 670,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Lưới tản nhiệt đồng thau",
      "Núm điều hướng kim loại",
      "Mặt sau chống nước IP67",
      "Cầm tay picnic dã ngoại",
    ],
  },
  {
    id: 209,
    category: "fashion",
    title: "Túi Xách Nữ Da Thật Quai Xách Sang Trọng Tone Beige",
    price: 3200000,
    originalPrice: 4100000,
    discount: "-22%",
    rating: 4.8,
    soldCount: 310,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Chính diện tone Beige",
      "Khóa kim loại mạ vàng",
      "Cận cảnh vân da bò",
      "Mix outfit dạo phố",
    ],
  },
  {
    id: 210,
    category: "tech",
    title: "Chuột Công Thái Học Không Dây Logitech MX Master 3S",
    price: 2190000,
    originalPrice: 2600000,
    discount: "-16%",
    rating: 5.0,
    soldCount: 890,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    ],
    angles: [
      "Form dáng Ergonomic",
      "Con lăn MagSpeed thép",
      "Cụm nút ngón cái",
      "Setup bàn làm việc tối giản",
    ],
  },
];

// Dữ liệu mô tả chi tiết & thông số kỹ thuật bổ sung cho trang chi tiết
const PRODUCT_EXTRA_INFO = {
  101: {
    brand: "Sony",
    origin: "Nhật Bản / Lắp ráp Malaysia",
    warranty: "12 tháng chính hãng Sony Việt Nam",
    desc: "Tai nghe chống ồn không dây Sony WH-1000XM5 sở hữu công nghệ dẫn đầu ngành với hai bộ xử lý chuyên dụng V1 và HD QN1, kiểm soát 8 micro để triệt tiêu tiếng ồn một cách triệt để nhất. Thiết kế driver 30mm sử dụng màng vòm sợi carbon siêu cứng cho chất âm tinh tế, truyền tải chuẩn xác từng nốt nhạc Hi-Res Audio Wireless LDAC.",
    specs: [
      { key: "Thương hiệu", val: "Sony" },
      { key: "Dòng sản phẩm", val: "WH-1000XM5 Flagship Series" },
      {
        key: "Bộ xử lý chống ồn",
        val: "Dual Processor V1 & HD Noise Cancelling QN1",
      },
      { key: "Thời lượng pin", val: "30 giờ (bật ANC), 40 giờ (tắt ANC)" },
      { key: "Cổng sạc", val: "USB Type-C hỗ trợ chuẩn Power Delivery" },
      { key: "Trọng lượng", val: "250g (thiết kế siêu nhẹ đệm da mềm)" },
      {
        key: "Tính năng thông minh",
        val: "Speak-to-Chat, Quick Attention, Auto NC Optimizer",
      },
    ],
    colors: ["Đen Black Edition", "Bạc Silver White", "Xanh Midnight Blue"],
  },
  102: {
    brand: "Tissot 1853",
    origin: "Thụy Sĩ (Swiss Made)",
    warranty: "24 tháng quốc tế chính hãng",
    desc: "Tissot Le Locle Powermatic 80 là dòng đồng hồ cơ tự động kinh điển tôn vinh thị trấn Le Locle - cái nôi đồng hồ Thụy Sĩ. Mặt số được chạm trổ hoa văn Guilloche Clous de Paris tinh xảo, cọc số La Mã mang đậm phong thái quý tộc cổ điển. Trái tim là cỗ máy cơ Powermatic 80 trữ cót lên đến 80 giờ hoạt động bền bỉ.",
    specs: [
      { key: "Thương hiệu", val: "Tissot 1853" },
      { key: "Xuất xứ", val: "Thụy Sĩ (Swiss Made)" },
      { key: "Bộ máy cơ", val: "Automatic Powermatic 80.111 (23 chân kính)" },
      { key: "Thời gian trữ cót", val: "80 giờ bền bỉ" },
      { key: "Đường kính mặt", val: "39.3 mm • Độ dày 9.8 mm" },
      {
        key: "Kính bảo vệ",
        val: "Sapphire nguyên khối chống trầy xước tuyệt đối",
      },
      {
        key: "Chất liệu vỏ & dây",
        val: "Thép không gỉ 316L mạ công nghệ PVD cao cấp",
      },
    ],
    colors: [
      "Bạc Mặt Trắng Cổ Điển",
      "Vàng Demi Hoàng Gia",
      "Mặt Đen Lịch Lãm",
    ],
  },
  201: {
    brand: "Apple Inc.",
    origin: "Hoa Kỳ / Lắp ráp chính hãng",
    warranty: "12 tháng Apple Care toàn quốc",
    desc: "iPad Pro M4 11-inch hoàn toàn mới là bước nhảy vọt công nghệ với độ mỏng khó tin chỉ 5.1mm, tích hợp vi xử lý Apple M4 thế hệ tiếp theo mang lại hiệu năng đồ họa và trí tuệ nhân tạo vượt trội. Màn hình Ultra Retina XDR sử dụng công nghệ Tandem OLED đột phá với độ sáng tối đa 1600 nits.",
    specs: [
      { key: "Thương hiệu", val: "Apple" },
      {
        key: "Vi xử lý",
        val: "Apple M4 Chip (10-core CPU, 10-core GPU, 16-core NPU)",
      },
      {
        key: "Màn hình",
        val: "11 inch Ultra Retina XDR Tandem OLED 120Hz ProMotion",
      },
      {
        key: "Độ sáng tối đa",
        val: "1600 nits (HDR content), 1000 nits tiêu chuẩn",
      },
      { key: "Bộ nhớ", val: "256GB / 512GB / 1TB / 2TB Ultra Fast SSD" },
      { key: "Độ mỏng", val: "5.1 mm (Chiếc iPad mỏng nhất lịch sử Apple)" },
      { key: "Hỗ trợ phụ kiện", val: "Apple Pencil Pro, Magic Keyboard M4" },
    ],
    colors: ["Đen Không Gian (Space Black)", "Bạc Ánh Kim (Silver)"],
  },
};

// Trạng thái Giỏ hàng (Cart state)
let cartItems = [];

// Helper format tiền tệ VNĐ
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

function getCategoryName(cat) {
  switch (cat) {
    case "audio":
      return "Thiết Bị Âm Thanh";
    case "watch":
      return "Đồng Hồ Cao Cấp";
    case "fashion":
      return "Thời Trang & Đồ Da";
    case "tech":
      return "Thiết Bị Số & Công Nghệ";
    default:
      return "Sản Phẩm Cao Cấp";
  }
}

function getProductById(id) {
  const numId = parseInt(id, 10);
  return (
    FLASH_PRODUCTS.find((p) => p.id === numId) ||
    RECOMMEND_PRODUCTS.find((p) => p.id === numId) ||
    FLASH_PRODUCTS[0]
  );
}

// Helper tạo cấu trúc Multi-Image Carousel bên trong khung ảnh sản phẩm
function createCarouselMarkup(product) {
  const images = product.images || [product.image];
  const angles = product.angles || [
    "Chính diện",
    "Góc nghiêng",
    "Cận cảnh",
    "Thực tế",
  ];

  const imagesHtml = images
    .map(
      (img, idx) => `
        <img src="${img}" alt="${product.title} - ${angles[idx] || "Góc " + (idx + 1)}" class="product-slide-img ${idx === 0 ? "active" : ""}" data-index="${idx}" loading="lazy">
      `,
    )
    .join("");

  const dotsHtml = images
    .map(
      (_, idx) => `
        <span class="product-mini-dot ${idx === 0 ? "active" : ""}" data-dot-index="${idx}"></span>
      `,
    )
    .join("");

  const angleBadgeHtml = `
        <span class="product-angle-badge" data-badge>${angles[0] || "Ảnh 1"}</span>
      `;

  return `
        <div class="product-img-wrapper" data-carousel-id="${product.id}" data-angles='${JSON.stringify(angles).replace(/'/g, "&apos;")}'>
          <span class="discount-tag">${product.discount}</span>
          ${product.exclusive ? `<span class="exclusive-tag">${product.exclusive}</span>` : ""}
          <div class="product-carousel-track">
            ${imagesHtml}
          </div>
          <div class="product-mini-indicators">
            ${dotsHtml}
          </div>
          ${angleBadgeHtml}
        </div>
      `;
}

// --------------------------------------------------------------------------
// 1. RENDER SẢN PHẨM FLASH SALE & GỢI Ý
// --------------------------------------------------------------------------
function renderFlashSaleProducts() {
  const container = document.getElementById("flashProductsContainer");
  if (!container) return;
  container.innerHTML = FLASH_PRODUCTS.map((product) => {
    const percentSold = Math.round((product.sold / product.totalStock) * 100);
    const mainImg = product.images ? product.images[0] : product.image;
    return `
          <div class="product-card" onclick="openProductDetail(${product.id})">
            ${createCarouselMarkup(product)}
            <div class="product-body">
              <h3 class="product-title" title="${product.title}">${product.title}</h3>
              <div class="product-meta">
                <span class="rating-stars">★ ${product.rating}</span>
                <span>• Đã bán ${product.sold}</span>
              </div>
              <div class="price-row">
                <span class="current-price">${formatCurrency(product.price)}</span>
                <span class="original-price">${formatCurrency(product.originalPrice)}</span>
              </div>
              <div class="progress-box">
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${percentSold}%;"></div>
                </div>
                <div class="progress-text">
                  <span>Đã bán ${product.sold}/${product.totalStock}</span>
                  <span>${percentSold}%</span>
                </div>
              </div>
              <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${product.title.replace(/'/g, "\\'")}', ${product.price}, '${mainImg}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Thêm Vào Giỏ
              </button>
            </div>
          </div>
        `;
  }).join("");
  attachHoverCarouselListeners(container);
}

function renderRecommendProducts(category = "all") {
  const container = document.getElementById("recommendProductsContainer");
  if (!container) return;
  const filtered =
    category === "all"
      ? RECOMMEND_PRODUCTS
      : RECOMMEND_PRODUCTS.filter((p) => p.category === category);

  container.innerHTML = filtered
    .map((product) => {
      const mainImg = product.images ? product.images[0] : product.image;
      return `
          <div class="product-card" onclick="openProductDetail(${product.id})">
            ${createCarouselMarkup(product)}
            <div class="product-body">
              <h3 class="product-title" title="${product.title}">${product.title}</h3>
              <div class="product-meta">
                <span class="rating-stars">★ ${product.rating}</span>
                <span>• Đã bán ${product.soldCount}</span>
              </div>
              <div class="price-row">
                <span class="current-price">${formatCurrency(product.price)}</span>
                <span class="original-price">${formatCurrency(product.originalPrice)}</span>
              </div>
              <div style="margin-top: auto;">
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${product.title.replace(/'/g, "\\'")}', ${product.price}, '${mainImg}')">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  Thêm Vào Giỏ
                </button>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
  attachHoverCarouselListeners(container);
}

// --------------------------------------------------------------------------
// CƠ CHẾ HOVER CAROUSEL TỰ ĐỘNG CHUYỂN GÓC CHỤP SẢN PHẨM TRÊN CARD (1.1s/lần)
// --------------------------------------------------------------------------
function attachHoverCarouselListeners(parentContainer) {
  const wrappers = parentContainer.querySelectorAll(".product-img-wrapper");

  wrappers.forEach((wrapper) => {
    const slides = wrapper.querySelectorAll(".product-slide-img");
    const dots = wrapper.querySelectorAll(".product-mini-dot");
    const badge = wrapper.querySelector("[data-badge]");

    let angles = [];
    try {
      angles = JSON.parse(wrapper.dataset.angles || "[]");
    } catch (e) {
      angles = [];
    }

    if (slides.length <= 1) return;

    let activeIdx = 0;
    let timer = null;

    function setSlide(idx) {
      activeIdx = idx % slides.length;
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === activeIdx);
      });
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === activeIdx);
      });
      if (badge && angles[activeIdx]) {
        badge.textContent = angles[activeIdx];
      }
    }

    // Cho phép hover vào từng dot để chuyển góc ngay tức khắc
    dots.forEach((dot, dotIdx) => {
      dot.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        clearInterval(timer);
        setSlide(dotIdx);
      });
    });

    // Tự động chuyển lần lượt mỗi 1.1 giây khi người dùng hover chuột
    wrapper.addEventListener("mouseenter", () => {
      clearInterval(timer);
      timer = setInterval(() => {
        setSlide(activeIdx + 1);
      }, 1100);
    });

    // Khi rê chuột ra ngoài (mouseleave), tự động trở về ảnh đại diện ban đầu
    wrapper.addEventListener("mouseleave", () => {
      clearInterval(timer);
      setSlide(0);
    });
  });
}

// --------------------------------------------------------------------------
// 2. MÀN HÌNH CHI TIẾT SẢN PHẨM (SINGLE PAGE APPLICATION DETAIL VIEW)
// --------------------------------------------------------------------------
let currentDetailProduct = null;
let currentDetailQty = 1;
let currentSelectedColor = "";
let currentSelectedVersion = "";

function openProductDetail(productId) {
  const product = getProductById(productId);
  if (!product) return;
  currentDetailProduct = product;
  currentDetailQty = 1;

  // Lấy thông tin mở rộng hoặc tạo thông số mặc định phù hợp
  const extra = PRODUCT_EXTRA_INFO[product.id] || {
    brand: "Thương Hiệu Cao Cấp",
    origin: "Nhập khẩu chính hãng",
    warranty: "24 tháng chính hãng JML Store",
    desc: `${product.title} là sản phẩm hàng đầu trong bộ sưu tập cao cấp, được chế tác tỉ mỉ từ những vật liệu tinh hoa nhất. Sản phẩm đáp ứng tiêu chuẩn khắt khe về độ hoàn thiện, tính thẩm mỹ và độ bền bỉ dài lâu.`,
    specs: [
      { key: "Tên sản phẩm", val: product.title },
      { key: "Danh mục", val: getCategoryName(product.category) },
      {
        key: "Tiêu chuẩn kiểm duyệt",
        val: "100% Chính hãng phân phối độc quyền",
      },
      { key: "Tình trạng", val: "Mới 100% nguyên hộp kèm thẻ bảo hành" },
      { key: "Bảo hành", val: "24 tháng đổi mới trong 30 ngày nếu lỗi" },
    ],
    colors: ["Màu Tiêu Chuẩn (Mặc định)", "Phiên Bản Giới Hạn"],
  };

  const images = product.images || [product.image];
  const angles = product.angles || [
    "Chính diện",
    "Góc nghiêng",
    "Cận cảnh",
    "Thực tế",
  ];
  currentSelectedColor = extra.colors[0];
  currentSelectedVersion = "Bản Tiêu Chuẩn";

  const detailContainer = document.getElementById("view-product-detail");
  const homeContainer = document.getElementById("view-home");

  // Gợi ý 4 sản phẩm cùng phân khúc
  const relatedList = RECOMMEND_PRODUCTS.filter(
    (p) => p.id !== product.id,
  ).slice(0, 4);
  const relatedCardsHtml = relatedList
    .map((rel) => {
      const relImg = rel.images ? rel.images[0] : rel.image;
      return `
            <div class="product-card" onclick="openProductDetail(${rel.id})">
              ${createCarouselMarkup(rel)}
              <div class="product-body">
                <h3 class="product-title" title="${rel.title}">${rel.title}</h3>
                <div class="product-meta">
                  <span class="rating-stars">★ ${rel.rating}</span>
                  <span>• Đã bán ${rel.soldCount}</span>
                </div>
                <div class="price-row">
                  <span class="current-price">${formatCurrency(rel.price)}</span>
                  <span class="original-price">${formatCurrency(rel.originalPrice)}</span>
                </div>
                <div style="margin-top: auto;">
                  <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${rel.title.replace(/'/g, "\\'")}', ${rel.price}, '${relImg}')">
                    Thêm Vào Giỏ
                  </button>
                </div>
              </div>
            </div>
          `;
    })
    .join("");

  detailContainer.innerHTML = `
          <div class="product-detail-wrapper">
            <!-- Breadcrumb Navigation -->
            <div class="detail-breadcrumb-bar">
              <button class="btn-back-home" onclick="showHomeView()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Quay Lại Danh Sách
              </button>
              <div class="breadcrumb-trail">
                <a href="#" onclick="showHomeView(); return false;">Trang Chủ</a>
                <span>/</span>
                <span class="breadcrumb-cat" onclick="filterCategory('${product.category || "all"}'); showHomeView(); scrollToRecommend();" style="cursor: pointer;">${getCategoryName(product.category)}</span>
                <span>/</span>
                <span class="breadcrumb-current" title="${product.title}">${product.title}</span>
              </div>
            </div>

            <!-- Product Showcase Grid -->
            <div class="product-showcase-grid">
              <!-- Left Column: Gallery & Angle Selector -->
              <div class="showcase-gallery">
                <div class="main-image-viewport">
                  <span class="detail-discount-tag">${product.discount}</span>
                  ${product.exclusive ? `<span class="detail-exclusive-tag">${product.exclusive}</span>` : ""}
                  <span class="detail-angle-indicator" id="detailAngleBadge">${angles[0]}</span>
                  <img id="detailMainImg" src="${images[0]}" alt="${product.title}">
                </div>

                <!-- Thumbnail angles row -->
                <div class="gallery-thumbs-row">
                  ${images
                    .map(
                      (img, idx) => `
                    <div class="gallery-thumb-item ${idx === 0 ? "active" : ""}" onclick="switchDetailImage(${idx}, '${img}', '${angles[idx] || "Góc " + (idx + 1)}')">
                      <img src="${img}" alt="${angles[idx]}">
                      <span>${angles[idx] || "Ảnh " + (idx + 1)}</span>
                    </div>
                  `,
                    )
                    .join("")}
                </div>

                <!-- Trust Guarantees Box -->
                <div class="trust-features-grid">
                  <div class="trust-item">
                    <div class="trust-icon">🛡️</div>
                    <div>
                      <strong>100% Chính Hãng</strong>
                      <span>Đền bù 200% nếu phát hiện giả</span>
                    </div>
                  </div>
                  <div class="trust-item">
                    <div class="trust-icon">🔄</div>
                    <div>
                      <strong>Đổi Trả 30 Ngày</strong>
                      <span>Miễn phí 100% nếu có lỗi từ NSX</span>
                    </div>
                  </div>
                  <div class="trust-item">
                    <div class="trust-icon">🚀</div>
                    <div>
                      <strong>Giao Hỏa Tốc 2H</strong>
                      <span>Nội thành Hà Nội & TP.HCM</span>
                    </div>
                  </div>
                  <div class="trust-item">
                    <div class="trust-icon">💎</div>
                    <div>
                      <strong>Bảo Hành 24 Tháng</strong>
                      <span>Bảo hành điện tử chính hãng</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: Purchasing & Details -->
              <div class="showcase-info">
                <div class="detail-mall-badge">
                  <span class="mall-pill">✓ JML OFFICIAL MALL</span>
                  <span class="sku-pill">MÃ SP: #LX-${product.id}</span>
                </div>

                <h1 class="detail-product-title">${product.title}</h1>

                <div class="detail-meta-row">
                  <div class="meta-rating">
                    <span class="stars">★★★★★</span>
                    <strong>${product.rating}</strong>
                  </div>
                  <span>•</span>
                  <span class="meta-reviews">184 Đánh giá thực tế</span>
                  <span>•</span>
                  <span class="meta-sold">Đã bán ${product.sold || product.soldCount || 120}</span>
                </div>

                <!-- Price Box -->
                <div class="detail-price-box">
                  <div class="price-header">
                    <span class="price-label">Giá Ưu Đãi Độc Quyền</span>
                    <span class="deal-pill">⚡ FLASH SALE TIẾT KIỆM</span>
                  </div>
                  <div class="price-numbers">
                    <span class="detail-current-price">${formatCurrency(product.price)}</span>
                    <span class="detail-original-price">${formatCurrency(product.originalPrice)}</span>
                    <span class="detail-save-badge">Tiết kiệm ${formatCurrency(product.originalPrice - product.price)} (${product.discount})</span>
                  </div>
                  <div class="price-voucher-notice">
                    🎁 Tặng Voucher 100K cho thành viên VIP • Miễn phí vận chuyển toàn quốc
                  </div>
                </div>

                <!-- Variant: Màu Sắc -->
                <div class="variant-section">
                  <div class="variant-title">
                    <span>Chọn Màu Sắc:</span>
                    <strong id="selectedColorLabel">${extra.colors[0]}</strong>
                  </div>
                  <div class="variant-options">
                    ${extra.colors
                      .map(
                        (c, i) => `
                      <button class="variant-btn ${i === 0 ? "active" : ""}" onclick="selectVariant(this, 'selectedColorLabel', '${c}')">
                        <span class="color-dot" style="background: ${i === 0 ? "#111827" : i === 1 ? "#94a3b8" : "#cbd5e1"};"></span>
                        ${c}
                      </button>
                    `,
                      )
                      .join("")}
                  </div>
                </div>

                <!-- Variant: Phiên Bản -->
                <div class="variant-section">
                  <div class="variant-title">
                    <span>Phiên Bản / Dung Lượng:</span>
                    <strong id="selectedVersionLabel">Bản Tiêu Chuẩn (Fullbox)</strong>
                  </div>
                  <div class="variant-options">
                    <button class="variant-btn active" onclick="selectVariant(this, 'selectedVersionLabel', 'Bản Tiêu Chuẩn (Fullbox)')">
                      Bản Tiêu Chuẩn (Fullbox)
                    </button>
                    <button class="variant-btn" onclick="selectVariant(this, 'selectedVersionLabel', 'Bản Nâng Cấp Kèm Quà Tặng')">
                      Bản Nâng Cấp Kèm Quà Tặng
                    </button>
                  </div>
                </div>

                <!-- Quantity Picker -->
                <div class="quantity-section">
                  <span class="qty-label">Số Lượng:</span>
                  <div class="qty-picker">
                    <button type="button" onclick="changeDetailQty(-1)">−</button>
                    <input type="number" id="detailQtyInput" value="1" min="1" max="10" readonly>
                    <button type="button" onclick="changeDetailQty(1)">+</button>
                  </div>
                  <span class="stock-remain">Còn lại <strong>${product.totalStock || 45}</strong> sản phẩm trong kho</span>
                </div>

                <!-- CTA Action Buttons -->
                <div class="detail-actions-row">
                  <button class="btn-detail-add-cart" onclick="addCurrentDetailToCart()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    Thêm Vào Giỏ Hàng
                  </button>
                  <button class="btn-detail-buy-now" onclick="buyCurrentDetailNow()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    Mua Ngay Với Giá Ưu Đãi
                  </button>
                </div>

                <!-- Shipping Summary Box -->
                <div class="shipping-info-card">
                  <div class="shipping-row">
                    <span>📍 Địa chỉ nhận hàng:</span>
                    <strong>Tòa nhà Discovery Complex, Cầu Giấy, Hà Nội</strong>
                    <a href="#" onclick="showToast('Vị trí', 'Cập nhật địa chỉ nhận hàng'); return false;" style="color: var(--primary); font-weight: 600; margin-left: auto;">Thay đổi</a>
                  </div>
                  <div class="shipping-row">
                    <span>🚚 Vận chuyển:</span>
                    <strong style="color: var(--success);">Miễn phí vận chuyển hỏa tốc</strong>
                    <span style="color: var(--text-muted);">(Dự kiến nhận hàng trong ngày mai)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tabbed Detailed Info Section -->
            <div class="detail-tabs-section">
              <div class="detail-tab-nav">
                <button class="detail-tab-btn active" onclick="switchDetailTab('tab-desc', this)">Mô Tả Sản Phẩm</button>
                <button class="detail-tab-btn" onclick="switchDetailTab('tab-specs', this)">Thông Số Kỹ Thuật</button>
                <button class="detail-tab-btn" onclick="switchDetailTab('tab-reviews', this)">Đánh Giá Khách Hàng (184)</button>
                <button class="detail-tab-btn" onclick="switchDetailTab('tab-policy', this)">Chính Sách & Bảo Hành</button>
              </div>

              <!-- Tab 1: Mô tả -->
              <div id="tab-desc" class="detail-tab-pane active">
                <p style="margin-bottom: 16px; font-size: 15px;">${extra.desc}</p>
                <h4 style="font-size: 16px; font-weight: 700; color: var(--secondary); margin: 20px 0 10px;">Đặc Điểm Nổi Bật</h4>
                <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                  <li>Thiết kế công thái học hiện đại, tôn vinh đẳng cấp người sử dụng.</li>
                  <li>Sử dụng linh kiện cao cấp từ nhà sản xuất uy tín toàn cầu.</li>
                  <li>Kiểm định chất lượng nghiêm ngặt trước khi xuất xưởng và giao đến tay người tiêu dùng.</li>
                  <li>Tích hợp đầy đủ phụ kiện chính hãng nguyên hộp.</li>
                </ul>
              </div>

              <!-- Tab 2: Thông số kỹ thuật -->
              <div id="tab-specs" class="detail-tab-pane">
                <table class="spec-table">
                  <tbody>
                    ${extra.specs
                      .map(
                        (sp) => `
                      <tr>
                        <td class="spec-key">${sp.key}</td>
                        <td class="spec-val">${sp.val}</td>
                      </tr>
                    `,
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>

              <!-- Tab 3: Đánh giá -->
              <div id="tab-reviews" class="detail-tab-pane">
                <div style="display: flex; align-items: center; gap: 20px; background: var(--surface-dim); padding: 18px; border-radius: 12px; margin-bottom: 20px;">
                  <div style="font-size: 38px; font-weight: 800; color: var(--secondary); line-height: 1;">4.9<span style="font-size: 18px; color: var(--text-muted); font-weight: 500;">/5</span></div>
                  <div>
                    <div style="color: #f59e0b; font-size: 16px; margin-bottom: 4px;">★★★★★</div>
                    <div style="font-size: 12px; color: var(--text-muted);">Dựa trên 184 lượt đánh giá từ người mua đã xác thực</div>
                  </div>
                </div>

                <div class="review-card">
                  <div class="review-header">
                    <span class="reviewer-name">Nguyễn Văn Hoàng <span class="verified-badge">✓ Đã mua hàng tại JML Store</span></span>
                    <span class="review-date">3 ngày trước</span>
                  </div>
                  <div class="review-stars">★★★★★</div>
                  <p>Hàng chính hãng đóng gói rất kỹ lưỡng. Giao hàng chỉ mất 2 tiếng ở Hà Nội, đúng chuẩn mô tả và màu sắc trên ảnh. Rất hài lòng!</p>
                </div>

                <div class="review-card">
                  <div class="review-header">
                    <span class="reviewer-name">Trần Thùy Linh <span class="verified-badge">✓ Đã mua hàng tại JML Store</span></span>
                    <span class="review-date">1 tuần trước</span>
                  </div>
                  <div class="review-stars">★★★★★</div>
                  <p>Sản phẩm cao cấp, chất lượng hoàn thiện tuyệt vời. Nhân viên hỗ trợ tư vấn rất nhiệt tình và kích hoạt bảo hành điện tử nhanh chóng.</p>
                </div>
              </div>

              <!-- Tab 4: Chính sách -->
              <div id="tab-policy" class="detail-tab-pane">
                <div style="display: flex; flex-direction: column; gap: 14px;">
                  <div>
                    <strong style="color: var(--secondary);">1. Chính sách bảo hành chính hãng:</strong>
                    <p style="margin-top: 4px;">Bảo hành 12 - 24 tháng theo quy chuẩn của nhà sản xuất. Kích hoạt bảo hành điện tử thông minh qua số điện thoại mua hàng.</p>
                  </div>
                  <div>
                    <strong style="color: var(--secondary);">2. Chính sách đổi mới 30 ngày:</strong>
                    <p style="margin-top: 4px;">Đổi mới 1:1 miễn phí trong 30 ngày đầu tiên nếu sản phẩm phát sinh lỗi từ nhà sản xuất (yêu cầu giữ nguyên hộp và phụ kiện).</p>
                  </div>
                  <div>
                    <strong style="color: var(--secondary);">3. Cam kết nguồn gốc:</strong>
                    <p style="margin-top: 4px;">100% sản phẩm phân phối bởi JML Store là hàng chính ngạch có hóa đơn VAT và tem chống hàng giả của Bộ Công An.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Products Section -->
            <div class="related-products-section">
              <div class="section-title-wrap">
                <div>
                  <h2 class="section-title">Sản Phẩm Cùng Bộ Sưu Tập</h2>
                  <p class="section-subtitle">Gợi ý sản phẩm tương tự có thể bạn cũng quan tâm</p>
                </div>
              </div>
              <div class="recommend-grid">${relatedCardsHtml}</div>
            </div>
          </div>
        `;

  // Chuyển SPA view
  homeContainer.classList.remove("active");
  detailContainer.classList.add("active");
  window.location.hash = "product/" + product.id;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Gắn listener hover cho các card liên quan
  attachHoverCarouselListeners(detailContainer);
}

function showHomeView() {
  const detailContainer = document.getElementById("view-product-detail");
  const homeContainer = document.getElementById("view-home");
  if (detailContainer && homeContainer) {
    detailContainer.classList.remove("active");
    homeContainer.classList.add("active");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function switchDetailImage(index, imgSrc, angleName) {
  const mainImg = document.getElementById("detailMainImg");
  const angleBadge = document.getElementById("detailAngleBadge");
  if (mainImg) mainImg.src = imgSrc;
  if (angleBadge) angleBadge.textContent = angleName;

  document.querySelectorAll(".gallery-thumb-item").forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === index);
  });
}

function selectVariant(button, labelId, value) {
  const label = document.getElementById(labelId);
  if (label) label.textContent = value;
  const parent = button.parentElement;
  if (parent) {
    parent
      .querySelectorAll(".variant-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }
  if (labelId === "selectedColorLabel") currentSelectedColor = value;
  if (labelId === "selectedVersionLabel") currentSelectedVersion = value;
}

function changeDetailQty(delta) {
  const input = document.getElementById("detailQtyInput");
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val += delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
  currentDetailQty = val;
}

function addCurrentDetailToCart() {
  if (!currentDetailProduct) return;
  const mainImg = currentDetailProduct.images
    ? currentDetailProduct.images[0]
    : currentDetailProduct.image;
  const titleWithVariant = `${currentDetailProduct.title} (${currentSelectedColor || "Tiêu chuẩn"})`;

  for (let i = 0; i < currentDetailQty; i++) {
    cartItems.push({
      title: titleWithVariant,
      price: currentDetailProduct.price,
      image: mainImg,
      qty: 1,
    });
  }
  updateCartDisplay();

  if (cartCountBadge) {
    cartCountBadge.classList.remove("bounce");
    void cartCountBadge.offsetWidth;
    cartCountBadge.classList.add("bounce");
  }

  showToast(
    "Đã thêm vào giỏ hàng!",
    `${currentDetailQty}x ${titleWithVariant}`,
  );
}

function buyCurrentDetailNow() {
  addCurrentDetailToCart();
  cartDropdown.classList.add("active");
  handleCheckout();
}

function switchDetailTab(tabId, btn) {
  document
    .querySelectorAll(".detail-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".detail-tab-pane")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");
}

// Xử lý URL hash để đồng bộ SPA (nút Back/Forward của trình duyệt)
function checkUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#product/")) {
    const id = hash.replace("#product/", "");
    if (id) openProductDetail(id);
  } else {
    showHomeView();
  }
}

window.addEventListener("hashchange", checkUrlHash);

function filterCategory(cat, element) {
  document.querySelectorAll(".recommend-tabs .tab-btn").forEach((btn) => {
    const btnCat = btn.getAttribute("onclick");
    if (element) {
      btn.classList.toggle("active", btn === element);
    } else if (btnCat && btnCat.includes(`'${cat}'`)) {
      btn.classList.add("active");
    } else if (cat === "all" && btnCat && btnCat.includes("'all'")) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderRecommendProducts(cat);
}

function scrollToRecommend() {
  const sec = document.querySelector(".recommend-section");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
}

function scrollToFlashSale() {
  const sec = document.getElementById("flashSaleSection");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
}

// --------------------------------------------------------------------------
// 3. HERO SLIDER BANNER INTERACTION (AUTOPLAY + NAVIGATION)
// --------------------------------------------------------------------------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");
let sliderInterval;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  if (!slides.length) return;
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  if (!slides.length) return;
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startSliderAutoPlay() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetSliderTimer() {
  clearInterval(sliderInterval);
  startSliderAutoPlay();
}

const nextBtn = document.getElementById("nextSlideBtn");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetSliderTimer();
  });
}

const prevBtn = document.getElementById("prevSlideBtn");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetSliderTimer();
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const idx = parseInt(e.target.dataset.index, 10);
    showSlide(idx);
    resetSliderTimer();
  });
});

startSliderAutoPlay();

// --------------------------------------------------------------------------
// 4. FLASH SALE REALTIME COUNTDOWN TIMER
// --------------------------------------------------------------------------
let countdownRemainingSeconds = 4 * 3600 + 18 * 60 + 45;

function updateCountdown() {
  if (countdownRemainingSeconds <= 0) {
    countdownRemainingSeconds = 4 * 3600; // Reset loop
  } else {
    countdownRemainingSeconds--;
  }

  const h = Math.floor(countdownRemainingSeconds / 3600);
  const m = Math.floor((countdownRemainingSeconds % 3600) / 60);
  const s = countdownRemainingSeconds % 60;

  const hBox = document.getElementById("hoursBox");
  const mBox = document.getElementById("minutesBox");
  const sBox = document.getElementById("secondsBox");

  if (hBox) hBox.textContent = String(h).padStart(2, "0");
  if (mBox) mBox.textContent = String(m).padStart(2, "0");
  if (sBox) sBox.textContent = String(s).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --------------------------------------------------------------------------
// 5. GIỎ HÀNG (SHOPPING CART) & HIỆU ỨNG BOUNCE BADGE
// --------------------------------------------------------------------------
const cartCountBadge = document.getElementById("cartCountBadge");
const cartCountHeader = document.getElementById("cartCountHeader");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartDropdown = document.getElementById("cartDropdown");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalSum = document.getElementById("cartTotalSum");

const notifToggleBtn = document.getElementById("notifToggleBtn");
const notifDropdown = document.getElementById("notifDropdown");
const userProfileBtn = document.getElementById("userProfileBtn");
const userDropdown = document.getElementById("userDropdown");

function closeAllDropdowns() {
  if (cartDropdown) cartDropdown.classList.remove("active");
  if (notifDropdown) notifDropdown.style.display = "none";
  if (userDropdown) userDropdown.style.display = "none";
}

if (cartToggleBtn) {
  cartToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = cartDropdown.classList.contains("active");
    closeAllDropdowns();
    if (!isActive) cartDropdown.classList.add("active");
  });
}

if (notifToggleBtn) {
  notifToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isShown = notifDropdown.style.display === "flex";
    closeAllDropdowns();
    if (!isShown) notifDropdown.style.display = "flex";
  });
}

if (userProfileBtn) {
  userProfileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isShown = userDropdown.style.display === "flex";
    closeAllDropdowns();
    if (!isShown) userDropdown.style.display = "flex";
  });
}

// Ngăn chặn sự kiện click bên trong dropdown làm đóng chính nó
[cartDropdown, notifDropdown, userDropdown].forEach((dd) => {
  if (dd) {
    dd.addEventListener("click", (e) => e.stopPropagation());
  }
});

// Click ra bên ngoài để đóng toàn bộ popups/dropdowns
document.addEventListener("click", () => {
  closeAllDropdowns();
});

function addToCart(title, price, image) {
  const existing = cartItems.find((item) => item.title === title);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cartItems.push({ title, price, image, qty: 1 });
  }
  updateCartDisplay();

  // Kích hoạt hiệu ứng nảy icon giỏ hàng
  if (cartCountBadge) {
    cartCountBadge.classList.remove("bounce");
    void cartCountBadge.offsetWidth; // Trigger reflow
    cartCountBadge.classList.add("bounce");
  }

  // Bật Toast notification
  showToast("Đã thêm vào giỏ hàng!", title);
}

function removeFromCart(index) {
  const removed = cartItems.splice(index, 1)[0];
  updateCartDisplay();
  showToast("Đã xóa khỏi giỏ", removed ? removed.title : "");
}

function updateCartDisplay() {
  const totalQty = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);
  if (cartCountBadge) cartCountBadge.textContent = totalQty;
  if (cartCountHeader) cartCountHeader.textContent = `${totalQty} sản phẩm`;

  if (!cartItemsList || !cartTotalSum) return;

  if (cartItems.length === 0) {
    cartItemsList.innerHTML =
      '<p style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 24px 0;">Chưa có sản phẩm nào trong giỏ hàng</p>';
    cartTotalSum.textContent = "0 ₫";
    return;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0,
  );
  cartTotalSum.textContent = formatCurrency(total);

  cartItemsList.innerHTML = cartItems
    .map(
      (item, idx) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="cart-item-info">
            <div style="font-weight: 600; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; max-width: 170px;" title="${item.title}">${item.title}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
              <span class="cart-item-price">${formatCurrency(item.price)} ${item.qty > 1 ? `<span style="font-size: 11px; color: var(--text-muted); font-weight: 500;">x${item.qty}</span>` : ""}</span>
              <button onclick="removeFromCart(${idx})" title="Xóa khỏi giỏ" style="color: #ef4444; font-size: 14px; padding: 2px 6px; cursor: pointer; border-radius: 4px;">✕</button>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function handleCheckout() {
  if (cartItems.length === 0) {
    showToast(
      "Thông báo",
      "Giỏ hàng đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.",
    );
    return;
  }
  showToast(
    "Khởi tạo thanh toán",
    `Đơn hàng trị giá ${cartTotalSum.textContent} đã được xác nhận.`,
  );
  cartItems = [];
  updateCartDisplay();
  setTimeout(() => {
    if (cartDropdown) cartDropdown.classList.remove("active");
  }, 1200);
}

// --------------------------------------------------------------------------
// 6. TOAST NOTIFICATION SYSTEM
// --------------------------------------------------------------------------
const toastContainer = document.getElementById("toastContainer");

function showToast(title, message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
        <div class="toast-icon">✓</div>
        <div class="toast-content">
          <div class="toast-title">${title}</div>
          <div class="toast-msg">${message}</div>
        </div>
      `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 350);
  }, 3200);
}

// --------------------------------------------------------------------------
// 7. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
// --------------------------------------------------------------------------
const observerOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px",
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
  revealObserver.observe(el);
});

// --------------------------------------------------------------------------
// 8. TÌM KIẾM THÔNG MINH
// --------------------------------------------------------------------------
function handleSearch() {
  const input = document.getElementById("searchInput");
  const query = (input ? input.value : "").trim().toLowerCase();

  // Đảm bảo đang ở view home khi tìm kiếm
  showHomeView();

  if (!query) {
    renderRecommendProducts("all");
    return;
  }

  const matched = RECOMMEND_PRODUCTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query),
  );

  const container = document.getElementById("recommendProductsContainer");
  if (container) {
    if (matched.length === 0) {
      container.innerHTML = `
              <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #fff; border-radius: var(--radius-md); border: 1px dashed var(--border);">
                <div style="font-size: 36px; margin-bottom: 12px;">🔍</div>
                <h3 style="font-size: 16px; font-weight: 700; color: var(--secondary);">Không tìm thấy sản phẩm phù hợp</h3>
                <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">Thử tìm với từ khóa: "ipad", "tai nghe", "đồng hồ", "ví da", "loa"...</p>
              </div>
            `;
    } else {
      container.innerHTML = matched
        .map((product) => {
          const mainImg = product.images ? product.images[0] : product.image;
          return `
              <div class="product-card" onclick="openProductDetail(${product.id})">
                ${createCarouselMarkup(product)}
                <div class="product-body">
                  <h3 class="product-title" title="${product.title}">${product.title}</h3>
                  <div class="product-meta">
                    <span class="rating-stars">★ ${product.rating}</span>
                    <span>• Đã bán ${product.soldCount}</span>
                  </div>
                  <div class="price-row">
                    <span class="current-price">${formatCurrency(product.price)}</span>
                    <span class="original-price">${formatCurrency(product.originalPrice)}</span>
                  </div>
                  <div style="margin-top: auto;">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${product.title.replace(/'/g, "\\'")}', ${product.price}, '${mainImg}')">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                      Thêm Vào Giỏ
                    </button>
                  </div>
                </div>
              </div>
            `;
        })
        .join("");
      attachHoverCarouselListeners(container);
    }
  }

  scrollToRecommend();
  showToast("Tìm kiếm", `Tìm thấy ${matched.length} sản phẩm phù hợp`);
}

function applyQuickSearch(term) {
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = term;
    handleSearch();
  }
}

// Khởi chạy render ban đầu
renderFlashSaleProducts();
renderRecommendProducts("all");

// Kiểm tra URL hash khi mở trang lần đầu
if (window.location.hash.startsWith("#product/")) {
  checkUrlHash();
}
