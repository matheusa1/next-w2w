import { ReactElement } from "react";

import logo from "@/assets/logo.svg";
import Image from "next/image";

import { BsGrid } from "react-icons/bs";

const Header = (): ReactElement => {
  return (
    <div className="hidden sm:block p-6">
      <div className="flex justify-between">
        <Image className="w-20" src={logo} alt={"logoimage"} />

        <div>
          <BsGrid className="text-white" />
          <span>Categoria</span>
        </div>

        <div>
          <BsGrid className="text-white" />
          <span>Pesquisar</span>
        </div>

        <div>
          <BsGrid className="text-white" />
          
        </div>
      </div>
    </div>
  );
};

export default Header;
