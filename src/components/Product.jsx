import SliderSw from "./SliderSw";

const Product = ({ product }) => {
  return (
    <div className="product row">
      <div className="col-7">
        <SliderSw />
      </div>
      <div className="text-product col-5">
        <h5 className="title-text-product">salam</h5>
      </div>
    </div>
  );
};

export default Product;
