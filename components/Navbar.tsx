"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MdQuiz } from "react-icons/md";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="pt-5">
      <div className="max-w-[1500px] mx-auto w-[90%] flex justify-between items-center border-b pb-5">
        <div>
          <Link 
            href={"/"}
            className="flex gap-1 items-center"
          >
            <h1 className="text-2xl text-dark font-bold">
              CodeQuiz
            </h1>
            <MdQuiz className="text-primary" />
          </Link>
        </div>

        <div className="md:block hidden text-nowrap items-center">
          <span className="bg-primary px-5 py-1 rounded-md text-white">
            Today's Category: Javascript
          </span>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <UserMenu />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
