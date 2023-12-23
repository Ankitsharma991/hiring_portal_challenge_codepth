import React, { Fragment, useState } from "react";

const NewJob = () => {
  return (
    <Fragment>
      <div className=" flex justify-center fixed w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
            Create a Job 
          </h1>
          <div>
            <form className="flex flex-col justify-between items-center mt-5">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-2">
                <div
                  id="job-title"
                  className="flex w-full border-2 border-black rounded-[15px] bg-white px-2 py-2 gap-3 h-fit  items-center"
                >
                  <label htmlFor="job_title">Job Title:</label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="outline-none text-start border-l-2 border-black pl-5"
                  />
                </div>

                <div
                  id="skills"
                  className="flex w-full border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="skills">Requirements:</label>
                  <input
                    type="text"
                    className="outline-none text-start border-l-2 border-black pl-5 w-3/4"
                    placeholder="Requirements"
                  />
                </div>
                <div
                  id="description"
                  className="flex w-full md:col-span-2 col-span-1 border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="Description">Description:</label>
                  <textarea
                    placeholder="Description of the job"
                    className="outline-none text-start border-l-2 border-black pl-5 w-full"
                  ></textarea>
                </div>
                <div
                  id="link"
                  className="flex w-full md:col-span-2 col-span-1 border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="link">Job-link:</label>
                  <input
                    type="text"
                    placeholder="URL"
                    className="outline-none text-start border-l-2 border-black pl-5"
                  />
                </div>
              </div>
              <div className="flex">
                <button className="border-2 border-white w-fit h-fit px-8 py-2 font-bold uppercase md:mt-10 mt-4 bg-gray-200 shadow-md ">
                  Create Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewJob;
