import React  from 'react'

function PokemonCard({ pokemon }) {
 
  return (
    <div className='group'>
        <div className='absolute border-2 border-[#bc143c] w-[330px] h-[350px] rounded-xl ml-1 shadow-xl font-Mont cursor-pointer group-hover:opacity-0 transition duration-700 ease-in-out'>
            <div className='absolute rounded-full h-[40px] w-[40px] m-[8px] border-[#bc143c] border-2 text-center text-[24px] font-semibold text-[#bc143c]'>{pokemon.id}</div>
            <div className=' w-full h-[200px] rounded-md flex justify-center mt-[20px] ' >
                <img src={pokemon.sprites.front_default} alt=""
                className='drop-shadow-2xl h-full' />
            </div>
            <h1 className=' p-[5px] text-[30px] text-center '>{pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h1>
            <div className='flex justify-center gap-[50px] py-[15px]'>
            <h1>{pokemon.types[0].type.name}</h1>
            {pokemon.types[1] ? <h1>{pokemon.types[1].type.name}</h1> : ""}
            </div>
        </div>
        <div className='border-2 opacity-0 border-[#bc143c] w-[330px] h-[350px] rounded-xl ml-1 shadow-xl font-Mont cursor-pointer group-hover:opacity-100 transition duration-700 ease-in-out'>
            <div className=' w-full h-[200px] rounded-md flex justify-center mt-[20px] ' >
                <img src={pokemon.sprites.back_default} alt=""
                className='drop-shadow-2xl h-full' />
            </div>
            <div className='flex justify-center gap-[50px] py-[15px]'>
              <h1>Weight: {pokemon.weight}</h1>
              <h1>Height: {pokemon.height}</h1>
            </div>

              {/* <div className='flex justify-center align-middle gap-[50px] py-[15px]'>
                <h1 >{pokemon.abilities[0].ability.name}</h1>
                {pokemon.abilities[1] ? 
                <h1>{pokemon.abilities[1].ability.name}</h1> : ""}
              </div> */}
        </div>

    </div>
  )
}

export default PokemonCard