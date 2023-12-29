import React from "react";
import { Linkedin, Github , Mail,Twitter } from "lucide-react";
const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-center">
          <div className="w-auto p-8">
            <div className="mb-[150px]">
              <div className="text-2xl text-center font-bold text-gray-900 md:text-5xl">
                Connect With Me
              </div>
            </div>
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  <span className="px-3">
                    <Linkedin />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  <span className="px-3">
                  <Twitter />
                  </span>
                  Twitter
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  <span className="px-3">
                  <Github />
                  </span>
                  GitHub
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                >
                   <span className="px-3">
                   <Mail />
                  </span>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
