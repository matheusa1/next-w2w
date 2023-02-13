import { ReactElement, useEffect, useState } from "react";

import logo from "@/assets/logo.svg";
import Image from "next/image";

import { BsGrid, BsList, BsSearch } from "react-icons/bs";
import MenuItem from "../MenuItem";

import { FaLightbulb } from "react-icons/fa";

const Header = (): ReactElement => {
  const iconsClassNames =
    "text-white w-6 h-6 md:hidden hover:text-slate-400 active:text-blue-300 transition-all duration-300";

  const [selected, setSelected] = useState<
    "home" | "category" | "search" | undefined
  >("home");

  const handleSelected = (
    selected: "home" | "category" | "search" | undefined
  ) => {
    setSelected(selected);
  };

  const getSelected = () => {
    const path = window.location.pathname;
    if (path === "/home") {
      handleSelected("home");
    } else if (path === "/category") {
      handleSelected("category");
    } else if (path === "/search") {
      handleSelected("search");
    }
  };

  useEffect(() => {
    getSelected();
  });

  return (
    <>
      <div className="hidden sm:block p-6">
        <div className="flex justify-between items-center">
          <MenuItem
            active={selected === "home"}
            link={"/home"}
            icon={
              <Image priority className="w-20" src={logo} alt={"logoimage"} />
            }
          />

          <MenuItem
            active={selected === "category"}
            link="/category"
            icon={<BsGrid className={iconsClassNames} />}
            text={"Categoria"}
          />
          <MenuItem
            active={selected === "search"}
            link="/search"
            icon={<BsSearch className={iconsClassNames} />}
            text={"Pesquisa"}
          />

          <BsList className="text-white w-8 h-8 hover:scale-110 hover:text-slate-400 active:text-blue-300" />
        </div>
      </div>
      <div className="sm:hidden p-2 w-full flex justify-center">
        <FaLightbulb className="text-white transition-all duration-300 hover:scale-110 hover:text-blue-300 active:text-purple-400 dark:text-slate-900 w-6 h-6" />
      </div>
    </>
  );
};

export default Header;
