import { NextPage } from "next";
import { useSaleData } from "@simpleweb/open-format-react";

const Home: NextPage = () => {
  const data = useSaleData();

  console.log({ data });

  return (
    <div>
      <h1>Open Format React</h1>
    </div>
  );
};

export default Home;
