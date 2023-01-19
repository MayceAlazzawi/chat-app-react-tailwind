import React, { useState } from 'react'
import Add from "../images/add.png"

const Message = () => {
const [ owner ,setOwner ] = useState(true);

  return (
    owner === true ? 
    <div className='message flex flex-row-reverse gap-2 m-1'>
      <div className="meesageInf " >
      <img src={Add} alt="" className='bg-purple w-[24px] h-[24px] object-fit rounded-full' />
      <span  className='text-[10px] text-gray'>Just now</span>
      </div>
      <div className="meesageContent flex max-w-[80%] gap-[px] flex-row " >
        {/* <img src="" alt="" className='bg-purple w-[104px]' />     //The image is not styled right check 44:58 for more info --?--*/}
        <p className='text-sm bg-[#8da4f1] rounded-l-lg rounded-br-lg p-[10px]'>Hello kasjndaksjd</p>
      </div>
    </div>
    : 
    <div className='message flex gap-2 m-1'>
      <div className="meesageInf " >
      <img src={Add} alt="" className='bg-purple w-[24px] h-[24px] object-fit rounded-full' />
      <span  className='text-[10px] text-gray'>Just now</span>
      </div>
      <div className="meesageContent flex max-w-[80%] gap-[10px]" >
        {/* <img src="" alt="" className='bg-purple w-[50%]' /> */}
        <p className='text-sm bg-white rounded-r-lg rounded-bl-lg p-[10px]'>Hello kasjndaksjd</p>
      </div>
    </div> 
  )
}

export default Message