import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { getProduct } from "../services/service";
import { useContext } from "react";
import { ContextApp } from "../contexts/ContextApp";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js";
import "../assets/style/swiper.css";
import "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ViewProducts = () => {
  const { product, setProduct } = useContext(ContextApp);
  const location = useLocation();
  const hasDiscount = product.discount > 0;

  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;
  const pathPieces = location.pathname.split("/");

  const urlProduct = pathPieces.slice(1, 3).join(">");

  const { productId } = useParams();
  const thumbsSwiper = useRef(null);

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
  }, [productId, setProduct]);

  return (
    <>
      {Object.keys(product).length > 0 && (
        <section className="view-contact mt-e">
          <div className="location-url">
            <p> {`${urlProduct}>${product.name}`}</p>
          </div>
          <div className="container-fluid p-2">
            <div className="row align-items-center">
              <div className="images-slider col-lg-2 col-md-6 col-sm-12  p-1">
                <Swiper
                  onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
                  slidesPerView={4}
                  freeMode={true}
                  thumbs={{ Swiper: thumbsSwiper }}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="myswiper "
                  direction={"vertical"}
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide
                      className="watch-slides-progress p-0 m-0 "
                      key={index}
                    >
                      <img src={image} alt={`Product ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="text-product col-lg-4 col-md-6 col-sm-12 col-12 d-sm-flex d-flex  p-1">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper.current }}
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

              <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                <form action="addToPayment">
                  <div className="d-flex flex-column justify-content-around m-4">
                    <div>
                      <h2 className="text-start">{product.name}</h2>
                      <h5>
                        <small>
                          <h5 className="d-inline">قیمت:</h5>{" "}
                          {hasDiscount ? (
                            <>
                              <span
                                className="original-price"
                                style={{ textDecoration: "line-through" }}
                              >
                                ${product.price.toFixed(2)}
                              </span>
                              <span
                                className="discounted-price"
                                style={{ fontWeight: "bold" }}
                              >
                                ${discountedPrice.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            `$${product.price.toFixed(2)}`
                          )}
                        </small>
                      </h5>
                    </div>
                    <div>
                      <p>{product.detail}</p>
                    </div>
                    <div className="">
                      <h6>Size : </h6>
                      {product.size.map((size) => (
                        <option
                          key={size.id}
                          value={size.id}
                          className="size ms-1 d-inline-block"
                        >
                          {size}
                        </option>
                      ))}
                    </div>
                    <div>
                      <h6 className="">colors : </h6>
                      {product.color.map((color) => (
                        <option
                          key={color.id}
                          value={color.id}
                          className="colors ms-1 d-inline-block"
                          style={{
                            backgroundColor: color,
                          }}
                        ></option>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="row my-2 text-center">
              <div className="d-grid gap-2 col-12 mx-auto">
                <Link to={`/shop`} className="btn">
                  Back to the store page{" "}
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
