import landingPageImage from "@/assets/images/landingPage.svg";
import Image from "next/image";
import { ReactElement } from "react";

const LandingPage = (): ReactElement => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <Image src={landingPageImage} alt={"img"} />
      <div className="flex flex-col items-center gap-6 w-64 mx-auto">
        <h1 className="text-white text-3xl font-bold">Where To Watch</h1>
        <p className="text-white">Onde assistir o seu filme desejado!</p>
        <div className="relative w-full">
          <div className="absolute -z-10 bg-linearPrimary w-full h-full rounded-full blur-lg" />
          <div className="bg-linearPrimary rounded-full p-[2px]">
            <button
              onClick={() => console.log("click")}
              className="transition-all active:bg-transparent w-full py-2 text-white bg-blackBg font-bold rounded-full "
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
