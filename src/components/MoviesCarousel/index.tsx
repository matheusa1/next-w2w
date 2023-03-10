import { TrendingMovieCard } from "@/components/TrendingMovieCard";
import { movieProps, tvProps } from "@/types";
import { useWindowWidth } from "@react-hook/window-size";
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
  const onlyWidth = useWindowWidth();

  const slides = () => {
    if (onlyWidth > 1800) return 5;
    if (onlyWidth > 1550) return 4;
    if (onlyWidth > 1100) return 3;
    if (onlyWidth > 700) return 2;
    return 1;
  };

  return (
    <>
      {movie.length > 0 ? (
        <Swiper
          className="w-full"
          slidesPerView={slides()}
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
  const onlyWidth = useWindowWidth();

  const slides = () => {
    if (onlyWidth > 1800) return 5;
    if (onlyWidth > 1550) return 4;
    if (onlyWidth > 1100) return 3;
    if (onlyWidth > 700) return 2;
    return 1;
  };

  return (
    <>
      {series.length > 0 ? (
        <Swiper
          className="w-full"
          slidesPerView={slides()}
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
                  serie
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
