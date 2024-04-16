import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../banner/Category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
