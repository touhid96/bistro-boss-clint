import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/assets/home/01.jpg";
import banner2 from "../../../assets/assets/home/02.jpg";
import banner4 from "../../../assets/assets/home/04.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
