import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Học tập đẳng cấp thế giới cho",
    highliteText: "Mọi người, mọi nơi",
    description:
      "StudyNotion hợp tác với hơn 275+ trường đại học và công ty hàng đầu để mang đến cơ hội học tập trực tuyến linh hoạt, giá cả phải chăng và phù hợp với công việc cho các cá nhân và tổ chức trên toàn thế giới.",
    BtnText: "Khám Phá Thêm",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Chương trình học phù hợp với nhu cầu ngành",
    description:
      "Tiết kiệm thời gian và chi phí! Chương trình học của StudyNotion được thiết kế dễ hiểu và phù hợp với nhu cầu thực tế của ngành.",
  },
  {
    order: 2,
    heading: "Phương pháp học của chúng tôi",
    description:
      "StudyNotion hợp tác với hơn 275+ trường đại học và công ty hàng đầu để mang đến phương pháp học hiệu quả.",
  },
  {
    order: 3,
    heading: "Chứng nhận",
    description:
      "StudyNotion cung cấp chứng nhận uy tín giúp bạn nâng cao giá trị bản thân trong thị trường lao động.",
  },
  {
    order: 4,
    heading: `Đánh giá "Tự động"`,
    description:
      "Hệ thống đánh giá tự động giúp bạn theo dõi tiến trình học tập và cải thiện kết quả.",
  },
  {
    order: 5,
    heading: "Sẵn sàng làm việc",
    description:
      "StudyNotion cung cấp khóa học giúp bạn sẵn sàng cho thị trường lao động ngay sau khi hoàn thành.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
