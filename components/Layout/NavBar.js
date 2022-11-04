import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";

function NavBar() {
  return (
    <div className="bg-neutral-800 h-14 top-0 flex p-2 items-center justify-center xl:px-28 md:px-8 px-5">
      <h1 className="text-pink-500 font-bold text-2xl">dBank</h1>
      <div className="bg-neutral-900 hidden sm:flex h-10 flex-1 mx-10 rounded-lg items-center px-3">
        <BiSearch className="h-7 w-7 text-slate-400" />
        <TbMinusVertical className="h-9 w-9 text-slate-400" />
        <input
          className="bg-transparent flex-1 outline-none text-slate-100 font-bold"
          placeholder="search..."
        ></input>
      </div>
      <div className="items-center space-x-5 hidden sm:flex">
        <Link href="/explore">
          <a className="font-bold">Explore</a>
        </Link>
        <Link href="/create">
          <a className="font-bold">Create</a>
        </Link>
        <div className="h-10 w-10 rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
}

export default NavBar;
