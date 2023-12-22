import React, { Fragment } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import Drawer from "./Drawer";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

const Job = () => {
  return (
    <Fragment>
      <div className="absolute flex justify-start top-[15%]  w-full">
        <div></div>
        <div>
          <div className="flex justify-center items-start">
            <Drawer />
            <PiArrowFatLinesRightFill className="justify-center items-center self-center min-h[20px]" />
          </div>
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
