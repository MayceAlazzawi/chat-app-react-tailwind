import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const usersRef = collection(db, "users");
  const handleSearch = async () => {
    const q = query(usersRef, where("displayName", "==", userName));

    try {
      console.log(q);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search border-b border-[#dcdbf738] hidden  md:block">
      <div className="searchForm">
        <input
          className="text-white bg-transparent  w-full text-xs p-2 focus:outline-none "
          placeholder="Find a user"
          type="text"
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded ">
          <img
            src={user.photoURL}
            alt=""
            className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"
          />
          <div className="userInfo text-white text-sm hidden  md:block">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
