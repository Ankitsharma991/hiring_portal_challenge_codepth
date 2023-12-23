import React, { Fragment, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseConfig";

const LoginCard = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const alert = useAlert();
  let navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandle = async (e) => {
    e.preventDefault();

    try {
      const regUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!regUser) return alert.error(error.message);
      alert.success("user logged in successfully!!");
      navigate("/job");
    } catch (err) {
      alert.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="absolute flex justify-center top-[15%] w-full">
        <form
          onSubmit={loginHandle}
          className=" bg-#f1f1f1  flex flex-col items-center px-[3vw] py-[2vh] justify-center h-fit rounded-tr-[50px] rounded-bl-[50px]"
        >
          <div className="w-full justify-center text-center border-b-2 pb-3 border-black">
            <p className="text-center font-bold lg:text-[1.2vmax] text-[2vmax]">
              Login Here
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-5 w-full justify-start items-start">
            <div className="flex w-full  bg-white px-2 py-2 h-fit gap-3 border-5 border-red items-center">
              <MdEmail className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                type="text"
                required
                name="email"
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>

            <div className="flex  bg-white px-2 py-2  h-fit gap-3  border-5 border-red items-center">
              <FaUserLock className="lg:h-[30px] lg:w-[30px] w-[20px] h[20px]" />
              <input
                required
                className="outline-none text-start border-l-2 border-black pl-5"
                placeholder="Enter the Password"
                name="password"
                type={show ? "text" : "password"}
                onChange={handleChange}
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
          </div>
          <div className="flex flex-col justify-center mt-5 items-center">
            <button
              type="submit"
              className="border-2 border-white w-fit h-fit px-8 py-2 font-bold uppercase bg-gray-200 shadow-md "
            >
              Login
            </button>
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-700 underline">Signup</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginCard;
