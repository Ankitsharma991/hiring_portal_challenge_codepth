import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Floatnav from "./components/Floatnav";
import Homepage from "./components/Homepage";
import LoginCard from "./components/auth/LoginCard";
import SignupCard from "./components/auth/SignupCard";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
        </Routes>
        <Floatnav />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
