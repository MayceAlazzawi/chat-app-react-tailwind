import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='messages bg-lightPink h-full flex flex-col gap-[15px] overflow-scroll'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages