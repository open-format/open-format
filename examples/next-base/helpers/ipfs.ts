import { NFTStorage } from "nft.storage";

if (typeof process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN !== "string")
  throw new Error("Please set the NEXT_PUBLIC_CHAIN_ID environment variable.");

const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN
});

export const uploadToIPFS = async (data: IPFSData) => {
  if (!data) throw Error("Data is invalid");
  return await client.store(data);
};

/**
 * The function builds up a metadata object in a format accepted
 * by the uploadToIPFS function above.
 * Name, description and Image are REQUIRED
 * You can add any metadata you want here. Each file will be uploaded
 * with it's own IPFS CID linking back to the generated metadata.json.
 */

export const buildMetadata = (data: IPFSData) => {
  const { name, description, image } = data;
  // name, description and image are required by nft.storage.
  const metadata = {
    name,
    description,
    image,
    release_type: "art"
  };

  return metadata;
};
