import { movieDetailsProps } from "@/types";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

const MovieURL = process.env.MOVIE;
const API_KEY = process.env.API_KEY;
const API_Image = process.env.IMAGE;

const Movie = (): ReactElement => {
  const router = useRouter();

  const [movieProps, setMovieProps] = useState<movieDetailsProps>();
  const [id, setId] = useState<number>();

  const getData = useCallback(async () => {
    if (!id) return;
    await axios
      .get(`${MovieURL}${id}?${API_KEY}&language=pt-BR`)
      .then((res) => setMovieProps(res.data));
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
      {movieProps ? (
        <div>
          <Image
            className="absolute top-0 left-0 -z-10 w-full brightness-75"
            src={`${API_Image}${movieProps?.poster_path}`}
            width={333}
            height={333}
            alt={"movieImage"}
            priority
          />
          <div className="darkT relative mt-96 flex flex-col bg-white dark:bg-blackBg">
            <div className="absolute -top-20 h-20 w-full bg-linearPropsLight dark:bg-linearProps" />
            <div className="darkT p-6 font-axiforma dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <strong className="text-2xl font-bold">
                    {movieProps?.title}
                  </strong>
                  <span className="text-xs text-subTitle">
                    {movieProps?.release_date.split("-")[0]}
                  </span>
                </div>
                <span className="text-xs text-subTitle">
                  {movieProps?.production_companies[0].name}
                </span>
                <div className="flex flex-col gap-1">
                  <Rating
                    name="half-rating"
                    readOnly
                    defaultValue={3}
                    precision={0.1}
                  />
                  <span className="text-xs text-subTitle">
                    de {movieProps?.vote_count} usuários
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
};

export default Movie;
