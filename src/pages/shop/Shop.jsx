import { useContext, useEffect } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products } from "../../components";

const Shop = () => {
  const { products } = useContext(ContextApp);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="row">
        {products.length > 0
          ? products.map((l) => <Products product={l} key={l.id} />)
          : null}
      </div>
    </div>
  );
};
export default Shop;
