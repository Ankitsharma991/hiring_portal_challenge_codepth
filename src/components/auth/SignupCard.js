import React, { Fragment, useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { FaUser, FaUserLock } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseConfig";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const SignupCard = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // const alert = useAlert();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(inputs);
    if (inputs.password !== inputs.confirmPassword) {
      alert.error("Confirm password doesn't match!");
      return;
    }
    if (error) {
      alert.error(error.message);
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      // alert.success("User Registered Successfully!!");
      navigate("/login");
    } catch (error) {
      // alert.error(error.message);
    }
  };
  return (
    <Fragment>
      <div className="absolute flex justify-center top-[15%] w-full">
        <form
          onSubmit={formSubmitHandler}
          className=" bg-#f1f1f1  flex flex-col items-center px-[3vw] py-[2vh] justify-center h-fit rounded-tr-[50px] rounded-bl-[50px]"
        >
          <div className="w-full justify-center text-center border-b-2 pb-3 border-black">
            <p className="text-center font-bold lg:text-[1.2vmax] text-[2vmax]">
              Register Here
            </p>
          </div>

          <div className="flex flex-col lg:mt-10 mt-2 lg:gap-5 gap-2 w-full justify-start items-start">
            <div className="flex w-full  bg-white px-2 py-2 h-fit gap-3  border-5 border-red items-center">
              <FaUser className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                type="text"
                required
                onChange={handleChange}
                name="username"
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="flex w-full  bg-white px-2 py-2 h-fit gap-3 border-5 border-red items-center">
              <MdEmail className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="flex  bg-white px-2 py-2  h-fit gap-3  border-5 border-red items-center">
              <FaUserLock className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                required
                name="password"
                onChange={handleChange}
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Enter the Password"
                type={show ? "text" : "password"}
              />
              {show ? (
                <BiSolidHide
                  className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]"
                  onClick={() => setShow(false)}
                />
              ) : (
                <BiShow
                  className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]"
                  onClick={() => setShow(true)}
                />
              )}
            </div>

            <div className="flex w-full  bg-white px-2 py-2 h-fit gap-3 border-5 border-red items-center">
              <GiConfirmed className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Confirm the Password"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center mt-5 items-center">
            <button
              type="submit"
              className="border-2 border-white w-fit h-fit px-8 py-2 font-bold uppercase bg-gray-200 shadow-md "
            >
              Signup
            </button>
            <p className="mt-3">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-700 underline">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignupCard;
