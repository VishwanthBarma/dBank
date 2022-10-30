import Head from "next/head";
import { motion } from "framer-motion";
import TopCollections from "../components/TopCollections/TopCollections";
import { ethers } from "ethers";
import { nftaddress, nftmarketaddress } from "../config";
import { Interface } from "ethers/lib/utils";

export default function Home() {
  return (
    <div>
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
        className="bg-white h-96 bg-HeroImg mb-10 flex flex-col items-center justify-center space-y-4 m-5 rounded-lg shadow-lg shadow-neutral-800"
      >
        <h1 className="font-extrabold text-9xl font-Mont drop-shadow-xl shadow-white">
          NFT
        </h1>
        <h1 className="font-extrabold drop-shadow-xl font-Mont shadow-white text-8xl">
          MarketPlace
        </h1>
      </motion.div>
      <TopCollections />
    </div>
  );
}
