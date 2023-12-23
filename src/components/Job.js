import React, { Fragment, useEffect, useState } from "react";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import Drawer from "./Drawer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Job = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user?.accessToken) {
        alert.error("Login in to access job list!!");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <Fragment>
      <div className=" flex flex-col justify-center text-center w-full">
        <div className="flex justify-center text-center">
          <p className="font-bold lg:text-[2vmax] text-[3vmax] text-center">
            Search Your Dream Job
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-center w-full h-full items-start">
            <Drawer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Job;
