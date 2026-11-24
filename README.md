# 🚀 BA Copilot Studio — Tool Hỗ Trợ Phân Tích Nghiệp Vụ (Vibe Coding)

Ứng dụng web cục bộ (Local Web App) phong cách **Vibe Coding (Dark Glassmorphism & Neon Glow)** hỗ trợ chuyên sâu cho vị trí **Business Analyst (BA)**.

---

## 🌟 Tính Năng Chính

- **⚡ Auto HDSD Generator (MVP Core):**
  - Tự động đọc dữ liệu nguồn từ tài liệu SRS, Use Case (`.docx`, `.pdf`, `.xlsx`).
  - Hỗ trợ nạp file Template Word mẫu và **giữ nguyên 100% định dạng, header, footer, style**.
  - AI Vision tự động nhận diện và đối chiếu ảnh chụp màn hình UI thực tế để chèn vào đúng từng bước thao tác.
- **📊 Bento Grid Dashboard:**
  - Theo dõi tiến độ khớp tài liệu HDSD (Productivity Ring).
  - Bộ đếm thời gian tập trung làm việc (Focus Timer).
  - Quản lý checklist luồng nghiệp vụ.
  - Phím tắt xuất file nhanh chóng.
- **📝 BA Workspace & Use Case (Giai đoạn tiếp theo):**
  - Soạn thảo tài liệu chuẩn Notion-like.
  - Tự động vẽ sơ đồ luồng (Flowchart, Sequence) qua Mermaid.js.
  - Tích hợp bảng vẽ phác thảo UI (Excalidraw) và nhúng thiết kế Figma.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend & Backend:** Next.js 16 (App Router, TypeScript, React 19)
- **Styling & UI:** Tailwind CSS, Lucide Icons, Dark Glassmorphism Custom Utilities
- **Xử lý tài liệu Word:** `docxtemplater`, `pizzip`, `mammoth`
- **Lưu trữ dữ liệu:** `dexie` (IndexedDB cục bộ)

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ

1. **Di chuyển vào thư mục ứng dụng:**
   ```bash
   cd ba-studio
   ```

2. **Cài đặt các thư viện (nếu clone về máy mới):**
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển:**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt:**
   Truy cập `http://localhost:3000` để bắt đầu sử dụng.

---

## 📑 Tài Liệu Quy Trình

- [Ke-hoach-Du-an-BA-Tools.md](./Ke-hoach-Du-an-BA-Tools.md) — Kế hoạch và lộ trình phát triển chi tiết
- [Quy-trinh.md](./Quy-trinh.md) — Khung quy trình phân tích bài toán BA
