import { useContext, useEffect, useState } from "react";
import { ContextApp } from "../../contexts/ContextApp";
import { Products, HeaderPage } from "../../components/index";
import { useLocation } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Shop = () => {
  const { products } = useContext(ContextApp);
  const location = useLocation();
  const urlPath = location.pathname;
  const [sort, setSort] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredProducts]);
  return (
    <div>
      <div className="p-0 m-0">
        <HeaderPage PageNameTitle={urlPath} />
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Products product={product} key={index} />
          ))
        ) : (
          <p>No products match the selected filter.</p>
        )}
      </div>
      <Pagination
        current={currentPage}
        total={products.length}
        pageSize={itemsPerPage}
        onChange={onPageChange}
      />
    </div>
  );
};
export default Shop;
