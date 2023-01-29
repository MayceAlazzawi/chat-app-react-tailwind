import React, { useContext } from "react";
import Add from "../images/add.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar flex items-center justify-between bg-darkPurple h-[70px] p-[10px] center text-lightPink rounded text-center">
      <span className="logo font-bold text-sm hidden md:block ">
        Kiki's chat
      </span>
      <div className="user flex items-center gap-2">
        <img
          src={currentUser.photoURL}
          alt="user"
          className="rounded-[50%] bg-white object-cover bg-lightPink w-[24px] h-[24px] "
          // onClick={(e) => [console.log(auth.currentUser)]}
        />
        <span className="text-xs hidden  md:block ">
          {currentUser.displayName}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
