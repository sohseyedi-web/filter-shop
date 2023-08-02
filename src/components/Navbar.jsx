import * as RiIcon from "react-icons/ri";
import Logo from "../assets/logo.png";

const Navbar = ({active, setActive}) => {
  return (
    <header className="w-full py-3 px-3 flex items-center container justify-between border-b border-gray-300">
      <div className="flex items-center gap-x-2">
        <span className="text-cyan-700 cursor-pointer" onClick={() => setActive(!active)}>
          <RiIcon.RiMenuFill size={24} />
        </span>
        <img className="w-8 h-8 object-contain" src={Logo} alt="Shopping" />
      </div>
      <div className="flex items-center gap-x-4">
        <div className="text-gray-700 cursor-pointer">
          <RiIcon.RiHeart3Line size={26} />
        </div>
        <div className="text-gray-700 cursor-pointer">
          <RiIcon.RiUserLine size={26} />
        </div>
        <div className="text-gray-700 cursor-pointer">
          <RiIcon.RiShoppingBag3Line size={26} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
