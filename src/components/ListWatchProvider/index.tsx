import Image from "next/image";
import { ReactElement } from "react";
const API_Image = process.env.IMAGE;

interface watchProvidersListProps {
  title: string;
  list:
    | {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[]
    | undefined;
}

const ListWatchProvider = ({
  title,
  list,
}: watchProvidersListProps): ReactElement => {
  return (
    <>
      {list && list.length > 0 && (
        <>
          <span className="text-center text-sm text-subTitle">{title}</span>
          <div
            className={`grid ${
              list.length === 1
                ? "grid-cols-1"
                : list.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            } gap-2`}
          >
            {list?.map((provider) => (
              <div
                className="flex flex-col items-center gap-1"
                key={provider.provider_id}
              >
                <Image
                  className="rounded-2xl"
                  src={`${API_Image}${provider.logo_path}`}
                  width={100}
                  height={100}
                  alt={""}
                />
                <span className="text-center text-xs text-subTitle">
                  {provider.provider_name}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ListWatchProvider;
