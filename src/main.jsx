
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import All from './pages/All.jsx'
import PokemonCard from './components/PokemonCard.jsx'
import Loading from './components/Loading.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='/' element={<LandingPage />}></Route>
    <Route path='/pokemons' element={<All />}></Route>
    <Route path='/card' element={<PokemonCard />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
