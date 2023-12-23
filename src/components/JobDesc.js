import React from "react";
import { Link, useLocation } from "react-router-dom";

const JobDesc = ({ job }) => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div>
        <div className="flex flex-col justify-center text-center w-full">
          <div className="flex justify-center text-center">
            <p className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
              Job Details
            </p>
          </div>
          <div>
            <div className="flex flex-col text-start md:ml-[15vw] ml-3 mr-3 md:mr-[15vw] mt-5  gap-3">
              <div className="flex gap-3 items-center justify-center pb-5 border-b-2 border-black">
                <p className="font-bold text-2xl text-center">Profile: </p>
                <p className="underline font-light text-2xl text-center">
                  {data.jobTitle}
                </p>
              </div>
              <div>
                <p className="uppercase font-bold">{data.mode}</p>
                <p className="uppercase font-bold">{data.jobType}</p>
              </div>
              <div>
                <div className="flex gap-2 justify-end">
                  <p className="font-semibold">Created on: </p>
                  <p className="">{data.date}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-2xl underline">Description</p>
                <p className="font-sans text-start text-[1vmax]">
                  {data.description}
                </p>
              </div>
              <div className="flex justify-center">
                <Link to={data.link} target="blank">
                  <button className="border-2 border-white w-fit h-fit px-8 py-2 font-bold uppercase bg-gray-200 shadow-md ">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobDesc;
