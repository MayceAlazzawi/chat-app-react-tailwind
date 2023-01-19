import React from 'react'
import AddAvatar from "../images/addAvatar.png"
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from '@firebase/util';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("name").value;
    const file = document.getElementById("file").value;
    console.log( email, password)
   
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);


      // Adding an image when register --?--
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (error) => {
          setErr(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // Add a new document in collection "cities"
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          });
        }
      );

      
    
    } catch {
      setErr(true)
    }
    }

  return (
  <div className='bg-bg h-screen flex items-center justify-center'>
    <div className='bg-white grid h-1/2 flex align-center w-1/2 justify-center content-center rounded p-6'>
      <div className= 'grid gap-8 text-center'>
        <div className='title pt-4'>
          <h1>Kiki's Chat</h1>
          <p className='text-sm text-gray'>Register</p>
      </div>
      <div className='form'>
        <form className='input-boxes_container flex flex-col'>
           <input className='name text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none' type="text" placeholder='Name' id="name" />
           <input className='email text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none' type="email" placeholder='email' id="email"/>
           <input className='password text-xs  cursor-pointer bg-transparent w-[350px] p-4 border-silver border-b focus:outline-none' type="password" placeholder='password' id="password" />
           <input className='file text-xs cursor-pointer bg-transparent w-[350px] p-4 border-silver w-[250px] focus:outline-non' id="file" type="file" style={{ display: "none" }} />
           <label className="flex flex-row items-center m-2 gap-2 " htmlFor="file" id="file">
             <img src={AddAvatar} alt="avatar" style={{"width": '40px'}}/>
             <span className='text-xs text-gray hover:text-purple hover:b-border cursor-pointer' >Add an avatar</span>
           </label>
         <button className='Sign-in_btn bg-btn mb-3 ml-3 mr-3 p-2 font-bold text-xs text-white rounded' type='submit' onClick={handleSubmit}>Sign up</button>
       </form>
       <p className='text-xs text-gray'>You do have an account? <a href="#" className='text-metal text-xs border-b hover:text-purple'>Login</a></p>
       {err ? <span className='text-red text-m'>Something went wrong!</span> : null}
      </div>
      <div>
      </div>
      </div>
    </div> 
  </div>
  ) 
}

export default Register