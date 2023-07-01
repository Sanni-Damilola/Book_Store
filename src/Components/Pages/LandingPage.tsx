import Hero from "./Hero";
import Features from "./Features";
import Description from "./Description";
import Product from "./Product";
import { ChatData } from "../review";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Description />
      <Product />
      <ChatData />
    </div>
  );
};

export default LandingPage;
