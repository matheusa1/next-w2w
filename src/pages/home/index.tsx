import Divisor from "@/components/Divisor";
import { MoviesCarousel, SeriesCarousel } from "@/components/MoviesCarousel";
import { movieProps, tvProps } from "@/types";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import "swiper/css";

const apiKey = process.env.API_KEY;
const bestsMovies = process.env.BASE_URL;

const Home = (): ReactElement => {
  const [movies, setMovies] = useState<movieProps[]>([]);
  const [series, setSeries] = useState<tvProps[]>([]);

  const getData = async () => {
    try {
      await axios
        .get(`${bestsMovies}trending/movie/day?${apiKey}&language=pt-BR`)
        .then((res) => setMovies(res.data.results));

      await axios
        .get(`${bestsMovies}trending/tv/day?${apiKey}&language=pt-BR`)
        .then((res) => setSeries(res.data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        <label className="darkT font-axiforma dark:text-white">
          Pesquise por um conteúdo
        </label>
        <div className="relative mb-4 rounded-full bg-linearPrimary p-[2px] lg:mx-auto lg:w-[980px]">
          <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
          <input
            className="darkT w-full rounded-full bg-[#f1f1f1] px-4 py-5 font-axiforma text-sm outline-none placeholder:text-[#6C6C6C] hover:bg-transparent hover:text-white hover:placeholder:text-white focus:bg-yellow-50 focus:placeholder:text-black dark:bg-blackBg dark:text-white dark:hover:bg-transparent dark:focus:bg-slate-800 dark:focus:placeholder:text-white"
            placeholder="Pesquise por um conteúdo."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log(e.currentTarget.value);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="darkT font-axiforma dark:text-white">
          Trend do dia.
        </span>
        <div className="flex flex-col items-center gap-2">
          <span className="w-fit bg-linearPrimary bg-clip-text text-xs text-transparent">
            Filmes
          </span>
          <MoviesCarousel movie={movies} />
          <Divisor />
          <span className="w-fit bg-linearPrimary bg-clip-text text-xs text-transparent">
            Series
          </span>
          <SeriesCarousel series={series} />
        </div>
      </div>
    </div>
  );
};

export default Home;
