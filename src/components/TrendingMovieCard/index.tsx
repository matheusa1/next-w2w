import Image from "next/image";
import { ReactElement } from "react";

interface TrendingMovieCardProps {
  title: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  original_title: string;
}

const API_Image = process.env.IMAGE;

const TrendingMovieCard = (props: TrendingMovieCardProps): ReactElement => {
  const { title, backdrop_path, vote_average, vote_count, original_title } =
    props;
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Image
        width={1000}
        height={100}
        className="w-full"
        src={`${API_Image}${backdrop_path}`}
        alt={""}
      />
      <div className="absolute bottom-0 left-0 w-full bg-linearCard h-40" />
      <div className="absolute bottom-4 grid grid-cols-2 gap-4 left-4 right-4 text-white">
        <div className="flex flex-col self-start gap-2">
          <span className="text-lg font-bold">{title}</span>
          <span className="text-xs">{original_title}</span>
        </div>
        <div className="self-end justify-self-end">
          <div />
          <span className="text-xs">De {vote_count} usuários</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
