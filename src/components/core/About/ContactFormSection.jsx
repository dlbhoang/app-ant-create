import React from "react";
import ContactUsForm from "../../Contact/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-4xl font-semibold">Liên hệ với chúng tôi</h1>
      <p className="text-center text-richblack-300 mt-3">
        Chúng tôi rất vui khi nhận được phản hồi từ bạn, vui lòng điền vào biểu mẫu này.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
