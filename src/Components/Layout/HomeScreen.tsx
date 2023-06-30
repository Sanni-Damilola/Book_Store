import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Static";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeScreen;
