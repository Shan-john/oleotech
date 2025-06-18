import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const techImageUrls = [
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_1.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_3.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_4.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_5.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_5.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_1.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_4.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_5.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_5.jpg",
  "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/06/category_1_1.jpg"
];

function BodySection() {
  return (
    <div className="h-[900px] bg-white text-black ">
      <div className="md:pt-[150px] pt-[310px] text-center">
        <h3 className="text-xl  font-[cursive]">Wonderful Place For You</h3>
        <h1 className="text-6xl font-bold text-green-900">Tour Categories</h1>
      </div>

      <div className="w-auto h-[clamp(20px,60vh,360px)]  overflow-hidden flex justify-center items-center   md:mt-[60px] mt-[40px] ">
  <Swiper
    modules={[Autoplay, EffectCoverflow, Pagination ]}
    spaceBetween={30}
     
    breakpoints={{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }}
    
    loop={true}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    effect="coverflow"
    coverflowEffect={{
      rotate: 10,
      stretch:0,
      depth: 35,
      modifier: -2,
      slideShadows: true,
    }}
    pagination={{ clickable: true }}
    className="w-auto h-[clamp(20px,30vh,600px)]  "
  >
    {techImageUrls.map((url, index) => (
      <SwiperSlide
        key={index}
        className=" w-[700px]  overflow-hidden rounded-xl shadow-xl "
      >
        <img
          src={url}
          alt={`Slide ${index}`}
          className="w-[700px] h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
}

export default BodySection;
