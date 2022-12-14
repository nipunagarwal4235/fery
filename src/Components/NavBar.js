import React, { useState } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../assets/Fery SVG.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    {
      name: "About Us",
      section: "aboutus",
    },
    {
      name: "Why Us?",
      section: "whyus",
    },
    {
      name: "Blogs",
      section: "blogs",
    },
    {
      name: "Contact Us",
      section: "contactus",
    },
  ];
  return (
    <>
      <div class="bg-white">
        <div class="sticky top-0 shadow-md px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img className="w-16" src={Logo} alt="fery logo" />
            </a>
            <ul class="items-center space-x-8 lg:flex hidden">
              {options.map((option) => {
                return (
                  <>
                    <li>
                      <Link
                        class="font-medium font-poppins tracking-wide text-gray-100 transition-colors duration-200 hover:text-light-pink cursor-pointer"
                        activeClass="active"
                        to={option.section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {option.name}
                      </Link>
                    </li>
                  </>
                );
              })}
              <li>
                <a
                  href="https://forms.gle/ExXAqb8oAVKDSf5H9"
                  target="_blank"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium font-poppins tracking-wide text-white transition duration-200 rounded shadow-md bg-light-pink hover:bg-dark-pink focus:shadow-outline focus:outline-none"
                  aria-label="Join Us"
                  title="Join Us"
                >
                  Join Us
                </a>
              </li>
            </ul>

            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-light-pink border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <span class="ml-2 text-xl font-poppins font-bold tracking-wide text-gray-800 uppercase">
                            Fery
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        {options.map((option) => {
                          return (
                            <>
                              <li>
                                <Link
                                  class="font-medium tracking-wide text-gray-700 cursor-pointer"
                                  activeClass="active"
                                  to={option.section}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                >
                                  {option.name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
