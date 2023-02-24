import Divisor from "@/components/Divisor";
import { MoviesCarousel, SeriesCarousel } from "@/components/MoviesCarousel";
import { movieProps, tvProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { ReactElement, useCallback, useEffect, useState } from "react";
import "swiper/css";

import Deku from "@/assets/deku.svg";
import Miranha from "@/assets/miranha.svg";
import Link from "next/link";
import MainInput from "@/components/MainInput";

const apiKey = process.env.API_KEY;
const bestsMovies = process.env.BASE_URL;

const Home = (): ReactElement => {
  const [movies, setMovies] = useState<movieProps[]>([]);
  const [series, setSeries] = useState<tvProps[]>([]);

  const getData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="p-4">
      <MainInput />
      <div className="mb-4">
        <span className="darkT font-axiforma dark:text-white">Categorias</span>
        <div className="flex h-36 gap-4">
          <Link
            href={"category"}
            className="tm relative w-full cursor-pointer rounded-tm bg-linearCategoryBlue p-4 shadow-lg shadow-blue-300 transition-all duration-300 hover:scale-[1.01] dark:shadow-blue-900 md:rounded-tmMd md:px-8 lg:rounded-tmLg"
          >
            <Image
              className="absolute top-0 -left-10 transition-all duration-1000 sm:left-10"
              src={Miranha}
              alt={""}
              priority
            />
            <div className="flex flex-col items-end text-white">
              <h1 className="font-axiforma text-sm font-bold md:text-base">
                Filmes
              </h1>
              <span className="font-axiforma text-[8px] md:text-xs">
                + 850.000 títulos
              </span>
            </div>
          </Link>
          <Link
            href={"category"}
            className="relative w-full cursor-pointer rounded-tm2 bg-linearCategoryRed p-4 shadow-xl shadow-red-200 transition-all duration-300 hover:scale-[1.01] dark:shadow-red-900 md:rounded-tm2Md md:px-8 lg:rounded-tm2Lg"
          >
            <Image
              className="absolute -top-8 -right-10 transition-all duration-1000 sm:right-10"
              src={Deku}
              alt={""}
              priority
            />
            <div className="flex flex-col text-white">
              <h1 className="font-axiforma text-sm font-bold md:text-base">
                Séries
              </h1>
              <span className="font-axiforma text-[8px] md:text-xs">
                + 140.000 títulos
              </span>
            </div>
          </Link>
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
