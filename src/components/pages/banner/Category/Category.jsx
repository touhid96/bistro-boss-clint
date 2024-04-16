import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../../assets/assets/home/slide1.jpg";
import slide2 from "../../../../assets/assets/home/slide2.jpg";
import slide3 from "../../../../assets/assets/home/slide3.jpg";
import slide4 from "../../../../assets/assets/home/slide4.jpg";
import slide5 from "../../../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../../section/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h6 className=" text-3xl uppercase -mt-16 text-center text-gray-600"> Salad</h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h6 className=" text-3xl uppercase -mt-16 text-center text-gray-600"> Pizza</h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h6 className=" text-3xl uppercase -mt-16 text-center text-gray-600"> Soups</h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h6 className=" text-3xl uppercase -mt-16 text-center text-gray-600"> Deserts</h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h6 className=" text-3xl uppercase -mt-16 text-center text-gray-600"> Salad</h6>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
