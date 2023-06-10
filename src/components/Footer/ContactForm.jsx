import React from "react";
import { sendForm } from "@emailjs/browser";
import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "../../constants/email";

const ContactForm = () => {
  const form = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.email;
    if(emailInput.value.trim() !== ''){
      setShowSuccessMessage(false);
      setLoading(true);
      sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        form.current.reset();
          setLoading(false);
          setShowSuccessMessage(true);
          setTimeout(()=>{
            setShowSuccessMessage(false)
          },5000);
      },
      (error) => {
        form.current.reset();
          setLoading(false);
          setShowSuccessMessage(true);
          setTimeout(()=>{
            setShowSuccessMessage(false)
          },5000);
      },
    );
    }
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
       {!loading ? (
          <div className="flex items-center">
            <button type="submit" className="bg-[#2D2D2D] mt-3 w-52 h-16 text-white mt-8">
              Submit
            </button>
            {
              showSuccessMessage && (
                <div className="flex justify-center items-center text-green-500 mt-6 ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                  </svg>
                  <p className="ml-1 text-center">Your query has been submitted.</p>
                </div>
              )
            }
          </div>
        ) : (
          <div className="bg-[#2D2D2D] mt-3 w-52 h-16 text-white mt-8 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              style={{ width: '70%', height: '70%', display: 'block' }}
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#dcdcdc"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                />
              </circle>
            </svg>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
