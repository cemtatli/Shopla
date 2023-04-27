import React, { useEffect, useState } from "react";
import { BlButton } from "@trendyol/baklava/dist/baklava-react";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "~/redux/cardSlice";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  const [isHover, setIsHover] = useState(true);
  const handleIconChange = () => {
    setIsHover(!isHover);
  };
  return (
    <div className="flex items-center justify-center">
      <BlButton variant="tertiary" slot="tooltip-trigger" icon="profile">
        Hesabım
      </BlButton>
      <BlButton
        onMouseEnter={() => handleIconChange()}
        onMouseLeave={() => handleIconChange()}
        variant="tertiary"
        slot="tooltip-trigger"
        icon={isHover ? "heart" : "heart_fill"}
      >
        Favoriler
      </BlButton>
      <div onClick={() => navigate("sepet")} className="group flex items-center">
        <BlButton variant="tertiary" slot="tooltip-trigger" icon="shopping_bag">
          Sepetim
          <span className="ml-1 text-primary group-hover:text-primary-highlight">({cards?.length})</span>
        </BlButton>
      </div>
    </div>
  );
};

export default Menu;
