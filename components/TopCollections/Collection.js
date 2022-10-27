import React from "react";

function Collection() {
  return (
    <div className="flex justify-between my-4 items-center border-b border-neutral-700 pb-1">
      <div className="flex space-x-2 items-center">
        <h1 className="font-extrabold text-xl mr-3">1</h1>
        <div className="flex items-center">
          <img
            className="h-14 mr-1 w-14 rounded-full"
            src="https://www.github.com/VishwanthBarma.png"
          ></img>
          <div>
            <h1 className="font-bold">Vishwanth Barma</h1>
            <h1 className="text-slate-300 text-xs font-bold">sold</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center align-super">
        <h1 className="text-xl font-bold">1200$</h1>
        <h1 className="text-rose-500 font-semibold">+32.00</h1>
      </div>
    </div>
  );
}

export default Collection;
