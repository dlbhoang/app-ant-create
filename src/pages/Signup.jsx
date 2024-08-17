import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Tham gia cùng hàng triệu người học lập trình với Ant&Create miễn phí"
      description1="Xây dựng kỹ năng cho hôm nay, ngày mai và xa hơn nữa."
      description2="Giáo dục để bảo vệ sự nghiệp của bạn trong tương lai."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
