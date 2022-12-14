import Head from "next/head";
import { motion } from "framer-motion";
import TopCollections from "../components/TopCollections/TopCollections";
import { ethers } from "ethers";
import { nftaddress, nftmarketaddress } from "../config";
import Web3Modal from "web3modal";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import axios from "axios";
import MainLoading from "../components/Loading/MainLoading";
import { useEffect, useState } from "react";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://polygon-mumbai.infura.io/v3/2cb5d0cb03904693a567e500288259a2"
    // );
    const provider = new ethers.providers.Web3Provider(ethereum);
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );

    const data = await marketContract.fetchMarketItems();

    console.log("I am here.");
    console.log(data);

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoading(false);
  };

  const buyNFT = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft,
      tokenId,
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNFTs();
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <MainLoading />
      </div>
    );
  }

  return (
    <div className="xl:px-28 md:px-8 px-5">
      <Head>
        <title>dBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-white h-96 bg-HeroImg mb-10 flex flex-col items-center justify-center space-y-4 my-5 rounded-lg shadow-lg shadow-neutral-800"
      >
        <h1 className="font-extrabold md:text-9xl text-6xl font-Mont drop-shadow-xl shadow-white">
          NFT
        </h1>
        <h1 className="font-extrabold drop-shadow-xl font-Mont shadow-white md:text-8xl text-6xl">
          MarketPlace
        </h1>
      </motion.div>
      {!nfts.length ? (
        <h1 className="m-3 text-center font-bold text-2xl text-neutral-500">
          No NFTs found
        </h1>
      ) : (
        <TopCollections />
      )}
    </div>
  );
}
