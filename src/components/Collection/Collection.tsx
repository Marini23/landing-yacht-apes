import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import "./Collection.css";

import ImageOne_1x from "../../assets/collection-image-1-1x.jpg";
import ImageOne_2x from "../../assets/collection-image-1-2x.jpg";
import ImageTwo_1x from "../../assets/collection-image-2-1x.jpg";
import ImageTwo_2x from "../../assets/collection-image-2-2x.jpg";
import ImageThree_1x from "../../assets/collection-image-3-1x.jpg";
import ImageThree_2x from "../../assets/collection-image-3-2x.jpg";
import ImageFour_1x from "../../assets/collection-image-4-1x.jpg";
import ImageFour_2x from "../../assets/collection-image-4-2x.jpg";
import ImageFive_1x from "../../assets/collection-image-5-1x.jpg";
import ImageFive_2x from "../../assets/collection-image-5-2x.jpg";
import ImageSix_1x from "../../assets/collection-image-6-1x.jpg";
import ImageSix_2x from "../../assets/collection-image-6-2x.jpg";
import ImageSeven_1x from "../../assets/collection-image-7-1x.jpg";
import ImageSeven_2x from "../../assets/collection-image-7-2x.jpg";
import ImageEight_1x from "../../assets/collection-image-8-1x.jpg";
import ImageEight_2x from "../../assets/collection-image-8-2x.jpg";
import ImageNine_1x from "../../assets/collection-image-9-1x.jpg";
import ImageNine_2x from "../../assets/collection-image-9-2x.jpg";
import ImageTen_1x from "../../assets/collection-image-10-1x.jpg";
import ImageTen_2x from "../../assets/collection-image-10-2x.jpg";

export const Collection: React.FC = () => {
  return (
    <section className="collection-section" id="arts">
      <h2 className="collection-title">COLLECTION</h2>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img
            srcSet={`${ImageOne_1x} 1x, ${ImageOne_2x} 2x`}
            src={ImageOne_1x}
            alt="ape number one"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageTwo_1x} 1x, ${ImageTwo_2x} 2x`}
            src={ImageTwo_1x}
            alt="ape number two"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageThree_1x} 1x, ${ImageThree_2x} 2x`}
            src={ImageThree_1x}
            alt="ape number three"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageFour_1x} 1x, ${ImageFour_2x} 2x`}
            src={ImageFour_1x}
            alt="ape number four"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageFive_1x} 1x, ${ImageFive_2x} 2x`}
            src={ImageFive_1x}
            alt="ape number five"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageSix_1x} 1x, ${ImageSix_2x} 2x`}
            src={ImageSix_1x}
            alt="ape number six"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageSeven_1x} 1x, ${ImageSeven_2x} 2x`}
            src={ImageSeven_1x}
            alt="ape number seven"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageEight_1x} 1x, ${ImageEight_2x} 2x`}
            src={ImageEight_1x}
            alt="ape number eight"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageNine_1x} 1x, ${ImageNine_2x} 2x`}
            src={ImageNine_1x}
            alt="ape number nine"
            className="collection-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            srcSet={`${ImageTen_1x} 1x, ${ImageTen_2x} 2x`}
            src={ImageTen_1x}
            alt="ape number ten"
            className="collection-image"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
