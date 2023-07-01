import { VscLocation } from "react-icons/vsc";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  const footerItems: any = [
    [
      "sign in",
      "View Cart",
      "My Wishlist",
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
    ],
    {
      style:
        "cursor-pointer hover:text-[#f34344] mb-5 w-[fit-content] font-{Work Sans} flex font-[400]  text-lg capitalize  text-[rgba(0,0,0,0.6)]",
    },
  ];

  return (
    <footer className="w-full grid-cols-4 flex justify-center items-center h-[400px] pb-3  ">
      {/* bg-[##f1f1f1] */}
      <div className="grid  w-[90%] grid-cols-4  justify-center">
        <div className=" w-[400px]">
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

        <ul className=" ml-80 w-[fit-content] ">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            INFORMATION
          </h4>
          {footerItems[0]?.slice(0, 5).map((item: string) => (
            <li className={footerItems[1]?.style}>{item}</li>
          ))}
        </ul>
        <ul className=" ml-44 w-[fit-content]">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            INFO LINKS
          </h4>
          {footerItems[0]?.slice(5, 10).map((item: string) => (
            <li className={footerItems[1]?.style}>{item}</li>
          ))}
        </ul>
        <ul className=" ml-11 w-[fit-content]">
          <h4 className="mb-[30px] text-[20px] font-medium uppercase">
            SUPPORT AREA
          </h4>
          {footerItems[0]?.slice(10, 15).map((item: string) => (
            <li className={footerItems[1]?.style}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
