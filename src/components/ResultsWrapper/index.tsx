import { ReactElement } from "react";
import ResultCard from "../ResultCard";

interface ResultsWrapperProps {
  data: any;
  type: "movie" | "tv";
}

const ResultsWrapper = ({ data, type }: ResultsWrapperProps): ReactElement => {
  console.log({ data, type });
  return (
    <div className="full grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 lg:gap-10">
      {data?.map((item: any) => {
        return (
          <ResultCard
            key={item.id}
            image={item.poster_path}
            title={type === 'movie' ? item.title : item.name}
            id={item.id}
            type={type}
          />
        );
      })}
    </div>
  );
};

export default ResultsWrapper;
