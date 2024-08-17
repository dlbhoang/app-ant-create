// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"
import { useState } from "react"
import ConfirmationModal from "../components/common/ConfirmationModal"

function Home() {

  const [confirmationModal, setConfirmationModal] = useState(null);

  return (
    <div>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Trở thành giảng viên</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold">
          Nắm bắt cơ hội để
          <HighlightText text={"tăng thu nhập trực tuyến"} />
        </div>

        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          Tham gia các khóa học kiếm tiền online của chúng tôi để học hỏi các chiến lược hiệu quả nhất, linh hoạt theo thời gian và địa điểm của bạn. Bạn sẽ có quyền truy cập vào nguồn tài liệu đa dạng, hướng dẫn chi tiết, và sự hỗ trợ từ các chuyên gia, giúp bạn nhanh chóng đạt được mục tiêu tài chính.
        </div>

        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Tìm hiểu thêm
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Đặt lịch tư vấn
          </CTAButton>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Phát triển kỹ năng
                <HighlightText text={"kiếm tiền trực tuyến"} /> với các khóa học của chúng tôi.
              </div>
            }
            subheading={
              "Chương trình học của chúng tôi được xây dựng bởi những chuyên gia hàng đầu trong lĩnh vực kiếm tiền online. Với nhiều năm kinh nghiệm thực tiễn, họ sẽ chia sẻ những bí quyết và chiến lược hữu ích, giúp bạn nhanh chóng nắm bắt và áp dụng các phương pháp kiếm tiền hiệu quả nhất trên mạng."
            }
            ctabtn1={{
              btnText: "Thử ngay",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Tìm hiểu thêm",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`AntCreate không chỉ dạy bạn, mà còn hướng dẫn bạn biến kiến thức thành thu nhập thực tế. 💰 Với hỗ trợ từ cộng đồng và chúng tôi, bạn sẽ xây dựng sự nghiệp bền vững và đạt được tự do tài chính trong thế giới số. 🌟`}            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Bắt đầu
                <HighlightText text={"hành trình kiếm tiền online"} /> trong vài phút
              </div>
            }
            subheading={
              "Hãy trải nghiệm ngay. Với chương trình học của chúng tôi, bạn sẽ bắt đầu áp dụng các phương pháp kiếm tiền online thực tiễn ngay từ những bài học đầu tiên, giúp bạn nhanh chóng tạo ra thu nhập."
            }
            ctabtn1={{
              btnText: "Tiếp tục học",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Tìm hiểu thêm",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`AntCreate mở ra cơ hội kiếm tiền online dễ dàng và hiệu quả. 📚 Với các công cụ và phương pháp đã được chứng minh, bạn sẽ nhanh chóng nắm vững các kỹ năng như freelance, affiliate marketing, và kinh doanh online. 🚀 Tất cả giúp bạn tạo ra nguồn thu nhập không giới hạn từ bất cứ đâu.
            `}            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <ExploreMore />
      </div>

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Khám phá toàn bộ khóa học
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Tìm hiểu thêm
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Nắm bắt các kỹ năng cần thiết cho những
              <HighlightText text={"cơ hội kiếm tiền đang được ưa chuộng."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                Trong thế giới hiện đại, việc học không chỉ đơn thuần là theo quy tắc. Ngày nay, để trở thành một chuyên gia cạnh tranh, bạn cần nhiều hơn những kỹ năng chuyên môn. Việc hiểu và áp dụng các phương pháp kiếm tiền online hiệu quả là một phần thiết yếu để đạt được thành công trong môi trường số.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                Tìm hiểu thêm
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />

        <h1 className="text-center text-4xl font-semibold mt-8">
          Đánh giá từ các học viên khác
        </h1>
        <ReviewSlider />
      </div>

      <Footer />

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </div>
  )
}

export default Home
