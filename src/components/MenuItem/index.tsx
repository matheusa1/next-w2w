import Link from "next/link";
import { ReactElement } from "react";

interface MenuItemProps {
  icon: ReactElement;
  text?: string;
  link: string;
  active: boolean;
}

const MenuItem = ({
  icon,
  text,
  link,
  active,
}: MenuItemProps): ReactElement => {
  return (
    <Link
      href={link}
      className={`relative flex items-center transition-all duration-300 hover:scale-110 ${
        active &&
        "after:absolute after:-bottom-3 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-blue-300"
      }`}
    >
      {icon}
      <span
        className={`hidden transition-all duration-300  hover:text-slate-400 active:text-blue-300 dark:text-white md:block ${
          active && "font-bold"
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

export default MenuItem;
