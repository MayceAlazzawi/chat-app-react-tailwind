import React from "react";
// import Img from "../images/Img.png"
import Add from "../images/add.png";
// import Atttach from "../images/Attach.png"
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ref } from "firebase/storage";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { setUserProperties } from "firebase/analytics";
import { onSnapshot } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
const Input = () => {
  const [text, setText] = useState("k");
  const [img, setImg] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext); //data contains the other user
  // const text = document.getElementById("text").value;

  const handleSubmit = async () => {
    // if (img) {
    // console.log("w");
    // const storageRef = ref(storage, uuidv4());

    // const uploadTask = uploadBytesResumable(storageRef, img);

    // uploadTask.on(
    //   (error) => {
    //     //TODO:Handle Error // and img
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //       await updateDoc(doc(db, "chats", data.chatId), {
    //         message: arrayUnion({
    //           id: uuidv4(),
    //           text,
    //           senderId: currentUser.uid,
    //           date: Timestamp.now(),
    //           imgi: downloadURL,
    //         }),
    //       });
    //     });
    //   }
    // );
    // } else {
    await updateDoc(doc(db, "chats", data.chatId), {
      message: arrayUnion({
        id: uuidv4(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    // }
    //update last message in each chat
    // await updateDoc(doc(db, "userchats", currentUser.uid), {
    //   [data.chatId + ".lastMessage"]: { text },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });
    // await updateDoc(doc(db, "userchats", data.chatId), {
    //   [data.chatId + ".lastMessage"]: { text },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });
  };
  return (
    <div className="h-[50px] p-[11px] bg-white bg-purple absolute bottom-0 border-t w-full border-lightPink  flex justify-between">
      <input
        id="text"
        type="text"
        placeholder="Type something..."
        className="focus:outline-none p-2 w-2/3 sm:w-2/3"
        onChange={(e) => {
          setText(e.target.value);
        }}
        // value={text}
      />
      <div className="send flex gap-2 ">
        <img
          src={Add}
          alt=""
          className="bg-lightPink w-[24px] h-[24px] rounded-full cursor-pointer hidden lg:block"
        />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          className="focus:outline-none"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img
            src={Add}
            alt=""
            className="bg-lightPink cursor-pointer rounded-full w-[24px] h-[24px] hidden lg:block"
          />
        </label>
        <button
          className="bg-[#8da4f1] flex text-white text-sm items-center p-[10px]"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
