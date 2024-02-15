import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import face from "../assets/face.svg";
import cart from "../assets/cart.svg";
import Search from "../Search/Search";
export const Header = ({ setResult }) => {
  return (
    <div className="flex items-center justify-center px-10 space-x-9 ">
      <img src={logo} alt="" />
      <Search setResult={setResult} />
      <div className="flex items-center justify-center gap-x-10">
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
        <img className="w-7" src={cart} alt="" />
        <p className="w-4 h-4 text-xs flex items-center justify-center text-white bg-red-600 rounded-full -ml-2 -mt-2">
          0
        </p>
      </div>
    </div>
  );
};
