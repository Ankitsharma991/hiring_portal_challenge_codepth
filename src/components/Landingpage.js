import Navbar from "./Navbar";
import Footer from "./Footer";
import Floatnav from "./Floatnav";
import Homepage from "./Homepage";
import { Fragment } from "react";

function Landingpage() {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
      <Floatnav />
      <Footer />
    </Fragment>
  );
}

export default Landingpage;
