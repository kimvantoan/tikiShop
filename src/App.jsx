import './App.css'
import { Header } from './conponents/header'
import { Footer } from './conponents/footer'
import { Body } from './conponents/body'
import { Fillter } from './conponents/fillter'
import axios from 'axios'
import { Detail } from './conponents/detail/Detail'
import { ListProduct } from './conponents/listProduct'
function App() {
  const getProduct= async()=>{
    await axios.get(`https://h5ltj4-8080.csb.app/books`)
    .then((response)=>{
      console.log(response);
    })
  }
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
