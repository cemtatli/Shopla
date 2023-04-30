import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailItem from "~/components/Home/Detail/DetailItem";
import Loading from "~/components/Loading";
import { getDetailProduct } from "~/redux/productSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return <>{productDetailStatus == "LOADING" ? <Loading /> : <DetailItem productDetail={productDetail} />}</>;
};

export default Detail;
