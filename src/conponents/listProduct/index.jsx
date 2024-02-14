import React, { useEffect, useState } from 'react'
import { CardProduct } from '../cardProduct'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const ListProduct = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
     axios.get(`https://h5ltj4-8080.csb.app/books`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])
  return (
    <div className='grid lg:grid-cols-5 grid-cols-2 gap-10 mb-3'>
      {data.map(item=>{
        return <Link to={`product/${item.id}`}>
          <CardProduct item={item}/>
        </Link>
      })}
    </div>
  )
}
