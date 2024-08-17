import React from 'react';
import HighlightText from './HighlightText';
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
            Công cụ hoàn hảo để
            <HighlightText text={"học bất kỳ ngôn ngữ nào"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Sử dụng Spin giúp việc học nhiều ngôn ngữ trở nên dễ dàng hơn với hơn 20 ngôn ngữ, giọng nói thực tế, theo dõi tiến trình, lịch trình tùy chỉnh và nhiều hơn nữa.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={Know_your_progress}
                alt="Theo dõi tiến trình của bạn"
                className="object-contain  lg:-mr-32 "
              />
              <img
                src={Compare_with_others}
                alt="So sánh với người khác"
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={Plan_your_lessons}
                alt="Lên kế hoạch cho các bài học của bạn"
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Tìm Hiểu Thêm</div>
            </CTAButton>
          </div>
    </div>
  );
}

export default LearningLanguageSection;
