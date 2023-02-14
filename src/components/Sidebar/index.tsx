import { switchTheme } from "@/utils/switchTheme";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { ReactElement } from "react";
import Divisor from "../Divisor";

const Sidebar = (): ReactElement => {
  return (
    <Dialog.Content className="hidden sm:fixed top-0 right-0 w-96 h-screen bg-slate-200 sm:flex flex-col items-center justify-between p-6 dark:bg-slate-900 dark:text-white darkT">
      <div className="flex flex-col gap-4 w-full items-center">
        <Link href={"/home"}>Quem Somos</Link>
        <Divisor />
        <button onClick={switchTheme}>Trocar Tema</button>
        <Divisor />
        <Link target={"_blank"} href={"https://github.com/matheusa1/next-w2w"}>
          Código Fonte
        </Link>
      </div>
      <Dialog.Close asChild className="cursor-pointer h-fit">
        <span>Fechar</span>
      </Dialog.Close>
    </Dialog.Content>
  );
};

export default Sidebar;
