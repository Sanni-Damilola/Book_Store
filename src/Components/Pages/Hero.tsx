import { BsCartPlusFill, BsPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-bgi bg-fixed w-full h-[450px] pb-[10px] flex justify-start items-center bg-[#effafb]">
      <div className="ml-[90px]  flex-col flex  w-[40%] justify-center pb-[10px]">
        <h3 className="text-[30px] mt-10 md:text-[75px] text-[#f34344] font-[600]">
          Knowledge is
          <h1 className="text-[50px] text-[#111111] md:text-[#111111]">
            Strength.
          </h1>
        </h3>
        <div className="w-20 h-1.5 bg-[#f34344] mb-8"></div>
        <p className="w-[500px] md:text-[rgb(51,51,51)] font-sans font-[400] text-[19px]">
          There are many variations of passages of Lorem Ipsum <br />
          the majority have suffered alteration in some.
        </p>
        <div
          className="mt-10  flex justify-center items-center w-[300px] md:w-[fit-content]  
        "
        >
          <button className="bg-[#111111] text-white hover:bg-[#f34344] duration-500 text-base md:text-1xl cursor-pointer  rounded-full px-[45px] md:px-[45px] py-[16px] md:py-[19px] flex justify-center items-center  capitalize">
            explore more
            <div className="ml-2 md:ml-3 text-sm md:text-white">
              <BsCartPlusFill />
            </div>
          </button>
          <button className="ml-10 flex text-black border-[3px] border-[#f34344] justify-center items-center w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-[50px] text-base md:text-xl">
            <BsPlayFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
