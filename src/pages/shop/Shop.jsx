import { useContext, useEffect, useState } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products, HeaderPage } from "../../components/index";
import { useLocation } from "react-router-dom";
import Pagination from "rc-pagination";
import _ from "lodash";
import "rc-pagination/assets/index.css";

const Shop = () => {
  const { products } = useContext(ContextApp);
  const location = useLocation();
  const urlPath = location.pathname;
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(currentPage, filteredProducts.length, products.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredProducts]);

  const sortedProducts = () => {
    switch (sortOption) {
      case "date":
        return _.orderBy(filteredProducts, ["date"], ["asc"]);
      case "like":
        return _.orderBy(filteredProducts, ["like"], ["desc"]);
      case "price":
        return _.orderBy(filteredProducts, ["price"], ["asc"]);
      default:
        return filteredProducts;
    }
  };
  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className="p-0 m-0">
        <HeaderPage PageNameTitle={urlPath} />
      </div>
      <div className="row">
        <div className="row text-center">
          <div>
            <select
              name="sort"
              onChange={handleSortOptionChange}
              value={sortOption}
            >
              <option value="default" key="default">
                Default
              </option>
              <option value="date" key="date">
                Date
              </option>
              <option value="like" key="like">
                Like
              </option>
              <option value="price" key="price">
                Price
              </option>
            </select>
          </div>
        </div>
        {sortedProducts().length > 0 ? (
          sortedProducts().map((product, index) => (
            <Products product={product} key={index} />
          ))
        ) : (
          <p>No products match the selected filter.</p>
        )}
      </div>
      <div className="row text-center m-3">
        <Pagination
          current={currentPage}
          total={products.length}
          pageSize={itemsPerPage}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};
export default Shop;
