import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getProduct } from "../services/service";
import { useContext } from "react";
import { ContextApp } from "../contexts/ContextApp";

const ViewProducts = () => {
  const { products, setProducts } = useContext(ContextApp);
  const { productId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productData } = await getProduct(productId);
        setProducts(productData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [productId]);
  return (
    <>
      {Object.keys(products).length > 0 && (
        <section className="view-contact mt-e">
          <div className="container-fluid p-2">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="d-flex flex-column justify-content-around">
                  <div>
                    <h2 className="text-start">{products.name}</h2>
                  </div>
                  <div>
                    <p>{products.detail}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src={products.image} alt={products.image} />
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
