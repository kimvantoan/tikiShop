import './App.css'
import { Header } from './conponents/header'
import { Footer } from './conponents/footer'
import { Body } from './conponents/body'
import axios from 'axios'
import { Detail } from './conponents/detail/Detail'
import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' Component	={Body} />
          <Route path='/product/:id' Component={Detail}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
