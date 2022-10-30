import React from "react";
import Collection from "./Collection";

function TopCollections() {
  return (
    <div className="px-10">
      <h1 className="font-bold text-3xl mb-5">Top Collections</h1>
      <div className="">
        <div className="font-bold mb-2 flex justify-between text-xs text-slate-400">
          <h1>COLLECTION</h1>
          <h1>VOLUME</h1>
        </div>
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
}

export default TopCollections;
