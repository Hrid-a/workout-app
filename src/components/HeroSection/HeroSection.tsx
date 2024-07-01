import Image from "next/image";
import * as React from "react";
import icon from "../../../public/Icon.svg";
import image from "../../../public/Image2.svg";
import coach from "../../../public/Image3.svg";
import heroImage from "../../../public/hero-image.svg";
import heroImg from "../../../public/hero-img.svg";

function HeroSection() {
  return (
    <section className="mt-20 mb-10 grid lg:grid-cols-2 gap-7">
      <article className="max-w-[650px] self-center">
        <span className="flex">
          <Image src={icon} alt="" width={30} height={30} />
          <span className="ml-1 text-primary text-xl capitalize">
            transform your life
          </span>
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-primary my-6">
          Unleash Your Potential at Fit Gym{" "}
        </h2>
        <p className="text-primary text-xl">
          Welcome to Fit Gym, where we believe that fitness is not just a
          destination, but a transformative journey. Whether you&apos;re a
          seasoned athlete or new to the fitness world, our state-of-the-art
          facility and expert trainers are here to help you unlock your full
          potential and achieve your health.
        </p>
        <div className="mt-12">
          <p>Join Us Today and Get change your life!</p>
          <button className="bg-primary text-white px-5 py-2 rounded-lg mt-4 text-xl tracking-[4px] hover:bg-primary/80">
            Join Now
          </button>
        </div>
      </article>
      <article className="lg:ml-auto grid grid-cols-2 gap-4">
        <Image src={heroImage} alt="" width={500} height={500} />
        <Image src={heroImg} alt="" width={500} height={500} />
        <Image src={image} alt="" width={500} height={500} />
        <Image src={coach} alt="" width={500} height={500} />
      </article>
    </section>
  );
}

export default HeroSection;
