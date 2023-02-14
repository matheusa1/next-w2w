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
      className={`items-center flex hover:scale-110 transition-all duration-300 relative ${
        active &&
        "after:bg-blue-300 after:w-2 after:h-2 after:absolute after:-bottom-3 after:left-1/2 after:rounded-full after:-translate-x-1/2"
      }`}
    >
      {icon}
      <span
        className={`hidden md:block text-white hover:text-slate-400 active:text-blue-300 transition-all duration-300 ${
          active && "font-bold"
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

export default MenuItem;
