import React from "react";
import { TbBolt } from "react-icons/tb";
import Modern from "../assets/Illustrations/undraw_modern_woman_re_d8bx.svg";

const WhyUs = () => {
  const points = [
    "Safe & Comfortable Rides",
    "Female Drivers",
    "Corporate Tie-Ups",
    "School Tie-ups",
    "Last Mile Connectivity",
    "Fight Insecurities",
    "Feel Safe & Comfortable",
    "Safety Products for Enhanced Security",
    "Travel Safe with Female Drivers",
  ];

  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Why</span>
            </span>{" "}
            Us
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-24">
        <div className="grid gap-3 row-gap-3 lg:grid-cols-2">
          <img src={Modern} alt="" />
          <div className="grid gap-3 row-gap-3 lg:grid-cols-2">
            <ul className="space-y-10">
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[0]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[1]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[2]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[3]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[7]}
              </li>
            </ul>
            <ul className="space-y-10">
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[4]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[5]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[6]}
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
                </span>
                {points[8]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
