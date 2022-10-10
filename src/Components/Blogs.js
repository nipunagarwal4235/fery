import React from "react";
import { GiAchievement, GiMedallist } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";

const Blogs = () => {
  const categories = [
    {
      name: "Women Safety",
      logo: (
        <TbHeartHandshake className="h-8 w-8 sm:h-10 sm:w-10"></TbHeartHandshake>
      ),
      description: "Coming Soon",
    },
    {
      name: "Our Achievements",
      logo: <GiAchievement className="h-8 w-8 sm:h-10 sm:w-10"></GiAchievement>,
      description: "Coming Soon",
    },
    {
      name: "Success Stories",
      logo: <GiMedallist className="h-8 w-8 sm:h-10 sm:w-10"></GiMedallist>,
      description: "Coming Soon",
    },
  ];

  return (
    <>
      <div id="blogs" className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold leading-none tracking-tight text-dark-maroon sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Our</span> Blogs
            </span>
          </h2>
        </div>
      </div>
      <div class="flex flex-wrap -m-4 px-4 pb-24">
        {categories.map((category) => {
          return (
            <>
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div
                  class="relative block rounded-xl border-2 border-light-pink p-8 shadow-xl"
                  href=""
                >
                  {/* <span class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              4.3
            </span> */}

                  <div class="mt-4 text-gray-500 sm:pr-8">
                    {category.logo}

                    <h5 class="mt-4 text-xl font-bold text-gray-900">
                      {category.name}
                    </h5>

                    <p class="mt-2 text-sm sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
