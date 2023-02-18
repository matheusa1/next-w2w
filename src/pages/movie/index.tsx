import { movieDetailsProps } from "@/types";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const MovieURL = process.env.MOVIE;
const API_KEY = process.env.API_KEY;
const API_Image = process.env.IMAGE;

const Movie = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const [movieProps, setMovieProps] = useState<movieDetailsProps>();

  console.log(id);

  const getData = async () => {
    await axios
      .get(`${MovieURL}${id}?${API_KEY}&language=pt-BR`)
      .then((res) => setMovieProps(res.data));
    console.log(movieProps);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Image
        className="absolute top-0 left-0 -z-10 w-full brightness-75"
        src={`${API_Image}${movieProps?.poster_path}`}
        width={333}
        height={333}
        alt={"movieImage"}
      />
      <div className="darkT relative mt-96 flex flex-col bg-white dark:bg-blackBg">
        <div className="darkT absolute -top-20 h-20 w-full bg-linearPropsLight dark:bg-linearProps" />
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
  );
};

export default Movie;
