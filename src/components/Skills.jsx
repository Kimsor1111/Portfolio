import React from "react";
import img from "./../assets/scss.jpg";
const Skills = () => {
  return (
    <>
      <p className="text-center text-white mt-8 lg:text-2xl text-lg font-medium">
        Languages & Databases
      </p>
      <div className="w-full flex flex-wrap gap-y-10 justify-center py-5 ">
        <div>
          <img src={img} alt="" className="size-[90px] object-contain" />
          <p className="text-white font-medium text-center mt-2">Java</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
