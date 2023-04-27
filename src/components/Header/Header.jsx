import { BlInput } from "@trendyol/baklava/dist/baklava-react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

import { ShoppingBagIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center border-b border-gray-200 border-opacity-50 bg-white  text-black">
      <nav className="m-auto flex h-full w-10/12 flex-col items-center justify-center gap-2 gap-x-2 md:flex-row md:justify-between">
        <Link to={"/"} className="flex items-center justify-end">
          <ShoppingBagIcon aria-hidden="true" width={20} className="mr-1" />
          <h3 className="select-none text-2xl font-medium tracking-tight">Shooopla!</h3>
        </Link>
        <BlInput
          icon="search"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          className="hidden w-full max-w-xs cursor-pointer lg:block xl:max-w-lg"
        />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
