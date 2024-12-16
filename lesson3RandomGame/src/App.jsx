import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './components/Cards'
import './App.css'

function App() {
  return (
    <div className={App}>
     <h1>Memory Game</h1>
        <Cards/>
    </div>
  )
}

export default App
