import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Floatnav from "../Floatnav";
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <LoginCard />
      <Floatnav />
      <Footer />
    </Fragment>
  );
};

export default Login;
