import React from "react";

const Github = () => {
  return (
    <div>
      <div className="text-2xl text-center font-bold m-10 text-gray-900 md:text-5xl">
        GitHub
      </div>

      <div className="text-2xl text-center font-bold  text-gray-900 md:text-3xl">
        Github Calendar
        <div className="flex flex-wrap pt-10 justify-center align-middle">
          <img
            src="https://ghchart.rshah.org/kunal8987"
            className=" aspect-auto object-contain object-top w-[90%]  rounded-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
