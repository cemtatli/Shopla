import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "~/components/Basket/Basket";
import { getCardTotal } from "~/redux/cardSlice";

const Card = () => {
  const dispatch = useDispatch();
  const { cards, totalAmount } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  return (
    <>
      {cards?.length > 0 ? (
        <div>
          {cards?.map((cart, index) => (
            <Basket key={index} cart={cart} />
          ))}

          <div className="m-auto flex w-full max-w-5xl items-center justify-center text-lg font-medium">
            Toplam Tutar: {totalAmount}₺
          </div>
        </div>
      ) : (
        <div className="flex h-screens items-center justify-center text-lg font-medium">Sepetiniz Boş</div>
      )}
    </>
  );
};

export default Card;
