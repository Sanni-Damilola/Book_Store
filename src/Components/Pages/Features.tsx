const Features = () => {
  const image: any = [
    "//nokshi-2.myshopify.com/cdn/shop/files/banner-1.png?v=1614763780",
    "//nokshi-2.myshopify.com/cdn/shop/files/banner-2.png?v=1614763805",
    "//nokshi-2.myshopify.com/cdn/shop/files/banner-2.png?v=1614763805",
  ];

  return (
    <div className="flex justify-center items-center flex-col  p-16">
      <div className="flex-wrap flex justify-center items-center mb-8">
        {image.map((value: string) => (
          <img src={value} className="md:w-[350px] object-cover m-7 md:h-[200px]" />
        ))}
      </div>
      <strong className="text-5xl mb-5 text-[rgb(0,0,0,0.8)]">
        Featured Collections
      </strong>
      <p className="text-center text-lg text-[rgb(0,0,0,0.8)]">
        Contrary to popular belief, Lorem Ipsum is not <br /> simply random.
      </p>
      <button className="py-[20px] mt-5 px-[50px] font-medium text-lg capitalize hover:text-black  rounded-[50px] cursor-pointer  bg-[#111111] text-white  duration-500 hover:border-[rgb(255,97,98)] hover:bg-[transparent] border">
        view book
      </button>
    </div>
  );
};

export default Features;
