import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactWomen from "../assets/Illustrations/undraw_contact_us_re_4qqt.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z17jh23",
        "template_sce9uds",
        form.current,
        "ljzSCBWR-zOD7Z6pF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you for your message");
  };
  return (
    <>
      <div
        id="contactus"
        className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800"
      >
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl text-dark-maroon font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-600">
              Let us know you better and serve better!
            </div>
          </div>
          <img src={ContactWomen} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              name="user_name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border-2 border-dark-pink bg-gray-100"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              name="user_email"
              id="email"
              type="email"
              className="w-full p-3 rounded border-2 border-dark-pink bg-gray-100"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              name="message"
              id="message"
              rows="3"
              className="w-full p-3 rounded border-2 border-dark-pink bg-gray-100"
            ></textarea>
          </div>
          <button
            value="Send"
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-dark-pink text-[#fff]"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
