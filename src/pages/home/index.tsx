import { ReactElement, useEffect } from "react";

const Home = (): ReactElement => {
  const getData = async () => {
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
