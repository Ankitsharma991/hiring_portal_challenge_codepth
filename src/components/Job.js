import React, { Fragment } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

const Job = () => {
  return (
    <Fragment>
      <div className="absolute flex justify-start top-[15%] w-full">
        <div className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
          <p className="text-center justify-center">Find Your Dream Job</p>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Job;

//             <div>
//               <IoSearch />
//               <input
//                 type="text"
//                 placeholder="Search Jobs with keywords/titles/role etc"
//               />
//             </div>
//           </div>