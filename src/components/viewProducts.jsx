import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getProduct } from "../services/service";
import { useContext } from "react";
import { ContextApp } from "../contexts/ContextApp";

const ViewProducts = () => {
  const { product, setProduct } = useContext(ContextApp);
  const location = useLocation();
  const pathPieces = location.pathname.split("/");

  const firstTwoPathPieces = pathPieces.slice(1, 3).join(">");

  const { productId } = useParams();
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
            <p> {`${firstTwoPathPieces}>${product.name}`}</p>
          </div>
          <div className="container-fluid p-2">
            <div className="row align-items-center">
              <div className="col-6 ">
                <img src={product.image} alt={product.image} />
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
