import EpisodeCard from "@/components/EpisodeCard";
import { TvSeasonDetailsProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

const API_BASE = process.env.BASE_URL;
const GetImage = process.env.IMAGE;
const API_KEY = process.env.API_KEY;

const Season = (): ReactElement => {
  const router = useRouter();

  const [seasonNumber, setSeasonNumber] = useState<number>();
  const [serieId, setSeriesId] = useState<number>();
  const [seasonInfo, setSeriesInfo] = useState<TvSeasonDetailsProps>();

  const getData = useCallback(() => {
    if (!seasonNumber || !serieId) return;

    axios
      .get(
        `${API_BASE}tv/${serieId}/season/${seasonNumber}?${API_KEY}&language=pt-BR`
      )
      .then((res) => {
        setSeriesInfo(res.data);
        console.log(res.data);
      });
  }, [seasonNumber, serieId]);

  useEffect(() => {
    if (router.isReady) {
      setSeasonNumber(Number(router.query.season_number));
      setSeriesId(Number(router.query.serie_id));
    }
  }, [router.isReady, router.query.season_number, router.query.serie_id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex h-full">
      <Image
        className="absolute top-0 left-0 -z-10 h-auto w-full brightness-75 md:fixed md:left-4 md:top-1/2 md:w-56 md:-translate-y-1/2 md:rounded-2xl md:shadow-xl md:brightness-100 md:dark:shadow-purple-900 lg:w-72 xl:w-96"
        width={300}
        height={450}
        priority
        src={`${GetImage}${seasonInfo?.poster_path}`}
        alt={"Season Image"}
      />
      <div className="darkT darkT relative mt-96 flex min-h-full flex-col bg-white dark:bg-blackBg md:mb-4 md:ml-64 md:mr-4 md:mt-0 md:min-h-full md:w-full md:rounded-xl md:shadow-xl md:dark:bg-black dark:md:shadow-blue-900 lg:ml-80 xl:ml-[26rem]">
        <div className="absolute -top-20 h-20 w-full bg-linearPropsLight dark:bg-linearProps md:hidden" />
        <div className="flex flex-col gap-4 p-6 dark:text-white w-screen">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <strong className="text-2xl font-bold">{seasonInfo?.name}</strong>
              <span className="text-xs text-subTitle">
                {`${seasonInfo?.air_date?.split("-")[2]}-${
                  seasonInfo?.air_date?.split("-")[1]
                }-${seasonInfo?.air_date?.split("-")[0]}`}
              </span>
            </div>
            <span>{seasonInfo?.overview}</span>
          </div>

          <span className="text-xl font-bold">Episódios:</span>
          <div className="grid grid-cols-1 gap-4 w-full">
            {seasonInfo?.episodes.map((episode) => {
              return (
                <EpisodeCard
                  still_path={episode?.still_path}
                  title={episode?.name}
                  release_date={episode?.air_date}
                  key={episode.id}
                  episode_number={episode?.episode_number}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Season;
