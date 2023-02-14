import TrendingMovieCard from "@/components/TrendingMovieCard";
import { movieProps } from "@/types";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const apiKey = process.env.API_KEY;
const bestsMovies = process.env.BASE_URL;

const Home = (): ReactElement => {
  const [movies, setMovies] = useState<movieProps[]>([]);

  const getData = async () => {
    try {
      await axios
        .get(
          `${bestsMovies}trending/movie/day?${apiKey}&language=pt-BR&append_to_response=production_companies`
        )
        .then((res) => setMovies(res.data.results));
      console.log(movies);
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
        <span>Trend do dia</span>
        {movies.length > 0 ? (
          <Swiper
            className="w-full"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {movies.map((movie) => {
              return (
                <SwiperSlide key={movie?.id} className="w-full h-10">
                  <TrendingMovieCard
                    title={movie?.title}
                    backdrop_path={movie?.backdrop_path}
                    vote_average={movie?.vote_average}
                    vote_count={movie?.vote_count}
                    original_title={movie?.original_title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
