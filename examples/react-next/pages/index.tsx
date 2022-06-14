import { NextPage } from "next";
import { useSaleData } from "@simpleweb/open-format-react";

const Home: NextPage = () => {
  const { data, isLoading } = useSaleData({
    tokenId: "0x021d35cd4849596f1013cf92f718ec7bf5541bc2"
  });

  return (
    <div>
      <h1>Open Format React</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Home;
