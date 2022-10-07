import React from "react";

import { testimonials } from "../data";

const Testimonial = () => {
  return (
    <>
      <section class="text-gray-600 font-poppins">
        <div class="container px-5 py-24 mx-auto">
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
