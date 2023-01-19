import React from 'react'
import Add from "../images/add.png"
const Search = () => {
  return (
    <div className='search border-b border-[#dcdbf738] hidden  md:block'>
      <div className='searchForm'>
        <input className='text-white bg-transparent  w-full text-xs p-2 focus:outline-none '  placeholder='Find a user' type='text' />
      </div>
      <div className='userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded '>
        <img src={Add} alt="" className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"/>
        <div className='userInfo text-white text-sm hidden  md:block' >
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
  
}

export default Search