import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";

function Header({ children }: { children: React.ReactNode }) {
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
      <div className="ml-auto flex gap-4">{children}</div>
    </header>
  );
}

export default Header;
