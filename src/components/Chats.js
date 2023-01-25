import React, { useEffect, useState, useContext } from "react";
import Add from "../images/add.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const [chat, setChat] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChat(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chat)); // one
  //   console.log(Object.entries(chat)[0][0]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div>
      {Object.entries(chat)?.map((chat) => (
        <div
          key={chat[0]}
          className="userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded "
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
            className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"
          />
          <div className="userInfo text-white hidden  md:block">
            <span className="font-medium text-[14px]">
              {chat[1].userInfo.displayName}
            </span>
            <p className="text-[11px] text-lightPink">
              {/* {chat[1].userInfo.lastMessage?.text} */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
