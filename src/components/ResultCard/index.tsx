import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface ResultCardProps {
  image: string;
  title: string;
  id: string;
  type: "movie" | "tv";
}

const getImage = process.env.IMAGE;

const ResultCard = ({
  image,
  title,
  id,
  type,
}: ResultCardProps): ReactElement => {
  const router = useRouter();
  const onHandleClick = () => {
    router.push({
      pathname: `/${type === 'movie' ? type : 'series'}`,
      query: { id },
    });
  };

  return (
    <div
      className="mx-auto flex w-full flex-col dark:bg-black bg-white h-max gap-2 text-center hover:scale-110 hover:shadow-2xl transition-all duration-300 pb-1 rounded-xl overflow-hidden"
      onClick={onHandleClick}
    >
      <Image
        className="w-full"
        src={`${getImage}${image}`}
        alt={`${title} movie image`}
        width={300}
        height={300}
      />
      <span className="darkT font-axiforma text-xs dark:text-white">
        {title}
      </span>
    </div>
  );
};

export default ResultCard;
