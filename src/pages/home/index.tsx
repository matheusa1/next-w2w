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
      // console.log(movies);
      await axios
        .get(`${bestsMovies}trending/tv/day?${apiKey}&language=pt-BR`)
        .then((res) => setSeries(res.data.results));
      console.log(series);
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
