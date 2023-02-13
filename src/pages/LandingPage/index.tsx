import landingPageImage from "@/assets/images/landingPage.svg";
import Image from "next/image";
import { ReactElement } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Avengers from "@/assets/images/Avengers.jpg";
import Minions from "@/assets/images/Minions.jpg";
import naked from "@/assets/images/naked.jpg";
import starWars from "@/assets/images/starWars.jpg";
import transformers from "@/assets/images/transformers.jpg";
import { useRouter } from "next/router";

export const LandingPage = (): ReactElement => {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="hidden opacity-50 blur-sm -z-10 2xl:block absolute top-0 left-0 w-screen h-screen">
        <Swiper
          className="text-white w-full h-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide className="w-full h-full">
            <Image className="object-contain" src={starWars} alt={"starWars"} />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image className="object-contain" src={Avengers} alt={"Avengers"} />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image className="object-contain" src={Minions} alt={"Minions"} />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image className="object-contain" src={naked} alt={"naked"} />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Image
              className="object-contain"
              src={transformers}
              alt={"transformers"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Image src={landingPageImage} alt={"img"} />
      <div className="flex flex-col items-center gap-6 w-64 mx-auto">
        <h1 className="text-white text-3xl font-bold">Where To Watch</h1>
        <p className="text-white">Onde assistir o seu filme desejado!</p>
        <div className="relative w-full">
          <div className="absolute -z-10 bg-linearPrimary w-full h-full rounded-full blur-lg" />
          <div className="bg-linearPrimary rounded-full p-[2px]">
            <button
              onClick={handleEnter}
              className="transition-all active:bg-transparent hover:bg-slate-800 w-full py-2 text-white bg-blackBg font-bold rounded-full "
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
