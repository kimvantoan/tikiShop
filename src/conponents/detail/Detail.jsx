import React, { useEffect, useState } from 'react'
import anh from '../assets/anh.svg'
import tick from '../assets/tick.svg'
import arrowRight from '../assets/arrowRight.svg'
import detailmore from '../assets/detailmore.svg'
import star from '../assets/star.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Detail = () => {
  const {id}=useParams()
  const [product,setProduct]=useState({})

  useEffect(()=>{
     axios.get(`https://h5ltj4-8080.csb.app/books/${id}`)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err));
  },[])

  let info=(attributeCode)=>{
    if(product && product.specifications){
     product.specifications[0].attributes.forEach(attribute => {
      if (attribute.code === attributeCode) {
         attribute.value; 
      }})
    }
  }

  return (
    <div className='bg-gray-100 flex gap-4 justify-center'>
      <div className='w-80 bg-white p-3'>
        <img className='w-72 ' src={product && product.images ?product.images[0].base_url : ''} alt="" />
        <div className='flex gap-x-2 h-14'>
          <img src={product && product.images ? product.images[0].large_url : ''} alt="" />
          <img src={product && product.images ? product.images[0].medium_url : ''} alt="" />
          <img src={product && product.images ? product.images[0].small_url : ''} alt="" />
          <img src={product && product.images ? product.images[0].thumbnail_url : ''} alt="" />
        </div>
        <div>
          <p className='font-semibold text-base mt-3' >Đặc điểm nổi bật</p>
          <div className='flex gap-1 items-start'>
            <img src={tick} alt="" />
            <p className='text-sm'>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
          </div>
          <div className='flex gap-1 items-start'>
            <img src={tick} alt="" />
            <p className='text-sm'>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</p>
          </div>
          <div className='flex gap-1 items-start'>
            <img src={tick} alt="" />
            <p className='text-sm'>Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</p>
          </div>
        </div>
        <div className='flex gap-3 p-2'>
          <img src={detailmore} alt="" />
          <p>Xem thêm Tóm tắt nội dung sách</p>
          <img className='ml-8' src={arrowRight} alt="" />
        </div>
      </div>

      <div className='w-1/2 bg-white p-4'>
        <div className='flex gap-2'>
          <img src={tick} alt="" />
          <p className='text-blue-600 uppercase'>chính hãng</p>
          <p>Tác giả: </p>
          <p className='text-blue-400'>{product && product.authors? product.authors[0].name : ''}</p>
        </div>
        <p className='font-medium text-xl'>{product.name}</p>
        <div className='flex gap-x-3 items-center'>
          <p className='font-medium'>{product.rating_average}</p>
          <div className='flex '> 
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>({product.quantity_sold && product.quantity_sold.value ? product.quantity_sold.value : '' })</p>
          <p className='text-bg-gray-500 text-xs'></p>
        </div>
        <div className='flex gap-x-2 items-center'>
            <div className='text-2xl font-semibold'>{product.original_price}<sup>đ</sup></div>
            <div className='text-xs rounded-lg bg-gray-200 border-0 font-medium'>-26%</div>
        </div>
        <p className='font-semibold mt-3'>Thông tin chi tiết</p>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left '>Phiên bản sách</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr className=''>
          <th className='text-sm text-gray-400 font-normal text-left'>Công ty phát hành</th>
          <td className='pl-28 pt-2'></td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Ngày xuất bản</th>
          <td className='pl-28 pt-2'>{info("publication_date")}</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Kích thước</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Dịch Giả</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Loại bìa</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Số trang</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Nhà xuất bản  </th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <p className='font-semibold'>Mô tả sản phẩm</p>
        <img src={anh} alt="" />
        <p>{product.description}</p>
      </div>

      <div className='flex flex-col gap-4 bg-white p-4'>
        <p className='font-semibold'>Số Lượng</p>
        <div className='flex items-center gap-2'>
          <button className='rounded border border-gray-300 border-solid px-4 py-2'>-</button>
          <p className='rounded border border-gray-300 border-solid px-4 py-2'>1</p>
          <button className='rounded border border-gray-300 border-solid px-4 py-2'>+</button>
        </div>
        <p className='font-semibold'>Tạm tính</p>
        <div className='text-2xl font-semibold mt-2 mb-4'>257.000<sup>đ</sup></div>
        <div className='flex flex-col gap-3'>
          <button className='text-white bg-red-600 border-0 py-2 px-32 rounded'>Mua ngay</button>
          <button className='py-2 px-32 text-blue-500 border border-blue-500 rounded'>Thêm vào giỏ</button>
          <button className='py-2 px-28 text-blue-500 border border-blue-500 rounded'>Mua trước trả sau</button>
        </div>
      </div>
    </div>
  )
}
