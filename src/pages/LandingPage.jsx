import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import char1 from "../photos/char (1).png";
import char2 from "../photos/char (2).png";
import blackball from "../photos/ball (1).png";
import redball from "../photos/ball (2).png";
import Loading from '../components/Loading'

function LandingPage() {
  const [loading, setLoading] = useState(true) 
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 4000);

  },[])
  if(loading){
    return(
      <Loading/>
    )
  }

  return (
    <div>
        <div className='flex w-full h-[700px]  pl-[100px]  '>
            <div className='w-[45%] relative group'>

                <img src={redball} alt=""  className='absolute h-10  top-[100px] right-[180px] transition duration-700 ease-in-out  rotate-[-40deg] opacity-100   group-hover:opacity-0  ' />
                <img src={redball} alt=""  className='absolute h-8  top-[180px]  left-[150px] transition duration-700 ease-in-out  rotate-[40deg] opacity-100   group-hover:opacity-0' />
                <img src={redball} alt=""  className='absolute h-12 top-[350px]  left-[100px] transition duration-700 ease-in-out  rotate-[-70deg] opacity-100   group-hover:opacity-0' />
                <img src={redball} alt=""  className='absolute h-8 top-[400px] right-[180px] transition duration-700 ease-in-out  rotate-[60deg] opacity-100   group-hover:opacity-0' />

                <img src={blackball} alt=""  className='absolute h-10  top-[100px] right-[180px] transition duration-700 ease-in-out  rotate-[40deg] opacity-0 group-hover:opacity-100 ' />
                <img src={blackball} alt=""  className='absolute h-8  top-[180px]  left-[150px] transition duration-700 ease-in-out  rotate-[-40deg] opacity-0 group-hover:opacity-100' />
                <img src={blackball} alt=""  className='absolute h-12 top-[350px]  left-[100px]  transition duration-700 ease-in-out rotate-[70deg] opacity-0 group-hover:opacity-100' />
                <img src={blackball} alt=""  className='absolute h-8 top-[400px] right-[180px] transition duration-700 ease-in-out  rotate-[-60deg] opacity-0 group-hover:opacity-100' />
                

                <img src={char1} alt=""  className='mx-[15%] my-[10%] absolute transition duration-700 ease-in-out w-[50%] h-[80%] opacity-0 group-hover:opacity-100' />
                <img src={char2} alt=""  className='mx-[28%] my-[12%] absolute transition duration-700 ease-in-out opacity-100 group-hover:opacity-0 w-[40%] h-[80%] ' />
            </div>
            <div className='w-[55%] bg-[#bc143c] h-[700px] '>
                <div className='   h-full text-[#f8f8f8] px-[90px] py-[120px]'>
                    <h1 className='text-[45px] font-semibold my-6 font-Lato'>Welcome to the Ultimate Pokédex!</h1>
                    <p className='font-MPlus'>Uncover the secrets of over 1,000 Pokémon with insights into their types, abilities, and evolutions. Easily search by name, type, or generation to explore detailed information and unique traits. Our intuitive Pokédex, featuring regular updates, is your gateway to mastering the Pokémon world. Begin your journey now and...
                    </p>
                    <div className='flex mt-7 gap-9'>
                    <h1 className='text-[30px] font-semibold  font-Lato'>Gotta Catch 'Em All!</h1>
                    <NavLink to="/pokemons">
                      <button className=' font-Mont bg-[#f8f8f8] font-semibold  text-[#bc143c] px-4 py-2 rounded-2xl'>
                        Get Started
                      </button>
                    </NavLink>  
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LandingPage