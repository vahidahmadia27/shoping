import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/service";
import { useContext } from "react";
import { ContextApp } from "../contexts/ContextApp";

const ViewProducts = () => {
  const { products, setProducts } = useContext(ContextApp);
  const { productId } = useParams();
  const fetchData = async () => {
    try {
      const { Data: productsData } = await getProduct(productId);
      console.log(productsData);
      setProducts(productsData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {Object.keys(products).length > 0 && (
        <section className="view-contact mt-e">
          <div className="container p-2">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2>{products.name}</h2>
                <img
                  src={products.image}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="row my-2 text-center">
              <div className="d-grid gap-2 col-12 mx-auto">
                <Link to={"/shop"} className="btn">
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
