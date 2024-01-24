import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { ContextApp } from "../contexts/ContextApp";
import { useContext } from "react";

const BestProducts = () => {
  const { products, product } = useContext(ContextApp);
  const theBestProduct = _.orderBy(products, ["like"], ["desc"]).slice(0, 5);
  return (
    <>
      {Object.keys(theBestProduct).length > 0 && (
        <Swiper
          slidesPerView={2.8}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {theBestProduct.map((theBestProduct, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="row position-relative align-items-center text-center">
                  <img
                    className="best-img-product"
                    src={theBestProduct.images[0]}
                    alt=""
                  />
                  <div className="">
                    <Link
                      className="btn-preview btn-see"
                      to={`/shop/products/${theBestProduct.id}`}
                    >
                      Show the best product
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default BestProducts;
