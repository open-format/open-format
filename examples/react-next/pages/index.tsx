import { NextPage } from "next";
import { useSaleData } from "@simpleweb/open-format-react";

const Home: NextPage = () => {
  const { data } = useSaleData();

  return (
    <div>
      <h1>Open Format React</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
