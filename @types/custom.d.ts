declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "react-use" {
  const useWindowSize: () => { width: number };
  export default useWindowSize;
}

declare module "swiper" {
  export { Swiper, SwiperSlide } from "swiper/react";
  export { Navigation } from "swiper/modules";
}

declare module "swiper/css";
