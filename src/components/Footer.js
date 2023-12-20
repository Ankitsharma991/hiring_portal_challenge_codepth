import React, { Fragment } from "react";
import Twitter from "../assets/images/twitter-sign.png";
import LinkedIn from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="block bottom-0 absolute w-full">
      <div className="flex justify-between py-5 px-20 bg-#f1f1f1">
        <div className="flex flex-col gap-2">
          <p className="text-[1vmax] text-center">We are available on</p>
          <div className="flex justify-evenly items-center">
            <a href="#">
              <img
                className="h-7 w-7 hover:cursor-pointer"
                src={Twitter}
                alt="twitter"
              />
            </a>
            <a href="#">
              <img
                className="h-7 w-7 hover:cursor-pointer"
                src={Instagram}
                alt="twitter"
              />
            </a>
            <a href="#">
              <img
                className="h-7 w-7 hover:cursor-pointer"
                src={LinkedIn}
                alt="twitter"
              />
            </a>
          </div>
        </div>
        <div className="flex text-center items-center">
          <p>© Copyright 2023 Talent-Zone</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
