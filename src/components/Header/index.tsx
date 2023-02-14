import { ReactElement, useEffect, useState } from "react";

import { BsGrid, BsList, BsSearch } from "react-icons/bs";
import MenuItem from "../MenuItem";

import { switchTheme } from "@/utils/switchTheme";
import { FaLightbulb } from "react-icons/fa";

import * as Dialog from "@radix-ui/react-dialog";
import Sidebar from "../Sidebar";

const Header = (): ReactElement => {
  const iconsClassNames =
    "text-black dark:text-white w-6 h-6 md:hidden dark:hover:text-slate-400 hover:text-purple-500 active:text-blue-300 transition-all duration-300";

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
            link="/home"
            icon={
              <span className="text-3xl font-margarine dark:text-white hover:text-purple-500 active:text-blue-300 transition-colors duration-300">
                W2w
              </span>
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

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <BsList className="dark:text-white transition-all duration-300 w-8 h-8 hover:scale-110 hover:text-purple-500 dark:hover:text-slate-400 active:text-blue-300" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="hidden sm:block sm:fixed inset-0 bg-black opacity-70" />
              <Sidebar />
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div className="sm:hidden p-2 w-full flex justify-center">
        <FaLightbulb
          onClick={switchTheme}
          className="dark:text-white transition-all duration-300 hover:scale-110 hover:text-blue-300 active:text-purple-400 text-slate-900 w-6 h-6"
        />
      </div>
    </>
  );
};

export default Header;
