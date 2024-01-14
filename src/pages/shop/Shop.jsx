import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Product } from "../../components";

const Shop = (product) => {
  console.log(product.product);
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};
export default Shop;
