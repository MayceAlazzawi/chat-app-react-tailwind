import React, { useState } from "react";
import Add from "../images/add.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div className="navbar flex items-center justify-between bg-darkPurple h-[70px] p-[10px] center text-lightPink rounded text-center">
      <span className="logo font-bold text-sm hidden md:block ">
        Kiki's chat
      </span>
      <div className="user flex items-center gap-2">
        <img
          src={Add}
          alt="user"
          className="rounded-[50%] bg-white object-cover bg-lightPink w-[24px] h-[24px] "
        />
        <span className="text-xs hidden  md:block ">{user.email}</span>
      </div>
    </div>
  );
};

export default Navbar;
