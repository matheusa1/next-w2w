import { Rating } from "@material-ui/lab";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface TrendingMovieCardProps {
  title: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  original_title: string;
  link: string;
}

const API_Image = process.env.IMAGE;

export const TrendingMovieCard = (
  props: TrendingMovieCardProps
): ReactElement => {
  const {
    title,
    backdrop_path,
    vote_average,
    vote_count,
    original_title,
    link,
  } = props;
  return (
    <div className="relative rounded-2xl hover:scale-[1.01] transition-all">
      <Link href={link}>
        <Image
          width={1000}
          height={100}
          className="w-full rounded-2xl"
          src={`${API_Image}${backdrop_path}`}
          alt={"Movie Image"}
          priority
        />
        <div className="absolute bottom-0 left-0 h-40 w-full rounded-b-2xl bg-linearCard" />
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-4 font-axiforma text-white">
          <div className="flex flex-col gap-2 self-start">
            <span className="text-base font-bold">{title}</span>
            <span className="text-xs ">{original_title}</span>
          </div>
          <div className="flex flex-col items-end justify-end gap-2">
            <Rating
              name="half-rating"
              readOnly
              defaultValue={vote_average}
              precision={0.1}
            />
            <span className="text-xs">De {vote_count} usuários</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
