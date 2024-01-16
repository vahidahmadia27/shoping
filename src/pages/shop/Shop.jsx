import { useContext, useEffect } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products } from "../../components";
import { getAllProducts } from "../../services/service";

const Shop = () => {
  const { products } = useContext(ContextApp);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="row">
        {/* {Object.keys(setProducts).length > 0 && (
          <div>
            <h2>{setProducts.name}</h2>
            <h2>{setProducts.price}</h2>
            <h2>{setProducts.category}</h2>
            <h2>{setProducts.star}</h2>
            <h2>{setProducts.detail}</h2>
            <h2>{setProducts.discount}</h2>
            <h2>{setProducts.image}</h2>
            <h2>{setProducts.comment}</h2>
            <h2>{setProducts.like}</h2>
            <h2>{setProducts.groups}</h2>
          </div>
        )} */}
        {products.length > 0
          ? products.map((l) => <Products product={l} key={l.id} />)
          : null}
      </div>
    </div>
  );
};
export default Shop;
