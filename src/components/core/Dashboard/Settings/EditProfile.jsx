import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../../../../App.css"
import { updateProfile } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

const genders = ["Nam", "Nữ", "Khác", "Không muốn nói", "Khác"]

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("LỖI - ", error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Thông Tin Hồ Sơ
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstName" className="text-[14px] leading-[22px] font-[400] text-white">
                Tên
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Nhập tên"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full text-[16px] leading-[24px] font-[500] text-[#999DAA] rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 "
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Vui lòng nhập tên của bạn.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastName" className="text-[14px] leading-[22px] font-[400] text-white">
                Họ
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Nhập họ"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Vui lòng nhập họ của bạn.
                </span>
              )}
            </div>
          </div>

          <div className="flex relative flex-col gap-5 lg:flex-row">
            <div className="flex relative flex-col gap-2 lg:w-[48%]">
              <label htmlFor="dateOfBirth" className="text-[14px] leading-[22px] font-[400] text-white">
                Ngày Sinh
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full relative rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập Ngày Sinh của bạn.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Ngày Sinh không thể ở tương lai.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="gender" className="text-[14px] leading-[22px] font-[400] text-white">
                Giới Tính
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Vui lòng chọn Giới Tính của bạn.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="text-[14px] leading-[22px] font-[400] text-white">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Nhập Số Điện Thoại"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập Số Điện Thoại của bạn.",
                  },
                  maxLength: { value: 12, message: "Số Điện Thoại không hợp lệ" },
                  minLength: { value: 10, message: "Số Điện Thoại không hợp lệ" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="text-[14px] leading-[22px] font-[400] text-white">
                Giới Thiệu
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Nhập Thông Tin Giới Thiệu"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Vui lòng nhập thông tin giới thiệu của bạn.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Hủy
          </button>
          <IconBtn
            customClasses="flex bg-yellow-100 flex-row items-center gap-2 text-richblack-900 
            px-4 py-2 rounded-lg font-[600] "
            type="submit" text="Lưu" />
        </div>
      </form>
    </>
  )
}
