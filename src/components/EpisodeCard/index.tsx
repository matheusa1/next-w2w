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
    <div className="flex w-fit flex-col">
      <Image
        src={`${GetImage}${still_path}`}
        alt={"episode image"}
        width={300}
        height={300}
      />
      <div className="flex justify-between">
        <h3>{title}</h3>
        <p>Episodio: {episode_number}</p>
      </div>
      <p className="text-center">{release_date}</p>
    </div>
  );
};

export default EpisodeCard;
