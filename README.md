# Portfolio bản rút gọn - Đặng Minh Thuận

Trang web hồ sơ cá nhân giới thiệu bản thân, kỹ năng và các dự án đã thực hiện.
Bài thực hành giữa kỳ môn Lập trình Web (251401 - 020100138303).

## Công nghệ sử dụng

- HTML5 (semantic, form, table)
- SCSS biên dịch ra CSS (mobile-first, Flexbox, Grid)
- JavaScript (DOM, Fetch API, async/await, LocalStorage)
- Git

## Cấu trúc thư mục

```
my-website/
├── index.html
├── images/
│   └── anhdaidien.jpg
├── css/
│   ├── style.scss
│   └── style.css
├── js/
│   ├── script.js
│   └── data.json
└── README.md
```

## Cách chạy

1. Mở thư mục dự án bằng VS Code.
2. Cài extension **Live Server**, bấm chuột phải vào `index.html` chọn **Open with Live Server**.
3. Không mở trực tiếp file `index.html` (giao thức `file://`), vì `fetch()` sẽ không đọc được `data.json`.

## Biên dịch SCSS

```bash
npx sass --watch css/style.scss css/style.css
```

## Tính năng

- Giao diện responsive, thiết kế mobile-first với 2 breakpoint (768px, 1024px).
- Bảng quá trình học tập.
- Danh sách kỹ năng được tạo bằng JavaScript từ mảng object, có nút lọc kỹ năng ≥ 80%.
- Danh sách dự án đọc từ `js/data.json` bằng `fetch` + `async/await`, có xử lý lỗi `try/catch`.
- Chế độ sáng/tối, lưu lựa chọn bằng LocalStorage (tải lại trang vẫn giữ nguyên).
- Form liên hệ validate bằng HTML5 và JavaScript.

## Tác giả

Đặng Minh Thuận - Đại học Gia Định