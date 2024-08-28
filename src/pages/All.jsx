import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import search from "../photos/search.png"
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'

function All() {

  const [pokedata, setPokeData] = useState([])
  const [current, setCurrent] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [next, setNext] = useState()
  const [prev, setPrev] = useState()
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const getpokemon =async ()=>{
      try {
        const {data} = await axios.get(current)
        setNext(data.next)
        setPrev(data.previous)


        const urls = data.results.map(pokemon => axios.get(pokemon.url))
        const response = await Promise.all(urls)

        setPokeData(response.map(res => res.data))
        setTimeout(()=>{
          setLoading(false);
        }, 4000)
      } catch (error) {
        console.log(error);
      }
    }
    getpokemon()
  },[current])
  
  if(loading){
    return(
      <Loading/>
    )
  }


  function gotoNextPage() {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },500)
    setPage(page+1)
    setCurrent(next)
    
  }

  function gotoPrevPage() {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },500)
    setPage(page-1)
    setCurrent(prev)
  }


  return (
    <div>
        <div className=' w-full h-[50px] flex my-7 justify-center'>
            <input
            type="text"
            className='font-Mont pl-5 w-[350px] border-[#bc143c] border-2 rounded-l-lg '
            placeholder='Search Pokemon' />
            <button
            className='bg-[#bc143c] h-full w-[50px] rounded-r-lg '>
              <img className='p-2'
              src={search} alt="" />
            </button>
        </div>
        <div className='h-auto grid grid-cols-4 mx-9 pt-[50px] p-[15px]'>
            <div className='grid grid-cols-4  gap-x-[360px] gap-y-[50px]'>

                  {pokedata.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
            </div>


        </div>
        <div>
              <Pagination gotoNextPage={gotoNextPage}
                page={page}
               gotoPrevPage={gotoPrevPage} />
            </div>
    </div>
  )
}

export default All