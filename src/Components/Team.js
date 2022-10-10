import React from "react";
import { team } from "../data";
import { FiLinkedin } from "react-icons/fi";
import { TbQuestionMark } from "react-icons/tb";
import { GiChargedArrow, GiBinoculars, GiConqueror } from "react-icons/gi";

const Team = () => {
  const aboutus = [
    {
      name: "Our Motto",
      logo: (
        <GiConqueror className="w-16 h-16 text-[#fff] lg:w-20 lg:h-20"></GiConqueror>
      ),
      description:
        "Sister partners available at every possible location of the city. Keeping the safety and security of our sister partners as our topmost priority as well as the travellers",
    },
    {
      name: "Our Vision",
      logo: (
        <GiBinoculars className="w-16 h-16 text-[#fff] lg:w-20 lg:h-20"></GiBinoculars>
      ),
      description: "Fostering a better tomorrow for Womankind",
    },
    {
      name: "Our Mission",
      logo: (
        <GiChargedArrow className="w-16 h-16 text-[#fff] lg:w-20 lg:h-20"></GiChargedArrow>
      ),
      description:
        "Fery seeks to create and promote a safe and secure mobility solution for women where there is Liberty, Integrity and Equality.",
    },
    {
      name: "What we do?",
      logo: (
        <TbQuestionMark className="w-16 h-16 text-[#fff] lg:w-20 lg:h-20"></TbQuestionMark>
      ),
      description:
        "A safe and secure mobility solution only for females by Fery. Fery rides are women-driven two wheeler taxi service for females, which would help them to travel short distances safely and soundly. Therefore, saving their time and money.",
    },
  ];

  return (
    <>
    
      <div id="aboutus" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 lg:pb-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-dark-maroon sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative font-poppins"> About </span>
            </span>{" "}
            Us
          </h2>
          <p className="text-base text-gray-700 md:text-md">
            We seek to create more and more job opportunities for our sister
            partners to empower women. We also provide our customers assured
            safety and economically priced service, so that you can experience
            an hassle-free ride even during the traffic hours.
          </p>
        </div>
      </div>
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-2 ">
          {aboutus.map((point) => {
            return (
              <>
                <div className="relative p-px overflow-hidden transition duration-300 transform  rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                  <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-dark-pink group-hover:scale-x-100" />
                  <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-dark-pink group-hover:scale-y-100" />
                  <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-dark-pink group-hover:scale-x-100" />
                  <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-dark-pink group-hover:scale-y-100" />
                  <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                    <div className="mb-6 mr-6 lg:mb-0">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-light-pink lg:w-32 lg:h-32">
                        {point.logo}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h6 className="mb-2 font-semibold leading-5">
                          {point.name}
                        </h6>
                        <p className="mb-2 text-sm text-gray-900">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 lg:mt-24">
          <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-dark-maroon sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative font-poppins"> Meet Our Founders </span>
            </span>
          </h2>
        </div>
        <div class="container px-5 pb-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            {team.map((member) => {
              return (
                <>
                  <div class="p-4 lg:w-1/2 md:w-1/2">
                    <div class="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center mb-4 border-light-pink border-4"
                        src={member.image}
                      />
                      <div class="w-full">
                        <h2 class="title-font font-medium font-poppins text-lg text-gray-900">
                          {member.name}
                        </h2>
                        <h3 class="text-gray-500 mb-3">{member.position}</h3>
                        <span class="inline-flex">
                          <a
                            class="text-gray-500"
                            href={member.linkedin}
                            target="_blank"
                          >
                            <FiLinkedin></FiLinkedin>
                          </a>
                        </span>
                        <h6 className="text-sm text-gray-500">
                          {member.description}
                        </h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
