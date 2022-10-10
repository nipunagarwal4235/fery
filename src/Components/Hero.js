import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Woman from "../assets/Illustrations/Untitled.svg";

const Hero = () => {
  return (
    <>
      <section className="text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:pb-16 lg:pt-24  lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl text-dark-maroon font-bold font-poppins leading-none sm:text-6xl">
              She
              <span className="text-dark-pink"> Drives</span> <br />
              for Her
              <span className="text-dark-pink"> Safety</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Fery is India’s first safest and the most convenient bike taxi
              service for women <br className="hidden md:inline lg:hidden" />
              providing last mile connectivity which is driven by women.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold text-[#fff] rounded bg-light-pink text-gray-50"
              >
                <a href="https://forms.gle/ExXAqb8oAVKDSf5H9" target="_blank">
                  Join Us
                </a>
              </button>

              <button
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-semibold border rounded border-dark-pink"
              >
                <Link
                  class="font-medium font-poppins tracking-wide text-gray-100 transition-colors duration-200 hover:text-dark-pink cursor-pointer"
                  activeClass="active"
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Woman}
              alt="Super Woman"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
