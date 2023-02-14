import React, { useState, useEffect } from "react";
import AddAvatar from "../images/addAvatar.png";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value); // sigin in
      navigate("/");
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="bg-bg h-screen flex items-center justify-center">
      <div className="bg-white grid text-center h-1/2 flex align-center w-4/5 md:w-[50%] lg:w-[30%] justify-center content-center rounded p-3 ">
        <div className="grid gap-8">
          <div className="title pt-4 w-full md:w-[300px]">
            <h1>Kiki's Chat</h1>
            <p className="text-sm text-gray">Login</p>
          </div>
          <div className="form">
            <form className="input-boxes_container w-full flex flex-col">
              <input
                className="email text-xs bg-transparent cursor-pointer w-full p-4 border-silver border-b focus:outline-none"
                type="email"
                placeholder="email"
                id="email"
              />
              <input
                className="password text-xs cursor-pointer bg-transparent  w-full p-4 border-silver border-b focus:outline-none"
                type="password"
                placeholder="password"
                id="password"
              />
              <input
                className="file text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver w-[250px] focus:outline-non"
                id="file"
                type="file"
                style={{ display: "none" }}
              />

              <button
                className="Sign-in_btn bg-btn mb-3 ml-3 mr-3 mt-3 p-2 font-bold text-xs text-white rounded"
                type="submit"
                onClick={loginHandler}
              >
                Sign in
              </button>
            </form>
            <p className="text-xs text-gray">
              You don't have an account?
              <Link
                href="#"
                className="text-metal text-xs border-b hover:text-purple"
                to="/Regester"
              >
                Register
              </Link>
            </p>
            {err ? (
              <span className="text-red text-m">Something went wrong!</span>
            ) : null}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
