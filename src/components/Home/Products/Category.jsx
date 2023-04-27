import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData } from "~/redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesData());
  }, [dispatch]);

  return (
    <div className="w-2/4 border-r border-gray-200 border-opacity-50 md:w-1/5">
      <h2 className="overflow-hidden border-b border-gray-200 border-opacity-50 py-4 pl-2 text-base font-medium text-black xl:text-xl">
        Kategoriler
      </h2>
      {categories?.map((category, index) => (
        <div
          onClick={() => setCategory(category)}
          className="cursor-pointer border-b border-gray-200 border-opacity-50 px-2 py-2 text-sm capitalize transition-colors hover:bg-gray-100 hover:text-primary"
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
