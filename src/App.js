import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Floatnav from "./components/Floatnav";
import Homepage from "./components/Homepage";
import LoginCard from "./components/auth/LoginCard";
import SignupCard from "./components/auth/SignupCard";
import Job from "./components/Job";
import NewJob from "./components/NewJob";
import { app } from "./FirebaseConfig";
import JobDesc from "./components/JobDesc";

function App() {
  return (
    <Router>
      <div className="flex flex-col relative">
        <div className="top-0 w-full fixed">
          <Navbar />
        </div>
        <div className="w-full mt-[15vh]">
          <div className="min-h-[85vh]">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginCard />} />
              <Route path="/signup" element={<SignupCard />} />
              <Route path="/jobs" element={<Job />} />
              <Route path="/new-job" element={<NewJob />} />
              <Route path="/job-details/:id" element={<JobDesc />} />
            </Routes>
            <div className="fixed bottom-[20vh] w-full flex justify-center ">
              <Floatnav className="justify-center" />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
