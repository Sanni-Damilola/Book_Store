import logo from "../../Images/booken-logo_150x.avif";
import { Chat } from "../Pages";
import { useState } from "react";

const Header = () => {
  const [show, setshow] = useState(false);
  const fnShow = () => {
    setshow(!show);
  };

  return (
    <header className="sticky top-0 z-[999] bg-white  w-full h-[120px] flex justify-center items-center">
      <div className="w-full h-full flex justify-around items-center">
        <img src={logo} />
        <div className="font-{Work Sans} flex font-[400]  text-xl capitalize  text-[rgba(0,0,0,0.6)] justify-cente  items-center">
          <nav className="mr-16 cursor-pointer hover:text-[#f34344]">home</nav>
          <nav className="mr-16 cursor-pointer hover:text-[#f34344]">
            about us
          </nav>
          <nav className="mr-16 cursor-pointer hover:text-[#f34344]">shop</nav>
          <nav className="mr-16 cursor-pointer hover:text-[#f34344]">blog</nav>
          <nav className="mr-16 cursor-pointer hover:text-[#f34344]">
            contact us
          </nav>
        </div>
        <button
          onClick={fnShow}
          className="py-[10px] px-[20px] font-medium text-lg capitalize text-white rounded-md cursor-pointer hover:bg-[#111111]  duration-500 bg-[rgb(255,97,98)]"
        >
          purchase
        </button>
      </div>
      {/* {show ? (
        <div className="absolute  top-[121px] left-0 w-[500px] h-[100vh] bg-black z-10 text-white">
          <Chat />
        </div>
      ) : null} */}
    </header>
  );
};

export default Header;
