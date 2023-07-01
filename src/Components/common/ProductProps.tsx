import { AiOutlineLine, AiOutlineStar } from "react-icons/ai";

interface iprops {
  image: string;
  title: string;
  type: string;
  amount: string;
}

const ProductProps: React.FC<iprops> = ({ amount, image, title, type }) => {
  return (
    <div className="w-[280px] m-[15px] cursor-pointer shadow-sm pb-6">
      <img src={image} />
      <div className="flex items-center mt-4 pl-3 text-[14px]">
        <AiOutlineLine />
        <p className="ml-2">Type {type}</p>
      </div>
      <h3 className="pl-4 mt-2 font-semibold text-[rgb(0,0,0,0.8)]">{title}</h3>
      <span className="text-[rgb(244,67,68)] pl-4 text-[15px] font-semibold">
        ${amount} USD
      </span>
      <div className="flex items-center text-lg mt-2 pl-3 text-[#ebeb27]">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    </div>
  );
};

export default ProductProps;
