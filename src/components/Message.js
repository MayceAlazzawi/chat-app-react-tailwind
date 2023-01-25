import React, { useState, useContext, useRef, useEffect } from "react";
import Add from "../images/add.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const [owner, setOwner] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  const ref = useRef();

  useEffect(() => {
    ownerHandler();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const ownerHandler = () => {
    if (message.senderId === currentUser.uid) {
      setOwner(true);
    } else {
      setOwner(false);
    }
  };
  return owner === true ? (
    <div className="message flex flex-row-reverse gap-2 m-2">
      <div className="meesageInf ">
        <img
          src={currentUser.photoURL}
          alt=""
          className="bg-purple w-[24px] h-[24px] object-fit rounded-full"
        />
        <span className="text-[10px] text-gray">Just now</span>
      </div>
      <div className="meesageContent flex max-w-[80%] gap-[px] flex-row ">
        {/* <img src="" alt="" className='bg-purple w-[104px]' />     //The image is not styled right check 44:58 for more info --?--*/}
        <p className="text-sm bg-[#8da4f1] rounded-l-lg rounded-br-lg p-[10px]">
          {message.text}
        </p>
      </div>
    </div>
  ) : (
    <div className="message flex gap-2 m-1">
      <div className="meesageInf ">
        <img
          src={Add}
          alt=""
          className="bg-purple w-[24px] h-[24px] object-fit rounded-full"
        />
        <span className="text-[10px] text-gray">Just now</span>
      </div>
      <div className="meesageContent flex max-w-[80%] gap-[10px]">
        <p className="text-sm bg-white rounded-r-lg rounded-bl-lg p-[10px]">
          {message.text}
        </p>
        {message.img && (
          <img src={message.img} alt="" className="bg-purple w-[50%]" />
        )}
      </div>
    </div>
  );
};

export default Message;
