import { useRouter } from "next/router";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";
// import { Container } from './styles';

export const MainInput = (): ReactElement => {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const onHandleSearch = () => {
    localStorage.setItem("searchQuery", searchText);
    router.push({
      pathname: "/search",
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="darkT font-axiforma dark:text-white">
        Pesquise por um conteúdo
      </label>
      <div className="relative mb-4 rounded-full bg-linearPrimary p-[2px] lg:mx-auto lg:w-[980px]">
        <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
        <input
          className="darkT w-full rounded-full  bg-[#f1f1f1] px-4 py-5 font-axiforma text-sm outline-none placeholder:text-[#6C6C6C] hover:bg-transparent hover:text-white hover:placeholder:text-white focus:bg-yellow-50 focus:text-black focus:placeholder:text-black dark:bg-blackBg dark:text-white dark:hover:bg-transparent dark:focus:bg-slate-800 dark:focus:placeholder:text-white"
          placeholder="Pesquise por um conteúdo."
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onHandleSearch();
            }
          }}
        />
        <BsSearch
          onClick={onHandleSearch}
          className="absolute right-4 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-white"
        />
      </div>
    </div>
  );
};

interface SearchPageInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  searchQuery: string;
  onHandleSearch: Dispatch<SetStateAction<string>>;
}

export const SearchPageInput = ({
  searchQuery,
  onHandleSearch,
  ...rest
}: SearchPageInputProps): ReactElement => {
  const [searchText, setSearchText] = useState(searchQuery);

  return (
    <div className="flex flex-col gap-2">
      <label className="darkT font-axiforma dark:text-white">
        Pesquise por um conteúdo
      </label>
      <div className="relative mb-4 rounded-full bg-linearPrimary p-[2px] lg:mx-auto lg:w-[980px]">
        <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
        <input
          className="darkT w-full rounded-full  bg-[#f1f1f1] px-4 py-5 font-axiforma text-sm outline-none placeholder:text-[#6C6C6C] hover:bg-transparent hover:text-white hover:placeholder:text-white focus:bg-yellow-50 focus:text-black focus:placeholder:text-black dark:bg-blackBg dark:text-white dark:hover:bg-transparent dark:focus:bg-slate-800 dark:focus:placeholder:text-white"
          placeholder="Pesquise por um conteúdo."
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
          {...rest}
        />
        <BsSearch
          onClick={() => {
            onHandleSearch(searchText);
            localStorage.setItem("searchQuery", searchText);
          }}
          className="absolute right-4 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-white"
        />
      </div>
    </div>
  );
};
