# Hệ Thống Quản Trị Thương Mại Điện Tử (Ecommerce Admin Portal)
> Được thiết kế chuẩn hóa 100% dựa trên Design System của file Figma: **Ecommerce Templates & UI Kit (Community)**

---

## 📁 Cấu Trúc Dự Án
```
admin/
├── backend/                   # Cổng Quản Trị Hệ Thống Sàn TMĐT
│   ├── index.html             # Dashboard chính (Thống kê GMV, duyệt Shop, Escrow, tranh chấp)
│   ├── login.html             # Cổng Đăng Nhập & Đăng Ký Quản Trị Viên (Auth Guard)
│   ├── auth.js                # Quản lý phiên làm việc, phân quyền & xác thực LocalStorage
│   ├── script.js              # Biểu đồ Chart.js, xử lý Tab & dữ liệu Shop/Đơn hàng
│   ├── style.css              # Design tokens, CSS variables, thanh cuộn & hiệu ứng
│   ├── jml-store-icon.svg     # Logo biểu tượng Sàn JML Store
│   └── README.md              # Đặc tả API và hướng dẫn các tài khoản Admin
│
└── README.md                  # Hướng dẫn tổng thể
```

---

## 1. Bản Đồ Quy Chuẩn Thiết Kế (Design System Mapping)

Dựa trên việc đọc và phân tích cấu trúc trực tiếp từ file Figma qua API (các frame `2:2495 Colors`, `2:2614 Typescale`, `8006:1847 Components` và `4063:3341 Pages`):

### 🎨 Bảng màu (Color Tokens)
| Tên Token | Mã Hex | Ứng dụng trong Admin |
| :--- | :--- | :--- |
| **Primary 500** | `#0D6EFD` | Nút hành động chính, active menu, link, icon thương hiệu |
| **Primary 50** | `#F0F7FF` | Nền menu đang chọn, badge nổi bật, hover state |
| **Neutral 900** | `#14181F` | Màu tiêu đề, chữ chính (Heading, Table text) |
| **Neutral 600** | `#6F7C8E` | Chữ phụ, placeholder, nhãn phụ (Muted text) |
| **Neutral 200** | `#DCE0E5` | Viền khung (Card border, Table border, Input border) |
| **Neutral 50** | `#F6F7F9` | Nền trang tổng thể (Page Background) |
| **Success 500** | `#00B517` | Trạng thái "Đã thanh toán", "Hoàn thành", tăng trưởng dương |
| **Warning 500** | `#FF9017` | Trạng thái "Chờ xử lý", "Cảnh báo tồn kho" |
| **Danger 500** | `#FA3434` | Trạng thái "Đã hủy đơn", "Lỗi", cảnh báo xóa |

---

## 2. Cách Xem Và Khởi Chạy
- **Cách 1: Mở trực tiếp bằng trình duyệt**
  - Nhấp đúp chuột vào file `admin/backend/login.html` để đăng nhập / đăng ký tài khoản Quản trị.
  - Sau khi đăng nhập, hệ thống sẽ tự động đưa bạn vào `admin/backend/index.html`.
  - Nếu mở trực tiếp `index.html` khi chưa đăng nhập, hệ thống sẽ tự động bảo vệ và chuyển hướng về `login.html`.

- **Cách 2: Khởi chạy bằng local server (Python / Live Server)**
  ```powershell
  cd admin/backend
  python -m http.server 3000
  ```
  Truy cập: `http://localhost:3000/login.html` hoặc `http://localhost:3000`
