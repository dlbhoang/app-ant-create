import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Thêm Khóa Học
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Mẹo Tải Khóa Học</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Đặt tùy chọn Giá Khóa Học hoặc để miễn phí.</li>
            <li>Kích thước chuẩn cho hình thu nhỏ của khóa học là 1024x576.</li>
            <li>Phần Video điều khiển video tổng quan của khóa học.</li>
            <li>Trình Xây Dựng Khóa Học là nơi bạn tạo và tổ chức khóa học.</li>
            <li>
              Thêm Các Chủ Đề trong phần Trình Xây Dựng Khóa Học để tạo bài học,
              câu hỏi và bài tập.
            </li>
            <li>
              Thông tin từ phần Dữ Liệu Bổ Sung sẽ hiển thị trên trang chi tiết
              của khóa học.
            </li>
            <li>Đưa Thông Báo để thông báo bất kỳ thông tin quan trọng nào</li>
            <li>Ghi Chú cho tất cả học viên đã đăng ký cùng một lúc.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
