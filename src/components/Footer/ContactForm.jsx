import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-between">
      <form action="" className="mt-3 w-full">
        <div className="flex flex-col">
          <input
            type="text"
            id="name"
            className="bg-[#F3F3F3] w-full h-16 p-3 mt-2"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col mt-3">
          <input
            type="text"
            id="email"
            className="bg-[#F3F3F3] w-full h-16 p-3 mt-2"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mt-3">
          <textarea
            type="text"
            id="name"
            className="bg-[#F3F3F3] w-full h-32 p-3 mt-2"
            placeholder="Type your message here"
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
