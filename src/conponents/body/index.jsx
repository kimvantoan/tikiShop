import React from 'react'
import { Fillter } from '../fillter'
import { ListProduct } from '../listProduct'

export const Body = () => {
  return (
    <div className='bg-gray-100 flex gap-4 justify-center'>
      <Fillter/>
      <ListProduct/>
    </div>
  )
}
