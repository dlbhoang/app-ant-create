import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactFormSection from "../components/core/About/ContactFormSection"
import LearningGrid from "../components/core/About/LearningGrid"
import Quote from "../components/core/About/Quote"
import StatsComponenet from "../components/core/About/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Đổi mới giáo dục trực tuyến cho một
            <HighlightText text={"Tương lai sáng lạn"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              StudyNotion dẫn đầu trong việc cách mạng hóa giáo dục trực tuyến. Chúng tôi tận tâm tạo ra một tương lai tươi sáng hơn bằng cách cung cấp các khóa học tiên tiến, áp dụng công nghệ mới nhất và xây dựng một cộng đồng học tập năng động.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Câu chuyện hình thành
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Nền tảng e-learning của chúng tôi ra đời từ tầm nhìn chung và đam mê thay đổi cách học. Bắt đầu từ một nhóm các nhà giáo dục, chuyên gia công nghệ và những người yêu thích học hỏi, chúng tôi nhận thấy nhu cầu về các cơ hội học tập linh hoạt và chất lượng cao trong thế giới số hiện đại.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Với kinh nghiệm thực tiễn trong giáo dục, chúng tôi hiểu rõ những hạn chế của hệ thống giáo dục truyền thống. Chúng tôi tin rằng giáo dục không nên bị giới hạn trong lớp học hay bởi ranh giới địa lý. Chúng tôi hình dung một nền tảng có thể phá vỡ những rào cản này và giúp mọi người từ mọi tầng lớp phát huy tối đa tiềm năng của mình.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Tầm nhìn của chúng tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Với tầm nhìn đó, chúng tôi bắt tay vào xây dựng một nền tảng học trực tuyến đổi mới. Đội ngũ chuyên gia của chúng tôi đã nỗ lực không ngừng để phát triển một nền tảng mạnh mẽ và dễ sử dụng, kết hợp công nghệ tiên tiến với nội dung hấp dẫn, tạo ra một trải nghiệm học tập tương tác và năng động.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Sứ mệnh của chúng tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Sứ mệnh của chúng tôi không chỉ dừng lại ở việc cung cấp khóa học trực tuyến. Chúng tôi muốn tạo ra một cộng đồng học viên sôi nổi, nơi mọi người có thể kết nối, hợp tác và học hỏi lẫn nhau. Chúng tôi tin rằng tri thức phát triển trong môi trường chia sẻ và đối thoại, và chúng tôi thúc đẩy điều này thông qua các diễn đàn, buổi học trực tiếp và cơ hội kết nối.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Đánh giá từ các học viên khác
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
