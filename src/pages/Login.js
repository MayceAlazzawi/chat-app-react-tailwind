import React from "react";
import AddAvatar from "../images/addAvatar.png";
import { auth } from "../firebase";

const Login = () => {
  const loginHandler = () => {};

  return (
    <div className="bg-bg h-screen flex items-center justify-center">
      <div className="bg-white grid h-1/2 flex align-center w-1/2 justify-center content-center rounded p-6">
        <div className="grid gap-8 text-center">
          <div className="title pt-4">
            <h1>Kiki's Chat</h1>
            <p className="text-sm text-gray">Login</p>
          </div>
          <div className="form">
            <form className="input-boxes_container flex flex-col ">
              <input
                className="email text-xs bg-transparent w-[350px] cursor-pointer p-4 border-silver border-b focus:outline-none"
                type="email"
                placeholder="email"
              />
              <input
                className="password text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none"
                type="password"
                placeholder="password"
              />
              <input
                className="file text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver w-[250px] focus:outline-non"
                id="file"
                type="file"
                style={{ display: "none" }}
              />

              <button
                className="Sign-in_btn bg-btn mb-3 ml-3 mr-3 p-2 font-bold text-xs text-white rounded"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <p className="text-xs text-gray">
              You don't have an account?{" "}
              <a
                href="#"
                className="text-metal text-xs border-b hover:text-purple"
              >
                Register
              </a>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
