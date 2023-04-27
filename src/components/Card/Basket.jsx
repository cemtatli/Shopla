import { BlButton } from "@trendyol/baklava/dist/baklava-react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCard } from "~/redux/cardSlice";

const Basket = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-auto my-5 flex w-full max-w-5xl flex-col items-center justify-between gap-4 rounded-md border border-gray-200 border-opacity-50 p-4 md:flex-row">
      <div className="h-[100px] overflow-hidden rounded-md">
        <img className="h-full w-full object-contain" src={cart?.image} alt={cart.title} />
      </div>
      <h2 className="line-clamp-2 w-[200px] text-sm font-medium">{cart?.title}</h2>
      <div className="text-lg font-medium text-primary">
        {cart?.price} ₺ <span className="ml-1 text-base text-black">({cart?.productCount})</span>
      </div>

      <button onClick={() => dispatch(removeFromCard(cart?.id))}>Sepetten Sil</button>
    </div>
  );
};

export default Basket;
