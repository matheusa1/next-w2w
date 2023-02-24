import MainButton from "@/components/MainButton";
import { SearchPageInput } from "@/components/MainInput";
import ResultsWrapper from "@/components/ResultsWrapper";
import axios from "axios";
import { ReactElement, useCallback, useEffect, useState } from "react";

const getMoviesBySearchQuery = process.env.SEARCH_MOVIE;
const getTvsBySearchQuery = process.env.SEARCH_TV;
const API_KEY = process.env.API_KEY;

const Search = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<"movie" | "tv">("movie");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState();
  const [tvs, setTvs] = useState();

  const onCategoriesButtonClick = (category: "movie" | "tv") => {
    setActiveButton(category);
  };

  const getMoviesByQuery = useCallback(async () => {
    try {
      await axios
        .get(
          `${
            activeButton === "movie"
              ? getMoviesBySearchQuery
              : getTvsBySearchQuery
          }?${API_KEY}&language=pt-BR&query=${
            searchQuery === "" ? "a" : searchQuery
          }`
        )
        .then((res) => {
          if (activeButton === "movie") {
            setMovies(res.data.results);
          } else {
            setTvs(res.data.results);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery, activeButton]);

  useEffect(() => {
    getMoviesByQuery();
  }, [getMoviesByQuery]);

  return (
    <div className="scrollbar flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-10">
        <div className="w-full md:w-96">
          <MainButton
            onClick={() => onCategoriesButtonClick("movie")}
            active={activeButton === "movie"}
          >
            Filmes
          </MainButton>
        </div>
        <div className="w-full md:w-96">
          <MainButton
            onClick={() => onCategoriesButtonClick("tv")}
            active={activeButton === "tv"}
          >
            Séries
          </MainButton>
        </div>
      </div>
      <SearchPageInput
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchQuery(e.currentTarget.value);
          }
        }}
        searchQuery={searchQuery}
        onHandleSearch={setSearchQuery}
      />

      <ResultsWrapper
        data={activeButton === "movie" ? movies : tvs}
        type={activeButton}
      />
    </div>
  );
};

export default Search;
