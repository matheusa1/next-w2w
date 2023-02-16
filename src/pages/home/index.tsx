import MoviesCarousel from "@/components/MoviesCarousel";
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
        <span className="dark:text-white text-xs text-end">Filmes</span>
        <MoviesCarousel media={movies} />
        <span className="dark:text-white text-xs text-end">Séries</span>
        <MoviesCarousel media={series} tv />
      </div>
    </div>
  );
};

export default Home;
