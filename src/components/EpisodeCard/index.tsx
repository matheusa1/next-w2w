import Image from "next/image";
import { ReactElement } from "react";

interface SeasonCardProps {
  still_path: string;
  title: string;
  release_date: string;
  episode_number: number;
}

const GetImage = process.env.IMAGE;

const EpisodeCard = (props: SeasonCardProps): ReactElement => {
  const { still_path, title, release_date, episode_number } = props;
  return (
    <div className="flex h-auto w-full flex-col gap-1">
      <Image
        className="mx-auto"
        src={`${GetImage}${still_path}`}
        alt={"episode image"}
        width={300}
        height={300}
      />
      <div className="flex justify-between">
        <span className="text-xs">{title}</span>
        <p className="text-xs">Episodio: {episode_number}</p>
      </div>
      <p className="text-xs">
        Lançado:{" "}
        {`${release_date.split("-")[2]}/${release_date.split("-")[1]}/${
          release_date.split("-")[0]
        }`}
      </p>
    </div>
  );
};

export default EpisodeCard;
