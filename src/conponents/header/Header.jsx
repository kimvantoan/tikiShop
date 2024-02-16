import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import face from "../assets/face.svg";
import cartBlue from "../assets/cartBlue.svg";
import cartWhite from "../assets/cartWhite.svg";
import menu from "../assets/menu.svg";
import Search from "../Search/Search";
import { useState } from "react";
export const Header = ({ setResult }) => {
  const [Open, setOpen] = useState(false)
  return (
    <div className="flex items-center bg-blue-500 md:bg-white space-x-4 px-10 md:space-x-9 ">
      <img className="hidden md:block" src={logo} alt="" />
      <img className="block md:hidden" onClick={()=>setOpen(!Open)} src={menu} alt="" />
      <Search setResult={setResult} />
      <div className={`${Open ? '' : 'hidden'} md:flex items-center justify-center gap-x-10`}>
        <div className="flex items-center justify-center gap-x-1">
          <img className="w-7" src={home} alt="" />
          <a href="">Trang chủ</a>
        </div>
        <div className="flex items-center justify-center gap-x-1">
          <img className="w-7" src={face} alt="" />
          <a href="">Tài khoản</a>
        </div>
      </div>

      <div className="flex">
        <img className="w-7 hidden md:block" src={cartBlue} alt="" />
        <img className="w-7 block md:hidden" src={cartWhite} alt="" />
        <p className="w-4 h-4 text-xs flex items-center justify-center text-white bg-red-600 rounded-full -ml-2 -mt-2">
          0
        </p>
      </div>
    </div>
  );
};
