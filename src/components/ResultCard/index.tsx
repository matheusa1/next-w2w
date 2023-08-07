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
      pathname: `/${type === "movie" ? type : "series"}`,
      query: { id },
    });
  };

  return (
    <div
      className="mx-auto flex w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex-col dark:bg-black bg-white h-full gap-2 text-center hover:scale-110 hover:shadow-2xl transition-all duration-300 pb-1 rounded-xl overflow-hidden"
      onClick={onHandleClick}
    >
      <div className="flex-1">
        <Image
          className=""
          src={`${getImage}${image}`}
          alt={`${title} movie image`}
          width={300}
          height={300}
          priority
        />
      </div>
      <span className="darkT font-axiforma text-xs dark:text-white">
        {title}
      </span>
    </div>
  );
};

export default ResultCard;
