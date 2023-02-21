import { TvDetailsProps } from "@/types";
import { Rating } from "@material-ui/lab";
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
  const [id, setId] = useState<number>();

  const getData = useCallback(() => {
    if (!id) return;

    axios
      .get(`${tvURL}${id}?${API_KEY}&language=pt-BR`)
      .then((res) => setSeriesInfo(res.data));
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
        <div className="">
          <Image
            className="absolute top-0 left-0 -z-10 w-full"
            width={300}
            height={450}
            priority
            src={`${getImageURL}${seriesInfo?.poster_path}`}
            alt={"Poster image"}
          />
          <div className="darkT relative mt-96 bg-white dark:bg-blackBg">
            <div className="absolute -top-20 h-20 w-full bg-linearPropsLight dark:bg-linearProps md:hidden" />
            <div className="p-6 dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <strong className="text-2xl font-bold">
                    {seriesInfo?.name}
                  </strong>
                  <span className="text-xs text-subTitle">
                    {seriesInfo?.first_air_date.split("-")[0]}
                  </span>
                </div>
                <span className="text-xs text-subTitle">
                  {seriesInfo?.production_companies[0].name}
                </span>
                <div className="flex flex-col gap-1">
                  <Rating
                    name="half-rating"
                    readOnly
                    defaultValue={seriesInfo?.vote_average}
                    precision={0.1}
                  />
                  <span className="text-xs text-subTitle">
                    de {seriesInfo?.vote_count} usuários
                  </span>
                </div>
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
