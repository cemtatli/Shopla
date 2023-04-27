import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerItem from "./BannerItem";
import BannerItemData from "~/data/bannerItem.json";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="hidden md:block" {...settings}>
      {BannerItemData.map((item, id) => (
        <BannerItem item={item} key={id} />
      ))}
    </Slider>
  );
};

export default Banner;
