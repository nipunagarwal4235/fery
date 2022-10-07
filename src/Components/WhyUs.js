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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className="mb-8 text-4xl font-extrabold leading-none md:pl-2">
          The quick, brown fox
          <br className="hidden md:block" />
          jumps over
          <span className="inline-block text-deep-purple-accent-400">
            a lazy dog
          </span>
        </h5>
        <img src={Modern} alt="" />
        <div className="grid gap-3 row-gap-3 lg:grid-cols-2">
          <ul className="space-y-3">
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
          </ul>
          <ul className="space-y-3">
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
              {points[4]}
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <TbBolt className="w-5 h-5 mt-px text-dark-pink"></TbBolt>
              </span>
              {points[5]}
            </li>
          </ul>
          <ul className="space-y-3">
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
              {points[7]}
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
    </>
  );
};

export default WhyUs;
