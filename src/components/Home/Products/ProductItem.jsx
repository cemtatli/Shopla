import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className="group w-64 rounded-md p-4">
      <div>
        <h3 className="line-clamp-1 text-sm font-medium">{product.title}</h3>
        <span className="text-center text-lg font-bold text-primary">{product.price}₺</span>
        <div className="mt-4 h-44 cursor-pointer transition-all group-hover:scale-110">
          <img className="m-auto h-40 w-40 object-contain" src={product.image} alt={product.title} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
