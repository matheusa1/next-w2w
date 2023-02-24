import { ReactElement, useEffect, useState } from "react";

import { BsGrid, BsList, BsSearch } from "react-icons/bs";
import MenuItem from "../MenuItem";

import { switchTheme } from "@/utils/switchTheme";
import { FaLightbulb } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Sidebar from "../Sidebar";

const Header = (): ReactElement => {
  const iconsClassNames =
    "text-black dark:text-white w-6 h-6 md:hidden dark:hover:text-slate-400 hover:text-purple-500 active:text-blue-300 transition-all duration-300";

  const [selected, setSelected] = useState<
    "home" | "category" | "search" | "series" | "movie" | undefined
  >("home");

  const [isBackButtonShown, setIsBackButtonShown] = useState(false);
  const [isSearchButtonShown, setIsSearchButtonShown] = useState(false);

  const handleSelected = (
    selected: "home" | "category" | "search" | "series" | "movie" | undefined
  ) => {
    setSelected(selected);
  };

  const getSelected = () => {
    const path = window.location.pathname;
    if (path === "/home") {
      handleSelected("home");
      setIsBackButtonShown(false);
      setIsSearchButtonShown(true);
    } else if (path === "/category") {
      handleSelected("category");
      setIsBackButtonShown(true);
      setIsSearchButtonShown(true);
    } else if (path === "/search") {
      handleSelected("search");
      setIsBackButtonShown(true);
      setIsSearchButtonShown(false);
    } else if (path === "/series") {
      handleSelected("series");
      setIsBackButtonShown(true);
      setIsSearchButtonShown(true);
    } else if (path === "/movie") {
      handleSelected("movie");
      setIsBackButtonShown(true);
      setIsSearchButtonShown(true);
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
      <div className={`flex w-full justify-between px-4 py-3 sm:hidden items-center`}>
        {isBackButtonShown ? (
          <Link
            href={"/home"}
            className={`${
              selected === "series" || selected === "movie"
                ? "text-white"
                : "dark:text-white"
            }`}
          >
            <BiLeftArrowAlt className={`w-8 h-8`} />
          </Link>
        ) : (
          <div />
        )}
        <FaLightbulb
          onClick={switchTheme}
          className={` h-6 w-6 text-slate-900 transition-all duration-300 hover:scale-110 hover:text-blue-300 active:text-purple-400 ${
            selected === "series" || selected === "movie"
              ? "text-white"
              : "dark:text-white"
          }`}
          // className={``}
        />
        {isSearchButtonShown ? (
          <Link href={"/search"}>
            <BsSearch
              className={`${
                selected === "series" || selected === "movie"
                  ? "text-white"
                  : "dark:text-white"
              } w-5 h-5`}
            />
          </Link>
        ) : (
          <div className="w-8 h-8"/>
        )}
      </div>
    </>
  );
};

export default Header;
