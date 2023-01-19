import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from "../components/Chat"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className='h-screen bg-bg flex items-center justify-center '>
        {/* <Navbar /> */}
        <div className='flex border border-lightPink w-[65%] h-[80%] rounded overflow-hidden'>
          <div className='w-1/5  md:w-1/3 '>
            <Sidebar />
          </div>
          <div className='w-4/5 md:w-2/3 '>
            <Chat />
          </div>
        </div>
    </div>
  )
}

export default Home