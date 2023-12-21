import React, { Fragment } from "react";
import Navbar from "../Navbar";
import SignupCard from "./SignupCard";
import Footer from "../Footer";
import Floatnav from "../Floatnav";

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <SignupCard />
      <Floatnav />
      <Footer />
    </Fragment>
  );
};

export default Signup;
