import React, { Fragment, useState } from "react";
import { postNewJob } from "./api/authApi";
import { useNavigate } from "react-router-dom";

const NewJob = () => {
  const [inputs, setInputs] = useState({
    jobTitle: "",
    skills: "",
    description: "",
    link: "",
    jobType: "",
    mode: "",
  });

  // const alert = useAlert();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createJob = (e) => {
    e.preventDefault();
    try {
      postNewJob(inputs);
      // alert.success("Job Created Successfully!!");
      navigate("/jobs");
    } catch (error) {
      // alert.error(error.message);
    }
    console.log(inputs);
  };

  return (
    <Fragment>
      <div className=" flex justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
            Create a Job
          </h1>
          <div>
            <form
              onSubmit={createJob}
              className="flex flex-col justify-between items-center mt-5"
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-2">
                <div
                  id="job-title"
                  className="flex w-full border-2 border-black rounded-[15px] bg-white px-2 py-2 gap-3 h-fit  items-center"
                >
                  <label htmlFor="job_title">Job Title:</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="jobTitle"
                    placeholder="Frontend Developer"
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
                    name="skills"
                    onChange={handleChange}
                    className="outline-none text-start border-l-2 border-black pl-5 w-3/4"
                    placeholder="ReactJs, JavaScript, HTML, CSS"
                  />
                </div>
                <div
                  id="description"
                  className="flex w-full md:col-span-2 col-span-1 border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="Description">Description:</label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    placeholder="XYZ Tech Solutions is a leading technology company specializing in innovative..."
                    className="outline-none text-start border-l-2 border-black pl-5 w-full"
                  ></textarea>
                </div>
                <div
                  id="link"
                  className="flex w-full md:col-span-2 col-span-1 border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="link">Job-link:</label>
                  <input
                    name="link"
                    type="text"
                    onChange={handleChange}
                    placeholder="https://www.example.com/"
                    className="outline-none text-start border-l-2 w-full border-black pl-5"
                  />
                </div>

                <div
                  id="job-title"
                  className="flex w-full border-2 border-black rounded-[15px] bg-white px-2 py-2 gap-3 h-fit  items-center"
                >
                  <label htmlFor="job_title">Job-type:</label>
                  <input
                    name="jobType"
                    type="text"
                    onChange={handleChange}
                    placeholder="Internship/Full-time/Part-time"
                    className="outline-none text-start border-l-2 border-black pl-5"
                  />
                </div>

                <div
                  id="skills"
                  className="flex w-full border-2 border-black rounded-[15px] bg-white px-2 py-2  h-fit gap-3  items-center"
                >
                  <label htmlFor="skills">Mode:</label>
                  <input
                    type="text"
                    name="mode"
                    onChange={handleChange}
                    className="outline-none text-start border-l-2 border-black pl-5 w-3/4"
                    placeholder="Remote/In-Office/Hybrid"
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
