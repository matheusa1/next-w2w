import { ReactElement, useEffect, useState } from "react";

import { BsGrid, BsList, BsSearch } from "react-icons/bs";
import MenuItem from "../MenuItem";

import { switchTheme } from "@/utils/switchTheme";
import { FaLightbulb } from "react-icons/fa";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Sidebar from "../Sidebar";

const Header = (): ReactElement => {
  const iconsClassNames =
    "text-black dark:text-white w-6 h-6 md:hidden dark:hover:text-slate-400 hover:text-purple-500 active:text-blue-300 transition-all duration-300";

  const [selected, setSelected] = useState<
    "home" | "category" | "search" | undefined
  >("home");

  const [isBackButtonShown, setIsBackButtonShown] = useState(false);

  const handleSelected = (
    selected: "home" | "category" | "search" | undefined
  ) => {
    setSelected(selected);
  };

  const getSelected = () => {
    const path = window.location.pathname;
    if (path === "/home") {
      handleSelected("home");
      setIsBackButtonShown(false);
    } else if (path === "/category") {
      handleSelected("category");
      setIsBackButtonShown(true);
    } else if (path === "/search") {
      handleSelected("search");
      setIsBackButtonShown(true);
    }
  };

  useEffect(() => {
    getSelected();
  });

  return (
    <>
      <div className="hidden p-6 sm:block">
        <div className="flex items-center justify-between">
          <MenuItem
            active={selected === "home"}
            link="/home"
            icon={
              <span className="font-margarine text-3xl transition-colors duration-300 hover:text-purple-500 active:text-blue-300 dark:text-white">
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
              <BsList className="h-8 w-8 transition-all duration-300 hover:scale-110 hover:text-purple-500 active:text-blue-300 dark:text-white dark:hover:text-slate-400" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="inset-0 z-40 hidden bg-black opacity-70 sm:fixed sm:block" />
              <Sidebar />
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div
        className={`flex w-full ${
          isBackButtonShown ? "justify-between" : "justify-center"
        } p-2 sm:hidden`}
      >
        {isBackButtonShown && (
          <Link href={"/home"} className={"dark:text-white"}>
            Voltar
          </Link>
        )}
        <FaLightbulb
          onClick={switchTheme}
          className="h-6 w-6 text-slate-900 transition-all duration-300 hover:scale-110 hover:text-blue-300 active:text-purple-400 dark:text-white"
        />
      </div>
    </>
  );
};

export default Header;
