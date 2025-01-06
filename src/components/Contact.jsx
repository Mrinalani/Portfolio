import React from "react";
import Section from "./Section";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import contact from "../assets/mobile.png";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https:/twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https:/facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 1,
      link: "https:/linkedin.com",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <Section
      title="Contact 📞"
      subtitle="These are the ways you can get in topuch with me. Hope to here from you soon :)"
    >
      <div className=" flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="contact Info" className="w-34 h-32" />
        </div>
        <div>
          <p className="max-w-xl md:max-w-lg font-extralight">
            I am open to talk regarding freelancing or full-time
            opportunities.Feel free to contact me using your perfect medium
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_bank"
              rel="noopenor noreferrer"
              className="duration-200 ease-in-out hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/bejjxola" method="post">
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text:text- resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
