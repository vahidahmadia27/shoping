import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-6 col-12 ">
      <div className=" product m-1 ">
        <div className="d-flex flex-column justify-content-around">
          <div className="img-product col-12">
            {product.images && product.images.length > 0 && (
              <img src={product.images[0]} alt="Product 1" />
            )}
          </div>
          <div className="text-product col-12 p-1">
            <h5>{product.name}</h5>
            <small className="product-detail">{product.detail}</small>
            <div className="d-flex justify-content-around align-items-center mt-2">
              <small>
                <h5 className="d-inline">price : </h5> ${product.price}
              </small>
              <Link to={`/shop/products/${product.id}`} className="btn-preview">
                preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// {/* <Link to={`/shop/products/${product.id}`} className="btn my-1">
//         click
//       </Link> */}
export default Products;
