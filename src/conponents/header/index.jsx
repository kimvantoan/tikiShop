import React from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import home from '../assets/home.svg'
import face from '../assets/face.svg'
import cart from '../assets/cart.svg'
export const Header = () => {
  return (
    <div className='flex items-center justify-center px-10 space-x-9 '>
        <img src={logo} alt="" />

        <div className='w-8/12 flex items-center justify-center border border-gray-400 border-solid rounded-lg py-2.5 px-4'>
            <img className='w-7' src={search} alt="" />
            <input className='w-10/12 outline-0' type="text" />
            <button className='text-blue-600'>Tìm kiếm</button>
        </div>
        <div className='flex items-center justify-center gap-x-10'>
            <div className='flex items-center justify-center gap-x-1'>
                <img className='w-7' src={home} alt="" />
                <a href="">Trang chủ</a>
            </div>
            <div className='flex items-center justify-center gap-x-1'>
                <img className='w-7' src={face} alt="" />
                <a href="">Tài khoản</a>
            </div>
        </div>

        <div className='flex'>
            <img className='w-7' src={cart} alt="" />
            <p className='w-4 h-4 text-xs flex items-center justify-center text-white bg-red-600 rounded-full -ml-2 -mt-2'>0</p>
        </div>
    </div>
  )
}
