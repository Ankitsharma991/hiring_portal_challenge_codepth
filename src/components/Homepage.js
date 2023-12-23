import React from "react";

const Homepage = () => {
  return (
    <div className=" flex justify-center w-full">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
            Welcome to Talent Zone
          </h1>
          <p className="text-center font-thin text-black">
            {" "}
            Where connections happen effortlessly...
          </p>
        </div>
        <div>
          <p className="text-center lg:ml-[20vw] ml-[5vw] mr-[5vw] lg:mr-[20vw] font-medium text-[2vmax]">
            Your one-stop solution for job seekers and employers. Discover
            tailored job listings, streamline hiring with easy postings, and
            receive real-time updates. Join us for a seamless journey in finding
            your dream job or the perfect candidate.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
