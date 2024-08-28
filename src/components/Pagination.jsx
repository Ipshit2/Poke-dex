import React from 'react'

function Pagination({page ,gotoNextPage , gotoPrevPage}) {
  return (
    <div className='flex justify-center gap-[70px] py-[50px]'>
        <button onClick={gotoPrevPage}
        className='font-Mont bg-[#f8f8f8] font-semibold  text-[#bc143c] px-4 py-2 rounded-sm border-[#bc143c] border-[3px] w-[130px]'>Previous</button>
        <h1 className='font-Mont bg-[#f8f8f8] font-semibold  text-[#bc143c] px-4 py-2 w-[60px] text-center text-[25px]'>{page}</h1>
        <button onClick={gotoNextPage}
        className='font-Mont bg-[#f8f8f8] font-semibold  text-[#bc143c] px-4 py-2 rounded-sm border-[#bc143c] border-[3px] w-[130px]'>Next</button>
    </div>
  )
}

export default Pagination