import React from "react";
import { team } from "../data";
import { FiLinkedin } from "react-icons/fi";

const Team = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {team.map((member) => {
              return (
                <>
                  <div class="p-4 lg:w-1/4 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src={member.image}
                      />
                      <div class="w-full">
                        <h2 class="title-font font-medium text-lg text-gray-900">
                          {member.name}
                        </h2>
                        <h3 class="text-gray-500 mb-3">{member.position}</h3>
                        <span class="inline-flex">
                          <a class="text-gray-500">
                            <FiLinkedin>{member.linkedin}</FiLinkedin>
                          </a>
                        </span>
                      </div>
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

export default Team;
