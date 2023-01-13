import React from 'react'
import AddAvatar from "../images/addAvatar.png"
const Register = () => {
  return (
    <div className='container h-screen bg-bg text-center flex items-center justify-center self-center'>
      <div className="chat-container flex flex-col pl-10 pr-10 pt-5 pb-5 m-10  rounded bg-white ">
        <div className="title mr-6 ml-6 mb-5  ">
          <h2 className='text-xl font-bold m-1'>Kiki's Chat</h2>
          <p className='text-xs text-gray'>Register</p>
        </div>
        <form className='input-boxes_container flex flex-col '>
          <input className='name text-xs bg-transparent w-[280px] p-4 border-silver border-b focus:outline-none' type="text" placeholder='Name' />
          <input className='email text-xs bg-transparent w-[280px] p-4 border-silver border-b focus:outline-none' type="email" placeholder='email' />
          <input className='password text-xs bg-transparent w-[280px] p-4 border-silver border-b focus:outline-non' type="password" placeholder='password' />
          <input className='file text-xs bg-transparent w-[280px] p-4 border-silver w-[250px] focus:outline-non' id="file" type="file" style={{ display: "none" }} />
          <label className="flex flex-row items-center m-2 gap-2 " htmlFor="file" id="file">
            <img src={AddAvatar} alt="avatar" />
            <span className='text-xs text-gray hover:text-purple hover:b-border' >Add an avatar</span>
          </label>
        </form>
        <button className='Sign-in_btn bg-btn mb-3 ml-3 mr-3 p-2 font-bold text-xs text-white'>Sign up</button>
        <p className='text-xs text-gray'>You do have an account? <a href="#" className='text-metal text-xs border-b hover:text-purple'>Login</a></p>
      </div>
    </div>
  )
}

export default Register