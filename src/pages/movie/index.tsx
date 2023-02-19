import ListWatchProvider from "@/components/ListWatchProvider";
import { movieDetailsProps, watchProvidersListProps } from "@/types";
import { Divider } from "@material-ui/core";
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
  const [providers, setProviders] = useState<watchProvidersListProps>();
  const [id, setId] = useState<number>();

  const getData = useCallback(async () => {
    if (!id) return;
    await axios
      .get(`${MovieURL}${id}?${API_KEY}&language=pt-BR`)
      .then((res) => setMovieProps(res.data));

    await axios
      .get(`${MovieURL}${id}/watch/providers?${API_KEY}&language=pt-BR`)
      .then((res) => setProviders(res.data.results.BR));
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
            <div className="darkT flex flex-col gap-4 p-6 font-axiforma dark:text-white">
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
                    defaultValue={movieProps?.vote_average}
                    precision={0.1}
                  />
                  <span className="text-xs text-subTitle">
                    de {movieProps?.vote_count} usuários
                  </span>
                </div>
              </div>
              <span className={""}>{movieProps?.overview}</span>
              <ul className="flex gap-3 text-xs text-subTitle">
                {movieProps?.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>

              <span className="text-xs text-subTitle">{`Tempo de duração: ${movieProps.runtime} min.`}</span>

              <span className="text-xs text-subTitle">{`Status: ${movieProps.status}`}</span>

              {movieProps?.belongs_to_collection && (
                <div className="flex flex-col gap-2">
                  <span>Pertence a coleção:</span>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      className="w-40"
                      src={`${API_Image}${movieProps.belongs_to_collection?.poster_path}`}
                      width={300}
                      height={300}
                      alt={""}
                    />
                    <span>{movieProps.belongs_to_collection?.name}</span>
                  </div>
                </div>
              )}

              {providers ? (
                <div className="flex flex-col gap-2">
                  <span>Onde Assistir:</span>
                  <div className="flex flex-col gap-2">
                    <ListWatchProvider
                      title={"Streaming"}
                      list={providers?.flatrate}
                    />

                    <Divider />

                    <ListWatchProvider
                      title={"Alugar"}
                      list={providers?.rent}
                    />

                    <Divider />

                    <ListWatchProvider
                      title={"Comprar"}
                      list={providers?.buy}
                    />
                  </div>
                </div>
              ) : (
                <span className="text-center">Indisponível</span>
              )}
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
