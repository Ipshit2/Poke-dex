import React from 'react'
import name from "../photos/Pok-Dex-8-25-2024.png";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div>
        <NavLink to="/">
        <header className='w-full h-[77px] bg-[#f8f8f8] '>
            <img src={name} className='w-[230px] h-[77px] py-[10px] pl-[20px] cursor-pointer ' alt="" />
        </header>
        </NavLink>
    </div>
  )
}

export default Header