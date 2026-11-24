# 🗺️ Kế Hoạch & Quy Trình Phát Triển: BA Toolset Web App

> **Mục tiêu:** Xây dựng ứng dụng Web cục bộ (Local Web App) hỗ trợ chuyên sâu cho vị trí Business Analyst (BA) trong việc sinh tài liệu HDSD tự động, soạn thảo tài liệu (BRD/SRS), phân tích Use Case, vẽ biểu đồ và thiết kế wireframe.

---

## 1. ĐỀ BÀI — *Bài toán cần giải quyết*

- **Đối tượng sử dụng:** Cá nhân tác giả (công cụ phục vụ nội bộ, không cần hệ thống tài khoản/đăng nhập phức tạp, mở lên là dùng ngay).
- **Mục tiêu trọng tâm cho MVP (Phiên bản đầu tiên):** 
  - Giải quyết bài toán tốn nhiều thời gian nhất của BA: **Viết tài liệu Hướng dẫn sử dụng (HDSD)** cho hệ thống phần mềm đã có sẵn.
  - Tự động hóa quá trình tổng hợp từ các tài liệu đặc tả (SRS, Use Case, quy trình) kết hợp với ảnh chụp màn hình thực tế, sau đó tự điền vào **file mẫu (template Word) có sẵn** và đảm bảo **giữ nguyên 100% định dạng/style chuẩn** của file mẫu.
- **Tầm nhìn mở rộng:**
  - Workspace soạn thảo tài liệu phân tích BRD, SRS, HDSD linh hoạt (Form-based & Block-based Notion).
  - Quản lý ma trận Use Case và tự động vẽ biểu đồ nghiệp vụ (Mermaid/PlantUML).
  - Bảng vẽ phác thảo UI/Wireframe (Excalidraw) và nhúng thiết kế Figma.

---

## 2. OUTPUT — *Sản phẩm đầu ra mong muốn*

### 2.1. Module cốt lõi MVP: Trợ lý sinh tài liệu HDSD tự động
1. **Giao diện nhận diện dữ liệu đầu vào:**
   - Khu vực chọn file tài liệu nguồn (SRS, Use case, Quy trình).
   - Khu vực chọn file Template Word mẫu.
   - Khu vực chọn Folder ảnh chụp màn hình hệ thống.
2. **Khả năng xử lý & Xuất bản (Export):**
   - Đọc và phân tích logic luồng nghiệp vụ từ tài liệu nguồn.
   - AI nhận diện và khớp ảnh chụp màn hình vào đúng bước thực hiện (Step-by-step).
   - Xuất file kết quả định dạng `.docx` (Word chuẩn format mẫu), `.pdf`, và `.md` (Markdown).

### 2.2. Module mở rộng tiếp theo (BA Workspace)
1. **Soạn thảo tài liệu chuẩn:** Form-based kết hợp Rich-text Editor (kiểu Notion block) cho BRD/SRS/HDSD.
2. **Quản lý Use Case & Biểu đồ:**
   - Bảng quản lý chi tiết Use Case (Actor, Pre-conditions, Main Flow, Alternate/Exception Flows).
   - Tự động render biểu đồ (Use Case Diagram, Flowchart, Activity Diagram) qua Mermaid.
3. **Thiết kế giao diện (UI/UX Mockup):**
   - Tích hợp bảng vẽ kéo-thả wireframe Excalidraw.
   - Khu vực gắn link và xem trước (preview) bản vẽ Figma.
   - Trợ lý AI sinh gợi ý wireframe & phát hiện Edge Cases từ User Story.

---

## 3. INPUT — *Dữ liệu do người dùng cung cấp*

1. **Dữ liệu nguồn nghiệp vụ từ máy tính cá nhân:**
   - Tài liệu Word (`.docx`), Excel (`.xlsx`), PDF (`.pdf`), hoặc ảnh quy trình (`.png`, `.jpg`).
   - Cụ thể: Tài liệu SRS, đặc tả Use Case, tài liệu mô tả luồng tính năng.
2. **File Template mẫu:**
   - File Word `.docx` chuẩn (chứa sẵn Header, Footer, Bìa, Mục lục, Font chữ, Bảng biểu mẫu).
3. **Folder ảnh màn hình (Screenshots):**
   - Tập hợp các ảnh chụp màn hình tính năng thực tế của phần mềm.
4. **Cấu hình AI API Key:**
   - API Key cá nhân (Google Gemini API / OpenAI API) được lưu cục bộ an toàn trong file cấu hình `.env`.

---

## 4. ĐỀ XUẤT CÔNG NGHỆ (Tech Stack Tối Ưu)

- **Kiến trúc:** Local Web Application (chạy trên `http://localhost:3000`).
- **Framework nền tảng:** **Next.js (App Router, React 19, TypeScript, Tailwind CSS)**.
- **Thư viện UI:** **Shadcn UI + Lucide Icons** (hiện đại, trực quan, chuyên nghiệp).
- **Xử lý Template Word:** **Docxtemplater + Pizzip** (giữ nguyên cấu trúc Word, chèn ảnh và văn bản vào đúng placeholder).
- **Trình soạn thảo văn bản:** **Tiptap** / **BlockNote** (Notion-style block editor).
- **Bảng vẽ & Biểu đồ:** **@excalidraw/excalidraw** và **Mermaid.js**.
- **Lưu trữ dữ liệu:** **Dexie.js (IndexedDB)** (lưu cục bộ trong trình duyệt, dung lượng lớn, mở web là có ngay dữ liệu).
- **Mô hình AI:** **Google Gemini 2.0 / 1.5 Flash (Vision)** (xử lý văn bản cực dài + thị giác nhận diện ảnh chụp màn hình chính xác và tiết kiệm).

---

## 5. CÁC BƯỚC TRIỂN KHAI & TIÊU CHÍ KIỂM TRA

### 🚀 Giai đoạn 1: Triển khai MVP - Công cụ tạo tài liệu HDSD tự động

1. **Bước 1: Khởi tạo kiến trúc dự án Next.js**
   - Thiết lập Next.js, TypeScript, Tailwind CSS, Shadcn UI.
   - Cấu hình API Route cục bộ để đọc file/folder từ máy tính.
   - -> *Check 1:* Ứng dụng chạy mượt mà trên `localhost:3000`, giao diện sạch sẽ, nhận diện được file tải lên.

2. **Bước 2: Xây dựng Module Xử lý Template & Ghép dữ liệu Word**
   - Tích hợp `docxtemplater` + `pizzip` + `mammoth`.
   - Tạo bộ parser đọc tài liệu nguồn (SRS/Use Case) và trích xuất cấu trúc bước làm.
   - -> *Check 2:* Xuất thử một file `.docx` từ template mẫu, kiểm tra 100% style/font không bị vỡ.

3. **Bước 3: Tích hợp Trợ lý AI (Multimodal Vision)**
   - Kết nối AI (Gemini / OpenAI Vision) để phân tích ảnh màn hình và đối chiếu với các bước thao tác trong tài liệu nguồn.
   - Tự động sinh nội dung hướng dẫn từng bước và gán đúng ảnh màn hình vào vị trí tương ứng.
   - -> *Check 3:* AI viết đúng hướng dẫn cho ít nhất 1 luồng tính năng mẫu và gắn đúng ảnh màn hình minh họa.

4. **Bước 4: Hoàn thiện tính năng Preview & Export**
   - Xem trước nội dung tài liệu trước khi tải về.
   - Hỗ trợ tải về định dạng `.docx`, `.pdf`, `.md`.
   - -> *Check 4:* Người dùng bấm nút "Xuất file", nhận được file HDSD hoàn chỉnh.

---

### 🎨 Giai đoạn 2: BA Workspace & Trực trực quan hóa
- [ ] Tích hợp trình soạn thảo Notion-like (Tiptap/BlockNote).
- [ ] Xây dựng bảng quản lý ma trận Use Case.
- [ ] Tự động vẽ sơ đồ luồng qua Mermaid.js từ văn bản.

### 💡 Giai đoạn 3: Wireframe Studio & AI Edge Case Finder
- [ ] Nhúng bảng vẽ Excalidraw và khung nhúng Figma.
- [ ] Tích hợp tính năng AI tự động gợi ý User Stories và phát hiện Edge Cases còn thiếu.
