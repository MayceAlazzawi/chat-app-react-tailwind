import React, { useContext, useEffect, useState } from "react";
import More from "../images/more.png";
import Cam from "../images/cam.png";
import Call from "../images/call.png";
import Messages from "./Messages";
import Input from "./Input";
import { data } from "autoprefixer";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const [chatContent, setChatContent] = useState(true);

  useEffect(() => {
    data.user ? setChatContent(true) : setChatContent(false);
  });
  return (
    <div className="chat relative flex h-full mb-auto flex-col">
      <div className="messages-and_chatInfo h-full">
        <div className="chatinfo text-sm font-normal  p-1 h-[50px] w-full flex justify-between items-center text-lightPink bg-purple ">
          <span>{chatContent && data.user.displayName}</span>
          <div className="chatIcons flex h-[24px] ">
            <img src={Call} className="w-[25px] h-[20px]" alt="" />
            <img src={Cam} alt="" />
            <img src={More} alt="" />
          </div>
        </div>
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
