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
        <label className="font-axiforma dark:text-white darkT">
          Pesquise por um conteúdo
        </label>
        <div className="p-[2px] bg-linearPrimary rounded-full relative mb-4">
          <div className="absolute -z-10 bg-linearPrimary w-full h-full rounded-full blur-lg" />
          <input
            className="w-full darkT focus:bg-yellow-50 dark:focus:bg-slate-800 dark:text-white bg-[#f1f1f1] rounded-full text-sm outline-none dark:bg-blackBg px-4 py-5 placeholder:text-[#6C6C6C] font-axiforma"
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
        <span className="font-axiforma text-sm dark:text-white darkT">
          Trend do dia.
        </span>
        <div className="flex flex-col items-center gap-2">
          <span className="text-transparent w-fit text-xs bg-linearPrimary bg-clip-text">
            Filmes
          </span>
          <MoviesCarousel movie={movies} />
          <Divisor />
          <span className="text-transparent w-fit text-xs bg-linearPrimary bg-clip-text">
            Series
          </span>
          <SeriesCarousel series={series} />
        </div>
      </div>
    </div>
  );
};

export default Home;
