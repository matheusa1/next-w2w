import MediaDetails from "@/components/MediaDetails";
import WhereToWatch from "@/components/WhereToWatch";
import { TvDetailsProps, watchProvidersListProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

const tvURL = process.env.TV;
const getImageURL = process.env.IMAGE;
const API_KEY = process.env.API_KEY;

const Series = (): ReactElement => {
  const router = useRouter();
  const [seriesInfo, setSeriesInfo] = useState<TvDetailsProps>();
  const [providers, setProviders] = useState<watchProvidersListProps>();
  const [id, setId] = useState<number>();

  const getData = useCallback(() => {
    if (!id) return;

    try {
      axios
        .get(`${tvURL}${id}?${API_KEY}&language=pt-BR`)
        .then((res) => setSeriesInfo(res.data));

      axios
        .get(`${tvURL}${id}/watch/providers?${API_KEY}`)
        .then((res) => setProviders(res.data.results.BR));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id;
      setId(Number(id));
    }
  }, [router.isReady, router.query.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {seriesInfo ? (
        <div className="flex h-full">
          <Image
            className="absolute top-0 left-0 -z-10 h-auto w-full brightness-75 md:fixed md:left-4 md:top-1/2 md:w-56 md:-translate-y-1/2 md:rounded-2xl md:shadow-xl md:dark:shadow-purple-900 lg:w-72 xl:w-96"
            width={300}
            height={450}
            priority
            src={`${getImageURL}${seriesInfo?.poster_path}`}
            alt={"Poster image"}
          />
          <div className="darkT darkT relative mt-96 flex min-h-full flex-col bg-white dark:bg-blackBg md:mb-4 md:ml-64 md:mr-4 md:mt-0 md:min-h-full md:w-full md:rounded-xl md:shadow-xl md:dark:bg-black dark:md:shadow-blue-900 lg:ml-80 xl:ml-[26rem]">
            <div className="absolute -top-20 h-20 w-full bg-linearPropsLight dark:bg-linearProps md:hidden" />
            <div className="p-6 dark:text-white">
              <div className="flex flex-col gap-4">
                <MediaDetails
                  title={seriesInfo?.name}
                  release_date={seriesInfo?.first_air_date}
                  production_companies={seriesInfo?.production_companies}
                  vote_average={seriesInfo?.vote_average}
                  vote_count={seriesInfo?.vote_count}
                  overview={seriesInfo?.overview}
                  genres={seriesInfo?.genres}
                  status={seriesInfo?.status}
                />

                <div className="scrollbar flex w-[90vw] md:w-[60vw] lg:w-[65vw] 2xl:w-[70vw] gap-10 overflow-x-auto pb-4">
                  {seriesInfo?.seasons?.map((season) => (
                    <div
                      key={season.id}
                      className="flex min-w-[100px] flex-col gap-2"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-subTitle">
                          Temporada {season.season_number}
                        </span>
                        <Image
                          className="w-40 rounded-xl"
                          width={300}
                          height={450}
                          src={`${getImageURL}${season.poster_path}`}
                          alt={"season poster_path"}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs">
                          Episódios: {season.episode_count}
                        </span>
                        <div className="flex flex-col items-center text-xs">
                          Data de estreia<span>{season.air_date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <WhereToWatch providers={providers} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>carregando</div>
      )}
    </>
  );
};

export default Series;
