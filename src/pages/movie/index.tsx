import { useRouter } from "next/router";
import { ReactElement } from "react";

const Movie = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <div>
      <h1>Movie Info</h1>
    </div>
  );
};

export default Movie;
