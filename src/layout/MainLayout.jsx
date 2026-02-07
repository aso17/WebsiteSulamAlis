import React from "react";
import Navigationbar from "../Components/Navigationbar";
import FooterComponent from "../Components/FooterComponent";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigationbar />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
