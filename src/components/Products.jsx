import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-12 col-12 ">
      <div className=" product m-1 ">
        <div className="d-flex flex-column justify-content-around">
          <div className="img-product col-12">
            <img src={product.image} alt="" />
          </div>
          <div className="text-product col-12">
            <h5>{product.name}</h5>
            <Link to={`/shop/products/${product.id}`} className="btn my-1">
              click
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
