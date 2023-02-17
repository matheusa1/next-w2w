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

export default function LandingPage(): ReactElement {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/home");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <div className="absolute top-0 left-0 -z-10 hidden h-screen w-screen opacity-50 blur-sm 2xl:block">
        <Swiper
          className="h-full w-full text-white"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide className="h-full w-full">
            <Image className="object-contain" src={starWars} alt={"starWars"} />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <Image className="object-contain" src={Avengers} alt={"Avengers"} />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <Image className="object-contain" src={Minions} alt={"Minions"} />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <Image className="object-contain" src={naked} alt={"naked"} />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <Image
              className="object-contain"
              src={transformers}
              alt={"transformers"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Image src={landingPageImage} alt={"img"} />
      <div className="mx-auto flex w-64 flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-white">Where To Watch</h1>
        <p className="text-white">Onde assistir o seu filme desejado!</p>
        <div className="relative w-full">
          <div className="absolute -z-10 h-full w-full rounded-full bg-linearPrimary blur-lg" />
          <div className="rounded-full bg-linearPrimary p-[2px]">
            <button
              onClick={handleEnter}
              className="w-full rounded-full bg-blackBg py-2 font-bold text-white transition-all hover:bg-slate-800 active:bg-transparent "
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
