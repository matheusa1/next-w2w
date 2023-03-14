import { watchProvidersListProps } from "@/types";
import { Divider } from "@material-ui/core";
import { ReactElement } from "react";
import ListWatchProvider from "../ListWatchProvider";

interface WhereListProps {
  providers: watchProvidersListProps | undefined;
}

const WhereToWatch = ({ providers }: WhereListProps): ReactElement => {
  return (
    <>
      {providers ? (
        <div className="mx-auto flex w-fit flex-col items-center gap-2 md:mx-0">
          <span>Onde Assistir:</span>
          <div className="flex flex-col gap-2">
            <ListWatchProvider title={"Streaming"} list={providers?.flatrate} />

            {providers.rent && <Divider />}

            <ListWatchProvider title={"Alugar"} list={providers?.rent} />

            {providers.buy && <Divider />}

            <ListWatchProvider title={"Comprar"} list={providers?.buy} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-center">
          Onde Assistir:{" "}
          <span className="text-xs text-subTitle">Indisponível</span>
        </div>
      )}
    </>
  );
};

export default WhereToWatch;
