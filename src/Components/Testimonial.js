import React from "react";

import { testimonials } from "../data";

const Testimonial = () => {
  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-dark-maroon sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">{"  "}We </span>
            </span>{" "}
            value your opinions
          </h2>
          <p className="text-base text-gray-700 md:text-md">
            Our customers feed forward comments and their problems have
            encouraged us to work for Fery and come up with a solution that can
            provide women with an enjoyable and pleasant ride.
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
                        class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-light-pink bg-gray-100"
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
