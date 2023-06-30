import logo from "../../Images/booken-logo_150x.avif";

const Header = () => {
  return (
    <header className="sticky top-0 z-[999] w-full h-[120px] flex justify-center items-center">
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
        <button className="py-[10px] px-[20px] font-medium text-lg capitalize text-white rounded-md cursor-pointer hover:bg-[#111111]  duration-500 bg-[rgb(255,97,98)]">
          purchase
        </button>
      </div>
    </header>
  );
};

export default Header;
