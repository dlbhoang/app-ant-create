import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data:", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: "OK" };
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneno: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex-col gap-5 flex">
        <div className="flex flex-col md:flex-row w-full gap-5">
          {/* firstname */}
          <div className="flex w-full flex-col">
            <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="firstname">
              Tên
            </label>
            <input 
              className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              type="text" 
              name="firstname" 
              id="firstname"
              placeholder="Nhập tên của bạn"
              {...register("firstname", { required: "Vui lòng nhập tên" })}
            />
            {errors.firstname && (
              <span>
                {errors.firstname.message}
              </span>
            )}
          </div>

          {/* lastname */}
          <div className="flex w-full flex-col">
            <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="lastname">
              Họ
            </label>
            <input
              className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }} 
              type="text" 
              name="lastname" 
              id="lastname"
              placeholder="Nhập họ của bạn"
              {...register("lastname")}
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="email">
            Địa chỉ email
          </label>
          <input 
            className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            type="email"
            name="email"
            id="email"
            placeholder="Nhập địa chỉ email"
            {...register("email", { required: "Vui lòng nhập địa chỉ email" })}
          />
          {errors.email && (
            <span>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* phone no */}
        <div className="flex w-full flex-col gap-2">
          <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="phoneno">Số điện thoại</label>

          <div className="flex flex-col md:flex-row gap-5">
            {/* dropdown */}
            <select 
              className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium p-3 rounded-lg md:w-[15%]"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              name="dropdown"
              id="dropdown"
              {...register("countrycode", { required: "Vui lòng chọn mã quốc gia" })}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option className="text-[#999DAA]" value={element.code} key={index}>
                    {element.code} - {element.country}
                  </option>
                );
              })}
            </select>

            <div className="w-[100%]">
              <input 
                type="number"
                className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                name="phoneno"
                id="phoneno"
                placeholder="Nhập số điện thoại của bạn"
                {...register("phoneno", {
                  required: { value: true, message: "Vui lòng nhập số điện thoại" },
                  maxLength: { value: 10, message: "Số điện thoại không hợp lệ" },
                  minLength: { value: 8, message: "Số điện thoại không hợp lệ" }
                })}
              />
              {errors.phoneno && (
                <span>
                  {errors.phoneno.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col">
          <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="message">Tin nhắn</label>
          <textarea 
            className="bg-[#161D29] text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            name="message" 
            id="message" 
            cols="30"
            rows="10"
            placeholder="Nhập tin nhắn của bạn ở đây"
            {...register("message", { required: "Vui lòng nhập tin nhắn" })}
          />
          {errors.message && (
            <span>
              {errors.message.message}
            </span>
          )}
        </div>

        {/* submit */}
        <button 
          className="rounded-md bg-yellow-50 text-center text-sm px-6 py-3 font-semibold text-[#000814]"
          type="submit"
        >
          Gửi tin nhắn
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
