import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const hasDiscount = product.discount > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

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
                <h5 className="d-inline">قیمت:</h5>{" "}
                {hasDiscount ? (
                  <>
                    <span className="discount-product">
                      %{product.discount}
                    </span>
                    <span
                      className="original-price"
                      style={{ textDecoration: "line-through" }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                    <span
                      className="discounted-price"
                      style={{ fontWeight: "bold" }}
                    >
                      ${discountedPrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  `$${product.price.toFixed(2)}`
                )}
              </small>
            </div>
            <div className="m-2">
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
