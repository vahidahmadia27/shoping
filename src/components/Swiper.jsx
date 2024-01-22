import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwSlider = ({ item }) => {
  return (
    <>
      <Swiper spaceBetween={50}>
        {item.length > 0
          ? item.map((l) => <SwiperSlide image={l} key={l.id} />)
          : null}
      </Swiper>
    </>
  );
};

export default SwSlider;
