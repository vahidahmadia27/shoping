import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";

const BestProducts = ({ products }) => {
  const theBestProduct = _.orderBy(products, ["like"], ["desc"]).slice(0, 5);
  console.log(theBestProduct);
  return (
    <>
      {Object.keys(theBestProduct).length > 0 && (
        <Swiper
          className="myswiper "
          watchSlidesProgress={true}
          slidesPerView={1}
          navigation={true}
        >
          {theBestProduct.map((product, index) => {
            <SwiperSlide key={index}>
              <img src={product.image} alt="" />
            </SwiperSlide>;
          })}
        </Swiper>
      )}
    </>
  );
};

export default BestProducts;
