import { ReactElement } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  active?: boolean;
}

const MainButton = ({ children, active, ...rest }: Props): ReactElement => {
  return (
    <div className="relative w-full">
      <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
      <div className="rounded-full bg-linearPrimary p-[2px]">
        <button
          {...rest}
          className={`${
            active
              ? "bg-transparent text-white"
              : "bg-slate-200 text-black hover:bg-slate-800 active:bg-transparent dark:bg-blackBg dark:text-white"
          } w-full rounded-full  py-2 font-bold darkT  `}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
