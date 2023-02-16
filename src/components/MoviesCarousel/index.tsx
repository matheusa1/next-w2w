import TrendingMovieCard from "@/components/TrendingMovieCard";
import { movieProps, tvProps } from "@/types";
import { ReactElement } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface MoviesCarouselProps {
  media: movieProps[] | tvProps[];
  tv?: boolean;
}

const MoviesCarousel = ({ media, tv }: MoviesCarouselProps): ReactElement => {
  return (
    <>
      {media.length > 0 ? (
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
          {media.map((media) => {
            return (
              <SwiperSlide key={media?.id} className="w-full">
                <TrendingMovieCard
                  title={tv ? media?.name : media?.title}
                  backdrop_path={media?.backdrop_path}
                  vote_average={media?.vote_average}
                  vote_count={media?.vote_count}
                  original_title={tv? media?.original_name : media?.original_title}
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

export default MoviesCarousel;
