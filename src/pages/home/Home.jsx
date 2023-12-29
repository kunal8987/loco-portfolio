import React from "react";
import Profile from "../../assets/Kunal.JPG";
const Home = () => {
  return (
    <div className="w-full mb-16">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 md:py-12 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-7xl">
              I'm Full Stack Developer
            </h1>
            <p className="mt-5 text-2xl md:text-3xl lg:text-3xl text-gray-700">
              Hello ! My Name Is Kunal Deotale . I'm a Full Stack Web Developer
            </p>

            <div className="my-5">
              <button
                type="button"
                className="rounded-md bg-black px-7 py-3 md:px-12 py-6.5 lg:px-16 py-8.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Resume
              </button>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-5 xl:col-span-5">
            <img
              className="bg-gray-50 w-full object-contain object-top aspect-square rounded-md  xl:mt-8 "
              src={Profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
