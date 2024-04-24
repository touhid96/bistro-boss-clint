import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

const Main = () => {
  const location = useLocation();
  const noHederFooter = location.pathname.includes("login");
  return (
    <div>
      {noHederFooter || <NavBar></NavBar>}

      <Outlet></Outlet>
      {noHederFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
