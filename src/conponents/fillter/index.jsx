import React from 'react'
import arrowDown from '../assets/arrowDown.svg'
import star from '../assets/star.svg'

export const Fillter = () => {
  return (
    <div className='bg-white p-2 flex flex-col gap-3'>
        <ul className='flex flex-col gap-3'>
            <li className='font-medium'>Danh Mục Sản Phẩm</li>
            <li className='text-xs'>English Books</li>
            <li className='text-xs'>Sách tiếng Việt</li>
            <li className='text-xs'>Văn phòng phẩm</li>
            <li className='text-xs'>Quà lưu niệm</li>
        </ul>
        <form>
            <p className='font-medium'>Nhà cung cấp</p>
            <input className='mt-3' type="checkbox"/>
            <label >Nhà sách Fahasa</label><br />
            <input className='mt-3' type="checkbox"/>
            <label htmlFor="">Bamboo Books</label><br />
            <input  className='mt-3' type="checkbox"/>
            <label htmlFor="">Times Books</label><br />
            <input  className='mt-3' type="checkbox"/>
            <label htmlFor="">Nhà Sách Trẻ Online</label><br />
            <input className='mt-3'  type="checkbox"/>
            <label htmlFor="">VBooks</label><br />
            <div className='flex gap-x-1 mt-3'>
                <p className='text-xs text-blue-500 '>Xem thêm</p>
                <img src={arrowDown}/>
            </div>
        </form>
        <div>
            <p className='font-medium mb-2'>Đánh giá</p>
            <div className='flex gap-x-3 mb-2'>
                <div className='flex'> 
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                </div>
                <p className='text-bg-gray-500 text-xs'>từ 5 sao</p>
            </div>
          <div className='flex gap-x-3 mb-2'>
            <div className='flex '> 
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className='text-bg-gray-500 text-xs'>từ 4 sao</p>
          </div>
          <div className='flex gap-x-3 mb-2'>
            <div className='flex '> 
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className='text-bg-gray-500 text-xs'>từ 3 sao</p>
          </div>
        </div>
    </div>
  )
}
