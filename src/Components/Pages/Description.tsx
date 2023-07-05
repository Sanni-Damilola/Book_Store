const Description = () => {
  return (
    <div className="h-[550px] mb-20 bg-bgDescription bg-no-repeat relative bg-cover  flex justify-around items-center">
      <div className="text-[rgba(236,228,228,0.9)] z-10">
        <h3 className="mt-10 text-[50px] text-[#f34344] font-[600]">
          What We Are.
        </h3>
        <div className="w-20 h-1.5 bg-[#f34344] mb-8"></div>
        <span className="font-semibold text-[rgba(236,228,228,0.9)] text-xl">
          Booken provide how all this Lorem Ipsum is simply dummy
        </span>
        <p className="mt-5 font-medium text-lg">
          Text of the printing and typesetting industry. Lorem Ipsum has <br />{" "}
          been the industry's standard dummy.
        </p>
        <p className="mt-5 font-medium text-lg">
          Typesetting, remaining essentially unchanged. It was <br />{" "}
          popularised with the release of Contrary to popular belief, <br />{" "}
          Lorem Ipsum is random text.
        </p>
        <p className="mt-5 font-medium text-lg">
          Letraset sheets containing Lorem Ipsum passages, and more <br />{" "}
          recently with desktop publishing.
        </p>
      </div>
      <div className="text-[rgba(236,228,228,0.9)] z-10">
        <h3 className=" text-[38px] text-[rgba(236,228,228,0.9)] font-[500]">
          What <strong className="text-[#f34344]">Clients</strong> Says
        </h3>
        <span className="font-medium text-[rgba(236,228,228,0.9)] text-lg">
          Contrary to popular belief Lorem Ipsum.
        </span>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
          nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
          reprehenderit.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
          nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
          reprehenderit.
        </p>
      </div>
      <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
    </div>
  );
};

export default Description;
