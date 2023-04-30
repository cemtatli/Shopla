import React, { useState } from "react";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { addToCard } from "~/redux/cardSlice";
import { BlButton } from "@trendyol/baklava/dist/baklava-react";

const DetailItem = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);

  const productBuyHandle = () => {
    if (productCount < productDetail?.rating?.count) {
      setProductCount(productCount + 1);
    }
  };

  const productSellHandle = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const addBasketItem = () => {
    dispatch(
      addToCard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        productCount: productCount,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <div className="h-[350px] w-full overflow-hidden rounded-md">
            <img className="h-full w-full object-contain" src={productDetail?.image} alt={productDetail.title} />
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="flex flex-col items-center gap-2">
            <h2 className="line-clamp-2 text-2xl font-medium">{productDetail?.title}</h2>
            <p className="line-clamp-4 text-sm md:text-base">{productDetail?.description}</p>
            <div className="text-3xl font-medium text-primary">{productDetail?.price} ₺</div>
          </div>
          <div className="mt-5 flex items-center">
            <BlButton variant="tertiary" size="medium">
              <button onClick={productSellHandle}>Çıkar</button>
            </BlButton>
            <input
              readOnly
              value={productCount}
              className="flex h-10 w-12 items-center justify-center bg-white px-4 text-center text-base  font-medium text-primary outline-none"
            />

            <BlButton variant="tertiary" size="medium">
              <button onClick={productBuyHandle}>Ekle</button>
            </BlButton>
            <BlButton size="medium" className="ml-auto">
              <button onClick={addBasketItem}>Sepete Ekle</button>
            </BlButton>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-5 md:justify-start">
        <span className="text-sm font-medium text-slate-800">
          <span className="text-primary">{productDetail?.rating?.count}</span> adet ürün kaldı.
        </span>
        <span className="text-sm font-medium text-slate-800">
          <span className="text-primary">{productDetail?.rating?.rate}</span> Değerlendirme
        </span>
      </div>
      <Comment />
    </div>
  );
};

export default DetailItem;
