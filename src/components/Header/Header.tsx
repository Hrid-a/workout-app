import * as React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex py-5 items-center">
      <Link href="/" className="flex gap-1 items-end">
        <Image
          src={logo}
          alt="our Logo"
          width={38}
          height={38}
          className="block"
        />
        <h1 className="font-bold text-4xl mt-3 uppercase ">Fit</h1>
      </Link>
      <div className="ml-auto flex">
        <button className="bg-primary px-4 py-3 text-center text-xl text-white rounded-lg hover:bg-primary/80 transition-colors capitalize">
          sign in
        </button>
        <button className="hidden sm:block bg-primary px-4 py-3 text-center text-xl text-white ml-3 rounded-lg hover:bg-primary/80 transition-colors capitalize">
          {" "}
          sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
