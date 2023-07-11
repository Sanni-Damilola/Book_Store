import Hero from "./Hero";
import { ChatData } from "../review";
import { lazy, Suspense } from "react";
import { IndolentComponent } from "../common";
// import { IndolentComponent } from "../common";

const Features = lazy(() => import("../Pages/Features"));
const Description = lazy(() => import("../Pages/Description"));
const Product = lazy(() => import("../Pages/Product"));

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <IndolentComponent timmer={100}>
        <Features />
      </IndolentComponent>
      <IndolentComponent timmer={200}>
        <Description />
      </IndolentComponent>
      <IndolentComponent timmer={300}>
        <Product />
      </IndolentComponent>
      <IndolentComponent timmer={400}>
        <ChatData />
      </IndolentComponent>
    </div>
  );
};

export default LandingPage;
