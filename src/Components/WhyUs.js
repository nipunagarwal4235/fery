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
      <div id="whyus">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-dark-maroon sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Why</span>
              </span>{" "}
              Us
            </h2>
            <p className="text-base text-gray-700 md:text-md">
              Fery aims to break the gender stereotypes, and build an ecosystem
              where women can feel safe while travelling. We bring you the most
              comfortable and convenient ride with our service model.
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
      </div>
    </>
  );
};

export default WhyUs;
