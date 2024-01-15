import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products } from "../../components";

const Shop = () => {
  const { products } = useContext(ContextApp);

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
          ? products.map((l) => <Products key={l.id} product={l} />)
          : null}
      </div>
    </div>
  );
};
export default Shop;
