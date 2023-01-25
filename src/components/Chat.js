import React, { useContext } from "react";
import Add from "../images/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { data } from "autoprefixer";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <div className="chat relative flex h-full mb-auto flex-col">
      <div className="messages-and_chatInfo h-full">
        <div className="chatinfo text-sm font-normal  p-1 h-[50px] w-full flex justify-between items-center text-lightPink bg-purple ">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons flex h-[24px] ">
            <img src={Add} alt="" />
            <img src={Add} alt="" />
            <img src={Add} alt="" />
          </div>
        </div>
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
