import React, { Fragment } from "react";
import Home from "../assets/images/home.png";
import NewJob from "../assets/images/new-job.png";
import Notification from "../assets/images/notifications.png";
import Job from "../assets/images/job.png";
import Profile from "../assets/images/user.png";

const Floatnav = () => {
  return (
    <Fragment>
      <div className="lg:bottom-[25vh] md:bottom-[25vh] bottom-[30.5vh] flex justify-center absolute w-full">
        <div className="flex bg-#f1f1f1 lg:px-12 px-5 py-3 rounded-[50px] fixed justify-center lg:gap-12 gap-5 items-center ">
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Home}
              alt="Home"
            />
            <p>Home</p>
          </div>
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:border-b-black hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Job}
              alt="Home"
            />
            <p>Job</p>
          </div>
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={NewJob}
              alt="Home"
            />
            <p>Post</p>
          </div>
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Profile}
              alt="Home"
            />
            <p>Profile</p>
          </div>
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Notification}
              alt="Home"
            />
            <p>Notification</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Floatnav;
