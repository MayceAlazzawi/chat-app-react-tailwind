import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = () => {
  const logout = async (e) => {
    console.log("working");
    await signOut(auth);
  };

  return (
    <div className=" bg-purple h-[100%] relative">
      <Navbar />
      <Search />
      <Chats />
      <button
        className="bg-darkPurple absolute bottom-0  border-purple border-t  w-full text-lightPink text-xs cursor-pointer h-[35px] p-1"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
