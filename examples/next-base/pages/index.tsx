import {
  ConnectButton,
  useDeploy,
  useMint,
  useRawRequest,
  useSaleData,
  useWallet
} from "@simpleweb/open-format-react";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Logo from "../components/logo";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gql } from "graphql-request";
import { useRouter } from "next/router";
import { buildMetadata, uploadToIPFS } from "../helpers/ipfs";

const Home: NextPage = () => {
  const { isConnected, wallet } = useWallet();
  const router = useRouter();
  const myAddress = wallet?.accounts[0].address;
  const [price, setPrice] = useState<string>("");
  const [maxSupply, setMaxSupplySupply] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [description, setDescription] = useState<string>("");

  const handleChangeSalePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.currentTarget.value);
  };
  const handleChangeMaxSupply = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxSupplySupply(parseInt(e.currentTarget.value));
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      setImage(file[0]);
    }
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  //Example Token
  const token = "0x4720FaC0bf595a77aD7b82E6c509970fc3D08C33";
  const validToken = token.toLowerCase();

  //Data retrieval
  const { data: exampleContract } = useSaleData({
    tokenId: validToken as string
  });

  const exampleTokenSaleData = exampleContract?.token?.saleData;

  //Gettting all of the minted NFT's that are associated with this address
  const { data: historicTokens } = useRawRequest({
    query: gql`
      {
        creator(id: "${myAddress}") {
          tokens {
            id
          }
        }
      }
    `
  });

  console.log({ historicTokens });

  //Deploy Function
  const {
    deploy,
    data: contractData,
    isLoading: contractDataLoading
  } = useDeploy();

  //Data retrieval
  //If you mint your own NFT the contract address will be part of the data that is returned

  const { refetch: refetchSaleData, data: myNewContract } = useSaleData({
    tokenId: contractData?.contractAddress.toLowerCase() as string
  });

  const myTokenSaleData = myNewContract?.token?.saleData;

  useEffect(() => {
    refetchSaleData();
  }, [contractDataLoading]);

  //Basic exmaple implementation of deploy function
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mintingPrice = parseFloat(price);
    const symbol = "OPEN_FORMAT";
    try {
      if (image) {
        const nftData: IPFSData = {
          name,
          description,
          image
        };
        const metadata = buildMetadata(nftData);
        const ipfsData = await uploadToIPFS(metadata);
        console.log(ipfsData);
        await deploy({
          maxSupply,
          mintingPrice,
          name,
          symbol,
          url: ipfsData.url
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Mint Function
  const { mint } = useMint();

  //Basic exmaple implementation of deploy function
  const submitPurchase = async (address: string) => {
    try {
      if (typeof validToken !== "string") {
        throw new Error("Contract address not sent");
      }
      await mint({ contractAddress: address });
    } catch (error) {
      console.log("handleDeploy", error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Open Format</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Open Format.</h1>
      </header>

      <main>
        <div className={styles.divider}></div>

        <div className={styles.main}>
          <div className={styles.connectedButtonContainer}>
            {!isConnected && <p>Click below to connect your wallet</p>}
            <div className={styles.connectedButton}>
              <ConnectButton className={styles.button} />
            </div>
          </div>
          <h2 style={{ color: "#0070f3" }} className={styles.subtitle}>
            Build your own NFT ecosystem
          </h2>
          <h2>Links to the documentation</h2>
          <div className={styles.ctaContainer}>
            <a
              className={styles.link}
              href="https://github.com/simpleweb/open-format/tree/main/sdks/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cta}>
                <h2 className={styles.subtitle}>SDK</h2>
              </div>
            </a>
            <a
              className={styles.link}
              href="https://openformat.simpleweb.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cta}>
                <h2 className={styles.subtitle}>Open Format</h2>
              </div>
            </a>
          </div>
        </div>
        {isConnected && (
          <div>
            <div className={styles.formContainer}>
              <h2 className={styles.subtitle}>Deploy Your NFT here</h2>
              <form onSubmit={e => submit(e)} className={styles.form}>
                <label className={styles.label} htmlFor="salePrice">
                  Name
                </label>
                <input
                  className={styles.input}
                  placeholder="Enter a description here"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChangeName}
                  value={name}
                />
                <label className={styles.label} htmlFor="salePrice">
                  Description
                </label>
                <input
                  className={styles.input}
                  placeholder="0.01"
                  type="text"
                  id="salePrice"
                  name="salePrice"
                  onChange={handleChangeDescription}
                  value={description}
                />

                <label className={styles.label} htmlFor="image">
                  Image
                </label>
                <input
                  className={styles.customFileInput}
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChangeImage}
                  value={""}
                />

                <label className={styles.label} htmlFor="salePrice">
                  Sale Price
                </label>
                <input
                  className={styles.input}
                  placeholder="0.01"
                  type="text"
                  id="salePrice"
                  name="salePrice"
                  onChange={handleChangeSalePrice}
                  value={price}
                />

                <label className={styles.label} htmlFor="maxSupply">
                  Max Supply
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="maxSupply"
                  name="maxSupply"
                  onChange={handleChangeMaxSupply}
                  value={maxSupply}
                />
                <>
                  <button className={styles.buttonDeploy}>Deploy NFT</button>
                </>
              </form>
            </div>
            <div className={styles.divider}></div>
            <h2 className={styles.subtitle}>Deployed NFT Contracts</h2>
            <div className={styles.nftGrid}>
              {myTokenSaleData && (
                <div className={styles.nftContainer}>
                  <div className={styles.nft}>
                    <p
                      style={{ color: "rgb(51, 189, 51)" }}
                      className={styles.subtitle}
                    >
                      Your Contract
                    </p>

                    <ul className={styles.list}>
                      {Object.entries(myTokenSaleData).map((val, index) => {
                        return (
                          <li
                            key={`${val}${index}`}
                            className={styles.listItem}
                          >
                            <span>{val[0]}</span> {`=>`}{" "}
                            <span
                              className={
                                val[0] === "id"
                                  ? styles.listItemHighlighted
                                  : ""
                              }
                            >
                              {val[1]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className={styles.flex}>
                      {parseInt(myTokenSaleData.totalSold) > 0 && (
                        <button
                          onClick={() =>
                            router.push(
                              `https://testnets.opensea.io/${myAddress}`
                            )
                          }
                          className={styles.yourContractButton}
                        >
                          View on OpenSea
                        </button>
                      )}
                      <button
                        onClick={() => submitPurchase(myTokenSaleData.id)}
                        className={styles.yourContractButton}
                      >
                        Mint NFT
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.nftContainer}>
                <div className={styles.nft}>
                  <p style={{ color: "#0070f3" }} className={styles.subtitle}>
                    Example Contract
                  </p>
                  <ul className={styles.list}>
                    {Object.entries(exampleTokenSaleData).map((val, index) => {
                      return (
                        <li key={`${val}${index}`} className={styles.listItem}>
                          {val[0]} {`=>`} {val[1]}
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.flex}>
                    <button
                      onClick={() =>
                        router.push(`https://testnets.opensea.io/${myAddress}`)
                      }
                      className={styles.buttonDeploy}
                    >
                      View on OpenSea
                    </button>
                    <button
                      onClick={() => submitPurchase(validToken)}
                      className={styles.buttonDeploy}
                    >
                      Mint NFT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <Link href={"https://simpleweb.co.uk"}>
          <a>
            <Logo />
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;