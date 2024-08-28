import React from 'react'
import ball from "../photos/pngegg (6).png"

function Loading() {
  return (
    <div>
        <div className='  flex justify-center'>
            <img src={ball} alt=""
            className='p-[100px] animate-spin-slow w-[40%]' />

        </div>
    </div>
  )
}

export default Loading