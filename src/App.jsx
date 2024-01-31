import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Saidbar from './components/Saidbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Studets from './Pages/Studets'
import Teachers from './Pages/Teachers'
import Accounts from './Pages/Accounts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navbar/>
     <Saidbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/stud' element={<Studets/>}/>
      <Route path='/tech' element={<Teachers/>}/>
      <Route path='/acc' element={<Accounts/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
