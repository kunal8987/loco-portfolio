import React from "react";
import skills from "./data.json";
const Skills = () => {
  return (
    <>
      <div className="bg-stone-300">
        <div className="text-2xl text-center font-bold p-8 text-gray-900 md:text-5xl">
        <span className="border-b-4 border-black">Skills</span>
          
        </div>

        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-5 ">
          {skills.map((post) => (
            <div key={post.name} className="border-2 border-black rounded-xl">
              <img
                src={post.src}
                className="aspect-video object-contain object-top w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 flex-1 text-center text-base font-semibold text-gray-900">
                  {post.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
