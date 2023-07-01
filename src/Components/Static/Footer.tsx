import { VscLocation } from "react-icons/vsc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  const footerItems = [
    "sign in",
    "View Cart",
    "Track My Order",
    "Help",
    "Home",
    "About Us",
    "Shop",
    "Blog",
    "Contact Us",
    "Hello & Contact",
    "Shipping & Tax",
    "Return Policy",
    "Affiliates",
    "Legal Notice",
  ];

  return (
    <footer className="w-full grid-cols-4 flex justify-center items-center h-[400px] pb-3  ">
      {/* bg-[##f1f1f1] */}
      <div className="grid  w-[90%] grid-cols-4  justify-center">
        <div className="bg-red-600 ">
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

        <ul className=" ml-80 w-[fit-content]">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            INFORMATION
          </h4>
          {footerItems.slice(0, 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className=" ml-44 w-[fit-content]">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            INFORMATION
          </h4>
          {footerItems.slice(4, 9).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className=" ml-11 w-[fit-content]">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            INFORMATION
          </h4>
          {footerItems.slice(9, 14).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
