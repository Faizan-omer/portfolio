import React from "react";
import { sendForm } from "@emailjs/browser";
import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "../../constants/email";

const ContactForm = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <div className="flex flex-col justify-between">
      <form ref={form} onSubmit={sendEmail} className="mt-3 w-full">
        <div className="flex flex-col">
          <input
            type="text"
            id="name"
            className="bg-[#F3F3F3] w-full h-16 p-3 mt-2"
            placeholder="Name"
            name="from_name"
          />
        </div>
        <div className="flex flex-col mt-3">
          <input
            type="text"
            id="email"
            className="bg-[#F3F3F3] w-full h-16 p-3 mt-2"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex flex-col mt-3">
          <textarea
            type="text"
            id="name"
            className="bg-[#F3F3F3] w-full h-32 p-3 mt-2"
            placeholder="Type your message here"
            name="message"
          />
        </div>
        <button type="submit" className="bg-[#2D2D2D] mt-3 w-52 h-16 text-white mt-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
