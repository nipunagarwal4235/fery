import React from "react";
import Logo from "../assets/Fery SVG.svg";

import {
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandTwitter
} from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              
              <img src={Logo} className="w-16" alt="" />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
              A safe and secure mobility solution only for females by Fery. 
              </p>
              <p className="mt-4 text-sm text-gray-800">
              Fery rides are women-driven two-wheeler taxi service for females, which would help them to travel short distances safely and soundly. Therefore, saving their time and money.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:6200671493"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91-6200671493
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:feryrides@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                feryrides@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps/place/BML+Munjal+University+(BMU)/@28.2476758,76.8114382,17z/data=!3m1!4b1!4m5!3m4!1s0x390d478e1d59b7fb:0xb1787ccb5563c223!8m2!3d28.2476758!4d76.8136269"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                67th Milestone, NH-8, <br />
                BML Munjal University,
                <br />
                Sidhrawali, Gurugram,
                <br />
                Haryana.
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://www.instagram.com/feryrides/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TbBrandInstagram className="h-6 w-6"></TbBrandInstagram>
              </a>
              <a
                href="https://www.linkedin.com/company/fery-rides/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TbBrandLinkedin className="h-6 w-6"></TbBrandLinkedin>
              </a>
              <a
                href="https://www.facebook.com/feryrides/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TbBrandFacebook className="h-6 w-6"></TbBrandFacebook>
              </a>
              <a
                href="https://www.youtube.com/channel/UCclfgV95wVYt6OWf6Dh_6Cg"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TbBrandYoutube className="h-6 w-6"></TbBrandYoutube>
              </a>
              <a
                href="https://twitter.com/FeryRides"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <TbBrandTwitter className="h-6 w-6"></TbBrandTwitter>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Follow us on our social media handles for more intresting news and
              announcements.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2022 Fery Rides All rights reserved.
          </p>
          {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
