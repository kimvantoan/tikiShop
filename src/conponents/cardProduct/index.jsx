import React from 'react'
import anh from '../assets/anh.svg'
import star from '../assets/star.svg'

export const CardProduct = () => {
  return (
    <div className='w-48 bg-white'>
        <img className='mb-3' src={anh} alt="" />
        <div className='px-2 flex flex-col gap-y-7 '>
          <div className='text-sm'>Bản Đồ (Bản Thông Thường)</div>
          <div className='flex gap-x-3'>
            <div className='flex '> 
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className='text-bg-gray-500 text-xs'>Đã bán 5k+</p>
          </div>
          <div className='flex gap-x-2 items-center'>
            <div className='text-base font-medium'>257.000<sup>đ</sup></div>
            <div className='text-xs rounded-lg bg-gray-200 border-0 font-medium'>-26%</div>
          </div>
          <div className='text-xs text-gray-500 text-center border-t py-2'>Giao siêu tốc 2h</div>
        </div>
    </div>
  )
}
