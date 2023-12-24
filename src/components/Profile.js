import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onLogout } from "./api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const onLogout = () => {
    try {
      signOut(auth);
      toast.success("Logged out successfully!!");
      navigate("/");
    } catch (err) {
      return toast.error(err.message);
    }
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
        console.log("user-profile", user);
      const uid = user.uid;
    } else {
    }
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //   console.log("profile", user.uid);
      if (!user?.accessToken) {
        toast.error("Login in to access job list!!");
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
      setUser(user);
    };
  }, [navigate, user, auth]);

  return (
    <>
      <div className="flex flex-col justify-center w-full text-center flex-wrap">
        <p className="font-bold text-3xl">User's Profile</p>
        <div className="flex justify-evenly flex-wrap">
          <div className="flex flex-col ">
            <p className="text-center text-2xl font-light p-3 border-b-2  border-black">
              User's Details
            </p>
            <div className="flex flex-col justify-start text-start md:gap-[2vh] md:ml-[-10vw] mt-5">
              <p className="font-bold text-2xl">
                User id: <span className="font-thin ml-2">{user?.uid}</span>{" "}
              </p>
              <p className="font-bold text-2xl">
                Name: <span>{user?.displayName}</span>
              </p>
              <p className="font-bold text-2xl">
                Email: <span className="font-thin ml-2">{user?.email}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-2xl font-light p-3 border-b-2  border-black">
              Notifications
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => onLogout()}
            className="border-2 border-white w-fit h-fit px-8 py-2 font-bold uppercase bg-gray-200 shadow-md "
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
