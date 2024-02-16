import React from 'react'
import certification from '../assets/certification.svg'
import facebook from '../assets/facebook.svg'
import youtobe from '../assets/youtobe.svg'
import zalo from '../assets/zalo.svg'

export const Footer = () => {
  return (
    <div className='hidden md:block'>
        <div className=' md:flex gap-x-24 mx-28 my- py-4 border-b'>
            <div>
                <p className='font-medium text-base'>Hỗ trợ khách hàng</p>
                <p className='text-gray-500 text-xs'>Hotline: 1900-6035(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                <p className='text-gray-500 text-xs'>Gửi yêu cầu hỗ trợ</p>
                <p className='text-gray-500 text-xs'>Các câu hỏi thường gặp</p>
                <p className='text-gray-500 text-xs'>Hướng dẫn đặt hàng</p>
                <p className='text-gray-500 text-xs'>Phương thức vận chuyển</p>
                <p className='text-gray-500 text-xs'>Chính sách đổi trả</p>
                <p className='text-gray-500 text-xs'>Hướng dẫn trả góp</p>
                <p className='text-gray-500 text-xs'>Chính sách hàng nhập khẩu</p>
                <p className='text-gray-500 text-xs'>Hỗ trợ khách hàng: hotro@tiki.vn</p>
                <p className='text-gray-500 text-xs'>Báo lỗi bảo mật: security@tiki.vn</p>
            </div>
            <div>
                <p className='font-medium'>Về Tiki</p>
                <p className='text-gray-500 text-xs'>Giới thiệu Tiki</p>
                <p className='text-gray-500 text-xs'>Tiki Blog</p>
                <p className='text-gray-500 text-xs'>Tuyển dụng</p>
                <p className='text-gray-500 text-xs'>Chính sách bảo mật thanh toán</p>
                <p className='text-gray-500 text-xs'>Chính sách bảo mật thông tin cá nhân</p>
                <p className='text-gray-500 text-xs'>Chính sách giải quyết khiếu nại</p>

            </div>
            <div>
                <p className='font-medium'>Hợp tác và liên kết</p>
                <p className='text-gray-500 text-xs'>Quy chế hoạt động Sàn GDTMĐT</p>
                <p className='text-gray-500 text-xs'>Bán hàng cùng Tiki</p>
                <p className='font-medium mt-4'>Chứng nhận bởi</p>
                <img src={certification} alt="" />
            </div>
            <div>
                <p className='font-medium'>Phương thức thanh toán</p>
                <p className='font-medium mt-4'>Dịch vụ giao hàng</p>
            </div>
            <div>
                <p className='font-medium'>Kết nối với chúng tôi</p>
                <div className='flex gap-x-1'>
                    <img src={facebook} alt="" />
                    <img src={youtobe} alt="" />
                    <img src={zalo} alt="" />
                </div>
                <p className='font-medium mt-4'>Kết nối với chúng tôi</p>
            </div>

        </div>
        <div className='border-b mx-28 py-4 '> 
            <p className='font-medium text-base'>Công ty TNHH TIKI</p>
            <p className='text-gray-500 text-xs'>Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh</p>
            <p className='text-gray-500 text-xs'>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</p>
            <span className='text-gray-500 text-xs'>Hotline: </span><span className='text-blue-500 text-xs'>1900 6035</span>
        </div>

    </div>
  )
}
