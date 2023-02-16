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
  return (
    <>
      {movie.length > 0 ? (
        <Swiper
          className="w-full"
          slidesPerView={onlyWidth > 1023 ? 3 : onlyWidth > 639 ? 2 : 1}
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

  return (
    <>
      {series.length > 0 ? (
        <Swiper
          className="w-full"
          slidesPerView={onlyWidth > 1023 ? 3 : onlyWidth > 639 ? 2 : 1}
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
