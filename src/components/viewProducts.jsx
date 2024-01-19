import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getProduct } from "../services/service";
import { useContext } from "react";
import { ContextApp } from "../contexts/ContextApp";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js";
import "../assets/style/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ViewProducts = () => {
  const { product, setProduct } = useContext(ContextApp);
  const location = useLocation();

  const pathPieces = location.pathname.split("/");

  const urlProduct = pathPieces.slice(1, 3).join(">");

  const { productId } = useParams();
  const { thumbsSwiper, setThumbsSwiper } = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productData } = await getProduct(productId);
        setProduct(productData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(product).length > 0 && (
        <section className="view-contact mt-e">
          <div className="location-url">
            <p> {`${urlProduct}>${product.name}`}</p>
          </div>
          <div className="container-fluid p-2">
            <div className="row align-items-center">
              <div className=" col-2 p-1">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  direction="vertical"
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide className="watch-slides-progress" key={index}>
                      <img src={image} alt={`Product ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="text-product col-4 p-1">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide className="thumbs" key={index}>
                      <img src={image} alt={`Product ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="col-6 ">
                <div className="d-flex flex-column justify-content-around m-4">
                  <div>
                    <h2 className="text-start">{product.name}</h2>
                    <h5>
                      {" "}
                      price : <small>{product.price}</small>
                    </h5>
                  </div>
                  <div>
                    <p>{product.detail}</p>
                  </div>
                  <div className="">
                    <h6>Size : </h6>
                    {product.size.map((size, index) => (
                      <small key={index} className="size ms-1 d-inline-block">
                        {size}
                      </small>
                    ))}
                  </div>
                  <div>
                    <h6 className="">colors : </h6>
                    {product.color.map((color, index) => (
                      <p
                        key={index}
                        className="colors ms-1 d-inline-block"
                        style={{
                          backgroundColor: color,
                        }}
                      ></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-2 text-center">
              <div className="d-grid gap-2 col-12 mx-auto">
                <Link to={`/shop`} className="btn">
                  برگشت به صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewProducts;
