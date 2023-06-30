import { BsCartPlusFill, BsPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-bgi w-full h-[650px] pb-[10px] flex justify-start items-center bg-[#effafb]">
      <div className="ml-[90px] flex-col flex  w-[40%] justify-center pb-[10px]">
        <h3 className="text-[75px] text-[#f34344] font-[600]">
          Knowledge is
          <h1 className="text-[#111111] ">Strength.</h1>
        </h3>
        <div className="w-20 h-1.5 bg-[#f34344] mb-8"></div>
        <p className="text-[rgb(51,51,51)] font-sans font-[400] text-[19px]">
          There are many variations of passages of Lorem Ipsum <br />
          the majority have suffered alteration in some.
        </p>
        <div
          className="mt-8  flex justify-center items-center w-[fit-content]  
        "
        >
          <button className="bg-[#111111] text-white hover:bg-[#f34344] duration-500 text-1xl cursor-pointer  rounded-full px-[45px] py-[19px] flex justify-center items-center  capitalize">
            explore more
            <div className="ml-3 text-white">
              <BsCartPlusFill />
            </div>
          </button>
          <button className="ml-10 flex text-black border-[3px] border-[#f34344] justify-center items-center w-[70px] h-[70px] rounded-[50px] text-xl">
            <BsPlayFill />
          </button>
        </div>
      </div>
      {/* <img src="" /> */}
      {/* https://nokshi-2.myshopify.com/cdn/shop/files/home-1-slider-1.png?v=1614763716 */}
    </div>
  );
};

export default Hero;
