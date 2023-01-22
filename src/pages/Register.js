import React, { useState, useEffect } from "react";
// import Add from "../img/add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { uploadBytes, listAll } from "firebase/storage";
import { addDoc, doc, collection } from "firebase/firestore";
import { v4 } from "uuid";

const Register = () => {
  const [err, setErr] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState("");

  const imageListRef = ref(storage, "images/");
  const navigate = useNavigate();

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImage(url);
        });
      });
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const file = document.getElementById("file");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password); // Regestering for auth only
      //Uploading image starts here
      // const imageRef = ref(storage, `images/${displayName + v4()}`);
      // if (imageUpload == null) return;
      // await uploadBytes(imageRef, imageUpload).then(async () => {
      //   alert("image uploaded");
      // });

      const storageRef = ref(storage, `${displayName + res.user.uid}`);
      await uploadBytesResumable(storageRef, file.value).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-bg h-screen flex items-center justify-center">
      <div className="bg-white grid h-1/2 flex align-center w-1/2 justify-center content-center rounded p-6">
        <div className="grid gap-8 text-center">
          <div className="title pt-4">
            <h1>Kiki's Chat</h1>
            <p className="text-sm text-gray">Register</p>
          </div>
          <div className="form">
            <form
              className="input-boxes_container flex flex-col"
              onSubmit={handleSubmit}
            >
              <input
                className="name text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none"
                type="text"
                placeholder="Name"
                id="name"
              />
              <input
                className="email text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none"
                type="email"
                placeholder="email"
                id="email"
              />
              <input
                className="password text-xs  cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none"
                type="password"
                placeholder="password"
                id="password"
              />
              <input
                className="file text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver w-[250px] focus:outline-non"
                id="file"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
              <label
                className="flex flex-row items-center m-2 gap-2 "
                htmlFor="file"
                id="file"
              >
                {image === "" || imageUpload === null ? (
                  <img src="" alt="" style={{ width: "40px" }} />
                ) : (
                  <img src={image} alt="image" style={{ width: "40px" }} />
                )}
                <span className="text-xs text-gray hover:text-purple hover:b-border cursor-pointer">
                  Add an avatar
                </span>
              </label>
              <button
                className="Sign-in_btn bg-btn mb-3 ml-3 mr-3 p-2 font-bold text-xs text-white rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </form>
            <p className="text-xs text-gray">
              You do have an account?
              <Link
                href="#"
                className="text-metal text-xs border-b hover:text-purple"
                to="/login"
              >
                Login
              </Link>
            </p>
            {err ? (
              <span className="text-red text-m">Something went wrong!</span>
            ) : null}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
