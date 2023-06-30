import { VscLocation } from "react-icons/vsc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full grid-cols-4 justify-center items-center h-[400px] pb-3 bg-[##f1f1f1]">
      <div className="grid grid-cols-4 justify-center">
        <div>
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            about info
          </h4>
          <p className="tracking-wide mb-[30px] text-[rgb(51,51,51)] font-normal text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor inci ut labore et dolore.
          </p>
          <span className="mb-[10px] flex  items-center text-[18px]">
            <div className="text-[23px] mr-3">
              <VscLocation />
            </div>
            Addresss: 18, oguntimehin str, Nigeria
          </span>
          <span className="flex mb-[10px] items-center text-[18px]">
            <div className="text-[23px] flex  items-center mr-3">
              <MdOutlineMarkEmailRead />
            </div>
            Email: sannfortune11@example.com
          </span>
          <span className="flex  items-center text-[18px]">
            <div className="text-[23px] flex  items-center mr-3">
              <AiOutlinePhone />
            </div>
            Phone: (+234) 8183389407
          </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
