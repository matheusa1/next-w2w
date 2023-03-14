// import { Container } from './styles';

import { ReactElement } from "react";

interface Data {
  title: string;
  description: string | number;
}

const GuestStartsInfo = (props: Data): ReactElement => {
  const { title, description } = props;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <span className="text-base">{title}</span>
        <span className="text-xs">{description}</span>
      </div>
    </div>
  );
};

export default GuestStartsInfo;
