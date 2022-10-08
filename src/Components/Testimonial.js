import React from "react";

import { testimonials } from "../data";

const Testimonial = () => {
  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
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
              <span className="relative">{"  "}We </span>
            </span>{" "}
            value your opinions
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <section class="text-gray-600 font-poppins">
        <div class="container px-5 pb-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {testimonials.map((member) => {
              return (
                <>
                  <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                      <img
                        alt="testimonial"
                        class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-dark-pink bg-gray-100"
                        src={member.image}
                      />
                      <p class="leading-relaxed">"{member.testimonial}"</p>
                      <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                        -{member.name}
                      </h2>
                      <p class="text-gray-500">{member.location}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
