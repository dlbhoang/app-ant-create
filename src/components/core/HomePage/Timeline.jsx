import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Khả năng lãnh đạo",
      Description: "Cam kết hoàn toàn với việc giúp bạn đạt được thành công trong các chiến lược kiếm tiền online.",
    },
    {
      Logo: Logo2,
      Heading: "Trách nhiệm",
      Description: "Chúng tôi luôn đặt sự hỗ trợ và thành công của học viên lên hàng đầu.",
    },
    {
      Logo: Logo3,
      Heading: "Tính linh hoạt",
      Description: "Khả năng thích ứng với các phương pháp kiếm tiền khác nhau là một yếu tố quan trọng để thành công trực tuyến.",
    },
    {
      Logo: Logo4,
      Heading: "Giải quyết vấn đề",
      Description: "Áp dụng các kỹ thuật kiếm tiền trực tuyến để tìm ra giải pháp hiệu quả cho các thách thức tài chính.",
    },
  ];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt={ele.Heading} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Năm kinh nghiệm
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                loại khóa học
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="Hình ảnh lộ trình"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
