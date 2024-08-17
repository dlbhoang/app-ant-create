import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Chào mừng trở lại"
      description1="Xây dựng kỹ năng cho hôm nay, ngày mai và xa hơn nữa."
      description2="Giáo dục để bảo vệ sự nghiệp của bạn trong tương lai."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
