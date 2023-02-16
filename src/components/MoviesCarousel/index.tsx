import { TrendingMovieCard } from "@/components/TrendingMovieCard";
import { movieProps, tvProps } from "@/types";
import { ReactElement } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface MoviesCarouselProps {
  movie: movieProps[];
}

interface SeriesCarouselProps {
  series: tvProps[];
}

export const MoviesCarousel = ({
  movie,
}: MoviesCarouselProps): ReactElement => {
  return (
    <>
      {movie.length > 0 ? (
        <Swiper
          className="w-full sm:w-[607px] sm:overflow-visible"
          spaceBetween={30}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {movie.map((movie) => {
            return (
              <SwiperSlide key={movie?.id} className="w-full">
                <TrendingMovieCard {...movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
};

export const SeriesCarousel = ({
  series,
}: SeriesCarouselProps): ReactElement => {
  return (
    <>
      {series.length > 0 ? (
        <Swiper
          className="w-full sm:w-[607px] sm:overflow-visible"
          spaceBetween={30}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {series.map((media) => {
            return (
              <SwiperSlide key={media?.id} className="w-full">
                <TrendingMovieCard
                  title={media.name}
                  original_title={media.original_name}
                  {...media}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
};
