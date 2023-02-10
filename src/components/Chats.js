import React, { useEffect, useState, useContext } from "react";
import Add from "../images/add.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = async () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // if (!doc.data()) {
        //   console.log("no data 1");
        //   setChats([{}]);
        // } else {
        setChats(doc.data());
        // console.log(chats);

        // }
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  // console.log(
  //   Object.entries(chats) === "undefined"
  //     ? console.log("yes undifined up")
  //     : console.log("hi up")
  // );
  // console.log(
  //   Object.entries(chats)[0][1]["userInfo"]["displayName"] === "undefined"
  //     ? console.log("yes undifined up")
  //     : console.log("hi up")
  // );
  // console.log(Object.entries(chats)[0][1]["userInfo"]["displayName"]);
  //
  // console.log(Object.entries(chat)); // one
  //   console.log(Object.entries(chat)[0][0]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0] === "null" ? "null" : chat[0]}
            className="userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded "
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo?.photoURL}
              alt=""
              className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"
            />
            <div className="userInfo text-white hidden  md:block">
              <span className="font-medium text-[14px]">
                {/* {chat[1].userInfo.displayName} */}
                {/* {chat[1]["userInfo"]["displayName"] === "undefined"
                  ? console.log("yes undifined")
                  : console.log("hi")} */}
                {chat[1].userInfo?.displayName}
              </span>
              <p className="text-[11px] text-lightPink">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
