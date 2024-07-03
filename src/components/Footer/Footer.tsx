import * as React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Icon from "../Icon";
import Link from "next/link";

function Footer() {
  return (
    <footer className="my-10 py-6 md:flex md:justify-between">
      <div>
        <Link href="/" className="flex gap-1 items-end">
          <Image
            src={logo}
            alt="our Logo"
            width={38}
            height={38}
            className="block"
          />
          <span className="font-bold text-4xl mt-3 uppercase ">Fit</span>
        </Link>
        <p className="text-sm md:text-xl font-medium mt-7">
          Fit is the home you’ve been searching for.
        </p>
      </div>
      <div className="flex gap-6 items-center flex-wrap my-6 md:my-0">
        <span className="block p-5 rounded-lg bg-primary w-fit">
          <Icon
            name="facebook"
            className="text-white bg-primary w-8 h-8 hover:bg-primary/85 transition-colors cursor-pointer"
          />
        </span>
        <span className="block p-5 rounded-lg bg-primary w-fit">
          <Icon
            name="instagram"
            className="text-white bg-primary w-8 h-8 hover:bg-primary/85 transition-colors cursor-pointer"
          />
        </span>
        <span className="block p-5 rounded-lg bg-primary w-fit">
          <Icon
            name="twitter"
            className="text-white bg-primary w-8 h-8 hover:bg-primary/85 transition-colors cursor-pointer"
          />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
