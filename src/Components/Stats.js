import React from "react";

import { TbSteeringWheel } from "react-icons/tb";
import { TbWoman } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { TbClick } from "react-icons/tb";

const Stats = () => {
  const stat = [
    20, 500, 276, 15,
    // "20+ Drivers",
    // "500+ Customers",
    // "216K+ Reach",
    // "15K+ Engagement",background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
  ];

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
              <span className="relative">Our</span>
            </span>
            {" "}Impact
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
              <TbSteeringWheel className="w-8 h-8 text-dark-pink sm:w-10 sm:h-10"></TbSteeringWheel>
            </div>
            <h6 className="text-4xl font-bold text-">{stat[0]}+</h6>
            <p className="mb-2 font-bold text-md">Driver Leads</p>
            <p className="text-gray-700">
              Working towards creating more and more employment for women,
              giving them a sense of freedom and independency.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
              <TbWoman className="w-8 h-8 text-dark-pink sm:w-10 sm:h-10"></TbWoman>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {stat[1]}+
            </h6>
            <p className="mb-2 font-bold text-md">Customers</p>
            <p className="text-gray-700">
              Fery is Looking forward to help their customers fight with
              insecurities and providing better mobility solution for short
              distances.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
              <TbUsers className="w-8 h-8 text-dark-pink sm:w-10 sm:h-10"></TbUsers>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {stat[2]}K+
            </h6>
            <p className="mb-2 font-bold text-md">Reach</p>
            <p className="text-gray-700">
              We’re here to increaisngly reach customers for a hassle free, safe
              and secure ride.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
              <TbClick className="w-8 h-8 text-dark-pink sm:w-10 sm:h-10"></TbClick>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {stat[3]}K+
            </h6>
            <p className="mb-2 font-bold text-md">Enagagement</p>
            <p className="text-gray-700">
              Fery has so far touched the lives of many people through their
              online social presence, further anticipating support and love from
              it’s customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
