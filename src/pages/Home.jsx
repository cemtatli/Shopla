import React, { useState } from "react";
import Category from "~/components/Home/Products/Category";
import Filter from "~/components/Home/Products/Filter";
import Products from "~/components/Home/Products/Products";
import Banner from "~/components/Home/Banner/Banner";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <Banner />
      <Filter setSort={setSort} />
      <div className="mt-2 flex border border-gray-200 border-opacity-50">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
