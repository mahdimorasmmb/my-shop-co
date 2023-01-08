import Image from "next/legacy/image";
import React from "react";
import Button from "../../widgets/Button";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] flex-row-reverse items-center justify-between px-8">
      {/* desktop text */}

      <div className=" hidden  flex-col items-center  space-y-10  md:flex">
        <div className="space-y-8">
          <h1 className=" flex  space-x-8 text-5xl font-semibold tracking-wide lg:text-6xl">
            <span className="block"> کاشان</span>
            <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              پدیده{" "}
            </span>
            <span className="block">فرش</span>
          </h1>
        </div>
        <div className="space-x-8 ">
          <a className="heroLink">اطلاعات بیشتر</a>
          <Button title="همین الان خرید کن " />
        </div>
      </div>

      <div>
        <h1 className="  text-5xl font-semibold tracking-wide lg:text-6xl">
          <span className="block"> کاشان</span>
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            پدیده{" "}
          </span>
          <span className="block">فرش</span>
        </h1>
        <div className="space-x-8 ">
          <a className="heroLink">اطلاعات بیشتر</a>
          <Button title="همین الان خرید کن " />
        </div>
      </div>

      <div className=" relative hidden h-[450px] w-[450px]  transition-all md:inline lg:h-[650px] lg:w-[650px]">
        <Image
          layout="fill"
          src="/hero.webp"
          alt="hero-image"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default Landing;
