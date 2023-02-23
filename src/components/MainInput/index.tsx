import { ReactElement } from "react";

// import { Container } from './styles';

const MainInput = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <label className="darkT font-axiforma dark:text-white">
        Pesquise por um conteúdo
      </label>
      <div className="relative mb-4 rounded-full bg-linearPrimary p-[2px] lg:mx-auto lg:w-[980px]">
        <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
        <input
          className="darkT w-full rounded-full  bg-[#f1f1f1] px-4 py-5 font-axiforma text-sm outline-none placeholder:text-[#6C6C6C] hover:bg-transparent hover:text-white hover:placeholder:text-white focus:bg-yellow-50 focus:placeholder:text-black dark:bg-blackBg dark:text-white dark:hover:bg-transparent dark:focus:bg-slate-800 dark:focus:placeholder:text-white focus:text-black"
          placeholder="Pesquise por um conteúdo."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.currentTarget.value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default MainInput;
