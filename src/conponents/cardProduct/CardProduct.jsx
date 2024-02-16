import React from 'react'
import star from '../assets/star.svg'
export const CardProduct = ({item}) => {
    return (  
      <div className='w-48 bg-white h-96 relative '>
          <img className='mb-3 w-48 h-48 ' src={item.images[0].base_url} alt="" />
          <div className='px-2 flex flex-col gap-y-2'>
            <div className='text-sm'>{item.name}</div>
            <div className='flex gap-x-3'>
              <div className='flex '> 
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className='text-bg-gray-500 text-xs'>{item.quantity_sold && item.quantity_sold.text ? item.quantity_sold.text : '' }</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <div className='text-base font-medium'>{item.original_price}<sup>đ</sup></div>
              <div className='p-0.5 text-xs rounded-lg bg-gray-200 border-0 font-medium'>{Math.floor((item.current_seller.price-item.original_price)/item.original_price*100)}%</div>
            </div>
            <div className='text-xs text-gray-500 border-t py-2 absolute bottom-0.5 left-12'>Giao siêu tốc 2h</div>
          </div>
      </div>
  )
}
