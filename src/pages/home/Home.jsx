import { BestProducts, Header } from "../../components";
import Groups from "../../components/Groups";
import { useContext } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ContextApp);
  console.log(products);
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <div className="row mt-2">
        <h5 className="text-center">Browes The Range</h5>
        <Groups />
      </div>
      <div className="row mt-2">
        {products.length > 0
          ? products.slice(0, 8).map((l) => <Products product={l} key={l.id} />)
          : null}

        <div className="text-center mt-4">
          <Link className="text-center d-inline  btn-preview" to={"/shop"}>
            Show More
          </Link>
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-4 text-start">
          <h4 className="">5+Beautiful rooms inspiration</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            reiciendis.
          </p>
        </div>
        <div className="col-8 ">
          <BestProducts products={products} />
        </div>
      </div>
    </div>
  );
};
export default Home;
