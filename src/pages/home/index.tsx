import { movieProps } from "@/types";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const apiKey = process.env.API_KEY;
const bestsMovies = process.env.BASE_URL;

const Home = (): ReactElement => {
  const [movies, setMovies] = useState<movieProps[] | undefined>([]);

  const getData = async () => {
    axios
      .get(`${bestsMovies}trending/movie/day?${apiKey}&language=pt-BR`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        <span>Trend</span>
        <Swiper
          className="w-full"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className="w-full h-10 bg-red-500">a1</SwiperSlide>
          <SwiperSlide className="w-full h-10 bg-green-500">a2</SwiperSlide>
          <SwiperSlide className="w-full h-10 bg-yellow-500">a3</SwiperSlide>
          <SwiperSlide className="w-full h-10 bg-blue-500">a4</SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default Home;
