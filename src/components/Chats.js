import React from 'react'
import Add from '../images/add.png'

const Chats = () => {
  return (
    <div>  
        <div className='userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded '>
             <img src={Add} alt="" className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"/>
             <div className='userInfo text-white hidden  md:block' >
                 <span className='font-medium text-[14px]'>Meemo</span>
                 <p className='text-[11px] text-lightPink'>Ok 7ob</p>
             </div>
        </div>
        <div className='userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded'>
             <img src={Add} alt="" className="w-[35px] h-[35px] rounded-full bg-lightPink object-cover"/>
             <div className='userInfo text-white hidden  md:block' >
                 <span className='font-medium text-[14px]'>Shahad</span>
                 <p className='text-[11px] text-lightPink'>See you!</p>
             </div>
        </div>
        <div className='userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded'>
             <img src={Add} alt="" className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"/>
             <div className='userInfo text-white hidden  md:block' >
                 <span className='font-medium text-[14px]'>Mina</span>
                 <p className='text-[11px] text-lightPink'>Yeah sure</p>
             </div>
        </div>
        <div className='userChat p-2 cursor-pointer flex gap-2 items-center hover:bg-darkPurple rounded'>
             <img src={Add} alt="" className="w-[35px] h-[35px] rounded-full  bg-lightPink object-cover"/>
             <div className='userInfo text-white hidden  md:block' >
                 <span className='font-medium text-[14px]'>Tofi</span>
                 <p className='text-[11px] text-lightPink'>I will let you know</p>
             </div>
        </div>
    </div>
  )
}

export default Chats