import React from 'react'
import anh from '../assets/anh.svg'
import tick from '../assets/tick.svg'
import arrowRight from '../assets/arrowRight.svg'
import detailmore from '../assets/detailmore.svg'
import star from '../assets/star.svg'

export const Detail = () => {
  return (
    <div className='bg-gray-100 flex gap-4 justify-center'>
      <div className='w-80 bg-white p-3'>
        <img className='w-72 ' src={anh} alt="" />
        <div className='flex gap-x-2 h-14'>
          <img src={anh} alt="" />
          <img src={anh} alt="" />
          <img src={anh} alt="" />
          <img src={anh} alt="" />
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
          <p className='text-blue-400'>Aleksandra Mizielińska, Daniel Mizieliński</p>
        </div>
        <p className='font-medium text-xl'>Bản Đồ</p>
        <div className='flex gap-x-3 items-center'>
          <p className='font-medium'>4.8</p>
          <div className='flex '> 
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>(928)</p>
          <p className='text-bg-gray-500 text-xs'>Đã bán 5k+</p>
        </div>
        <div className='flex gap-x-2 items-center'>
            <div className='text-2xl font-semibold'>257.000<sup>đ</sup></div>
            <div className='text-xs rounded-lg bg-gray-200 border-0 font-medium'>-26%</div>
        </div>
        <p className='font-semibold mt-3'>Thông tin chi tiết</p>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left '>Phiên bản sách</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr className=''>
          <th className='text-sm text-gray-400 font-normal text-left'>Công ty phát hành</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
        </tr>
        <tr>
          <th className='text-sm text-gray-400 font-normal text-left'>Ngày xuất bản</th>
          <td className='pl-28 pt-2'>Phiên bản thường</td>
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
        <p>Hãy khám phá thế giới cùng cuốn bản đồ khổng lồ đầu tiên ở Việt Nam! Sách gồm
52 tấm bản đồ minh họa sinh động các đặc điểm địa lý và biên giới chính trị, giới
thiệu những địa điểm nổi tiếng, những nét đặc trưng, về động vật và thực vật bản
địa, về con người địa phương, các sự kiện văn hóa cùng nhiều thông tin hấp dẫn
khác.
Đến với cuốn Bản đồ khổng lồ (27x37cm) gồm 52 tấm bản đồ đầy màu sắc sống
động này, các bạn nhỏ sẽ được thỏa sức khám phá thế giới. Có tất cả 6 tấm bản đồ
lục địa và 42 bản đồ quốc gia. Châu u có gì, châu Á nổi tiếng vì điều chi, khí hậu ở
châu Phi như thế nào? Tất cả những chi tiết nổi bật của từng vùng miền, từng đất
nước, như địa danh, trang phục, ẩm thực, lễ hội tập tục truyền thống, v…v… đều
được liệt kê bằng những hình vẽ ngộ nghĩnh đáng yêu. Mỗi bản đồ có thống kê sơ
bộ về diện tích, dân số, ngôn ngữ… để các bạn nhỏ nắm được thông tin tổng quát
của từng đất nước, châu lục. Mỗi nước đều được phân chia thành các vùng địa lý
cụ thể với tên vùng được viết mờ, các thành phố lớn trong từng nước được viết
bằng màu đỏ nổi bật với chấm đỏ bên cạnh.
Cuốn sách này hứa hẹn sẽ là tấm vé đưa độc giả nhỏ du lịch khắp mọi miền trên thế
giới. Các bậc phụ huynh cũng có thể đồng hành cùng con em mình, cùng ngâm cứu
từng chi tiết trên mỗi tấm bản đồ, tìm hiểu và bàn luận về các địa phương. Thông
qua việc chỉ dẫn, diễn giải cho các con về những thông tin trên bản đồ, đây sẽ là
cuốn sách tương tác tốt để bố mẹ kết nối và gần gũi với con mình hơn.
CUỐN SÁCH NÀY CÓ GÌ ĐẶC BIỆT?
Cuốn sách Bản đồ đã được xuất bản tại hơn 30 quốc gia, bán được hơn 3 triệu bản
in, là một trong những cuốn bản đồ ăn khách nhất thế giới. Bản đồ của hai tác giả
Aleksandra Mizielińska và Daniel Mizieliński đã giành được nhiều giải thưởng lớn,
nổi bật nhất là giải Prix Sorcières của Pháp và giải Premio Andersen của Ý – hai giải
thưởng danh giá cho dòng sách thiếu nhi.
Các quốc gia đã xuất bản “Bản đồ”: Úc, Áo, Bỉ, Brazil, Canada, Chile, Trung Quốc,
Croatia, Séc, Ecuador, Ai Cập, Fiji, Phần Land, Pháp, Đức, Ghana, Hy Lạp, Iceland,
Ấn Độ, Ý, Nhật Bản, Jordan, Madagascar, Ma Rốc, Mexico, Mông Cổ, Namibia,
Nepal, Hà Lan, New Zealand, Peru, Ba Lan, Nam Phi, Romania, Nga, Tây Ban Nha,
Thụy Điển, Thụy Sĩ, Tanzania, Thái Lan, Anh, Mỹ.
ĐẶC BIỆT: Phiên bản "Bản đồ" Việt Nam đặc biệt được tác giả vẽ riêng đất nước
Việt Nam.
Để thực hiện cuốn sách đồ sộ này, hai tác giả trẻ đã phải mất hơn 3 năm trời. Sau
khi nghiên cứu và tìm hiểu kỹ lưỡng, họ lập một danh sách các thông tin hấp dẫn và
thú vị với trẻ em, chọn lọc ra những chi tiết đặc sắc nhất của mỗi nước để vẽ vào
bản đồ. Các tấm bản đồ đều được vẽ theo tỉ lệ chuẩn xác dựa trên các bản đồ địa
lý đã được phát hành. Hai tác giả không chỉ vẽ tay tất cả các chi tiết hình ảnh mà
còn dày công thiết kế tất cả các phông chữ được dùng trong sách.
Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào
loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác
như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng
giao từ nước ngoài có giá trị trên 1 triệu đồng).....
Thu gọn</p>
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
          <button className='py-2 px-32 text-blue-500 border border-blue-500 rounded'>Mua trước trả sau</button>
        </div>
      </div>
    </div>
  )
}
