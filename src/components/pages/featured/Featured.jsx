import React from "react";
import featured from "../../../assets/assets/home/featured.jpg";
import SectionTitle from "../../section/SectionTitle";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-image bg-fixed text-white mt-10">
      <SectionTitle subheading={"check it out"} heading={"Featured item"}></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-20">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:mx-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum deleniti consectetur
            quos sit illum voluptates in, iste beatae dolore libero, vel magnam minus ut, fugiat
            dolorem mollitia harum. Vitae, sed.
          </p>
          <button className="btn btn-outline border-0 border-b-4"> Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
