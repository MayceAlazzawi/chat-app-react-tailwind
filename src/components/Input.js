import React from 'react'
// import Img from "../images/Img.png"
import Add from "../images/add.png"
// import Atttach from "../images/Attach.png"

const Input = () => {
  return (
    <div className='h-[50px] p-[11px] bg-white bg-purple absolute bottom-0 border-t w-full border-lightPink  flex justify-between'>
        <input type='text' placeholder='Type something...'  className='focus:outline-none p-2 w-2/3 sm:w-2/3 ' />
        <div className='send flex gap-2 '>
            <img src={Add} alt="" className='bg-lightPink w-[24px] h-[24px] rounded-full cursor-pointer hidden lg:block' />
            <input type="file" style={{display: "none"}} id="file" className='focus:outline-none'   />
            <label htmlFor='file'>
                <img src={Add} alt="" className='bg-lightPink cursor-pointer rounded-full w-[24px] h-[24px] hidden lg:block' />
            </label>
            <button className='bg-[#8da4f1] flex text-white text-sm items-center p-[10px]'>Send</button>
        </div>
    </div>
  )
}

export default Input