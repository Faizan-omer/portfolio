import React from "react";
import socials from "../../common/socials";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="w-full my-12 px-5 md:px-16" id="contact">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col flex-1">
          <p className="font-bold text-left leading-7 text-xl">Let's work together</p>
          <p className="leading-6 w-3/4 mt-4">
            For any queries or work related info you can use the form to reach out to me.
            I'd be glad to be of service
          </p>
          <div className="mt-6 flex justify-between w-1/2 md:w-1/4">
            {socials.map((social, index) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="hover:cursor-pointer"
              >
                <img src={social.logo} alt="" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
