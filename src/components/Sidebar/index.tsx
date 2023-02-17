import { switchTheme } from "@/utils/switchTheme";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { ReactElement } from "react";
import Divisor from "../Divisor";

const Sidebar = (): ReactElement => {
  return (
    <Dialog.Content className="darkT top-0 right-0 z-50 hidden h-screen w-96 flex-col items-center justify-between bg-slate-200 p-6 dark:bg-slate-900 dark:text-white sm:fixed sm:flex">
      <div className="flex w-full flex-col items-center gap-4">
        <Link href={"/home"}>Quem Somos</Link>
        <Divisor />
        <button onClick={switchTheme}>Trocar Tema</button>
        <Divisor />
        <Link target={"_blank"} href={"https://github.com/matheusa1/next-w2w"}>
          Código Fonte
        </Link>
      </div>
      <Dialog.Close asChild className="h-fit cursor-pointer">
        <span>Fechar</span>
      </Dialog.Close>
    </Dialog.Content>
  );
};

export default Sidebar;
