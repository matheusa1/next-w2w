import MainButton from "@/components/MainButton";
import { SearchPageInput } from "@/components/MainInput";
import ResultsWrapper from "@/components/ResultsWrapper";
import { Pagination, PaginationItem } from "@mui/material";
import { useWindowWidth } from "@react-hook/window-size";
import axios from "axios";
import { ReactElement, useCallback, useEffect, useState } from "react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const getMoviesBySearchQuery = process.env.SEARCH_MOVIE;
const getTvsBySearchQuery = process.env.SEARCH_TV;
const API_KEY = process.env.API_KEY;

const Search = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<"movie" | "tv">("movie");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState();
  const [tvs, setTvs] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const onlyWidth = useWindowWidth();

  const onCategoriesButtonClick = (category: "movie" | "tv") => {
    setActiveButton(category);
    localStorage.setItem("type", category);
  };

  const onPageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    localStorage.setItem("page", value.toString());
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
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
          }&page=${page}`
        )
        .then((res) => {
          setTotalPages(res.data.total_pages);
          if (activeButton === "movie") {
            setMovies(res.data.results);
          } else {
            setTvs(res.data.results);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [activeButton, searchQuery, page]);

  useEffect(() => {
    localStorage.getItem("searchQuery") &&
      setSearchQuery(localStorage.getItem("searchQuery") as string);

    localStorage.getItem("page")
      ? setPage(Number(localStorage.getItem("page")))
      : setPage(1);

    localStorage.getItem("type")
      ? setActiveButton(localStorage.getItem("type") as "movie" | "tv")
      : setActiveButton("movie");

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
            localStorage.setItem("searchQuery", e.currentTarget.value);
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

      <Pagination
        className="mx-auto my-6"
        size={`${
          onlyWidth > 374 ? "medium" : onlyWidth > 700 ? "large" : "small"
        }`}
        count={totalPages}
        color={"primary"}
        variant="outlined"
        page={page}
        onChange={onPageChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: BiLeftArrowAlt, next: BiRightArrowAlt }}
            className="darkT border-purple-300 hover:border-blue-500 hover:text-blue-500 dark:text-white"
            {...item}
          />
        )}
      />
    </div>
  );
};

export default Search;
