import React, { Fragment, useEffect, useState } from "react";
import Home from "../assets/images/home.png";
import NewJob from "../assets/images/new-job.png";
import Notification from "../assets/images/notifications.png";
import Job from "../assets/images/job.png";
import Profile from "../assets/images/user.png";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons";


const Floatnav = () => {


  return (
    <Fragment>
      <div className="flex bg-#f1f1f1 lg:px-12 z-50 px-5 py-3 rounded-[50px] fixed justify-center lg:gap-12 gap-5 items-center ">
        <Link to="/">
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Home}
              alt="Home"
            />
            <p>Home</p>
          </div>
        </Link>

        <Link to="/jobs">
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:border-b-black hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Job}
              alt="Home"
            />
            <p>Job</p>
          </div>
        </Link>

        <Link to="/new-job">
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={NewJob}
              alt="Home"
            />
            <p>Post</p>
          </div>
        </Link>

        <Link to="/profile">
          <div className="flex hover:text-blue-500 flex-col items-center text-center hover:cursor-pointer hover:scale-[1.1] active:scale-[1.1] active:font-bold hover:font-bold">
            <img
              className="lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]"
              src={Profile}
              alt="Home"
            />
            <p>Profile</p>
          </div>
        </Link>

        
      </div>
    </Fragment>
  );
};

export default Floatnav;
