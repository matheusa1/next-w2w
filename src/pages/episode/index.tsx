import GuestStartsInfo from "@/components/GuestStartsInfo";
import { EpisodeDetailsTypes } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

const API_BASE = process.env.BASE_URL;
const GetImage = process.env.IMAGE;
const API_KEY = process.env.API_KEY;

const Episode = (): ReactElement => {
  const router = useRouter();
  const [seasonNumber, setSeasonNumber] = useState<number>();
  const [episodeNumber, setEpisodeNumber] = useState<number>();
  const [serieId, setSerieId] = useState<number>();
  const [episodeInfo, setEpisodeInfo] = useState<EpisodeDetailsTypes>();

  const getData = useCallback(() => {
    if (!seasonNumber || !episodeNumber || !serieId) return;

    axios
      .get(
        `${API_BASE}tv/${serieId}/season/${seasonNumber}/episode/${episodeNumber}?${API_KEY}&language=pt-BR`
      )
      .then((res) => {
        setEpisodeInfo(res.data);
        console.log(res.data);
      });
  }, [episodeNumber, seasonNumber, serieId]);

  useEffect(() => {
    if (router.isReady) {
      setSeasonNumber(Number(router.query.seasonNumber));
      setEpisodeNumber(Number(router.query.episodeNumber));
      setSerieId(Number(router.query.serieId));
    }
  }, [
    router.isReady,
    router.query.episodeNumber,
    router.query.seasonNumber,
    router.query.serieId,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex flex-col gap-4 dark:text-white md:grid md:grid-cols-3 md:gap-4 md:p-10">
      <Image
        className="h-auto w-full md:col-span-1 md:rounded-xl"
        src={`${GetImage}${episodeInfo?.still_path}`}
        alt={""}
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4 px-4 md:col-span-2">
        <span className="text-lg lg:text-3xl">{episodeInfo?.name}</span>
        <span className="text-xs lg:text-lg">{episodeInfo?.overview}</span>
        <div className="flex flex-col gap-1 dark:text-white">
          <span className="text-base">
            Temporada: {episodeInfo?.season_number}
          </span>
          <span className="text-base">
            Numero do episódio: {episodeInfo?.episode_number}
          </span>
          <span className="text-base">
            Lançado dia: {episodeInfo?.air_date.split("-")[2]}/
            {episodeInfo?.air_date.split("-")[1]}/
            {episodeInfo?.air_date.split("-")[0]}
          </span>
        </div>
        {episodeInfo?.guest_stars.length ? (
          <>
            <span className="lg:text-xl">Elenco:</span>
            <div className="flex flex-col gap-3 xl:grid xl:grid-cols-3 xl:gap-y-10">
              {episodeInfo?.guest_stars.map((guest) => (
                <div
                  key={guest.id}
                  className="flex w-fit items-center gap-4 text-base"
                >
                  <Image
                    src={`${GetImage}${guest.profile_path}`}
                    width={300}
                    height={300}
                    alt={""}
                    className="h-28 w-24 rounded-full"
                  />
                  <div className="flex flex-col">
                    <GuestStartsInfo
                      title={"Nome:"}
                      description={guest?.name}
                    />
                    <GuestStartsInfo
                      title={"Personagem:"}
                      description={guest?.character}
                    />
                    <GuestStartsInfo
                      title={"Popularidade:"}
                      description={guest?.popularity}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Episode;
