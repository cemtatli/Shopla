import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "~/redux/productSlice";
import ProductItem from "./ProductItem";
import ReactPaginate from "react-paginate";
import ProductLoading from "./ProductLoading";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      {productsStatus == "LOADING" ? (
        <ProductLoading />
      ) : (
        <>
          {currentItems
            ?.sort((a, b) => (sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : "ERROR"))
            ?.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          <ReactPaginate
            className="paginate"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
