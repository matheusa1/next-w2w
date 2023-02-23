import { Rating } from "@material-ui/lab";
import { ReactElement } from "react";

interface MediaDetailsProps {
  title: string;
  release_date: string;
  production_companies: {
    name: string;
  }[];
  vote_average: number;
  vote_count: number;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  status: string;
}

const MediaDetails = (props: MediaDetailsProps): ReactElement => {
  const movieProps = props;
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <strong className="text-2xl font-bold">{movieProps?.title}</strong>
          <span className="text-xs text-subTitle">
            {movieProps?.release_date?.split("-")[0]}
          </span>
        </div>
        <span className="text-xs text-subTitle">
          {movieProps?.production_companies[0]?.name}
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
        {movieProps?.genres.map((genre, index) => (
          <li className="break-words" key={genre?.id}>
            {`${index + 1}. ` + genre?.name }
          </li>
        ))}
      </ul>
      <span className="text-xs text-subTitle">{`Status: ${movieProps.status}`}</span>
    </>
  );
};

export default MediaDetails;
