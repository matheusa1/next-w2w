import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import ResultsWrapper from "@/components/ResultsWrapper";
import { ReactElement, useState } from "react";

const Search = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<"movie" | "tv">("movie");

  const onCategoriesButtonClick = (category: "movie" | "tv") => {
    setActiveButton(category);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <MainButton
          onClick={() => onCategoriesButtonClick("movie")}
          active={activeButton === "movie"}
        >
          Filmes
        </MainButton>
        <MainButton
          onClick={() => onCategoriesButtonClick("tv")}
          active={activeButton === "tv"}
        >
          Séries
        </MainButton>
      </div>
      <MainInput />

      <ResultsWrapper />
    </div>
  );
};

export default Search;
