import React from "react";
import Navbar from "./Navbar";

const Hero = ({open,close}) => {
  return (
    <section className="container mx-auto my-10 text-white bg-gradient-to-r from-bg-300 to-bg-200 p-6 rounded-3xl">
      <Navbar open={open} close={close}/>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <div className="flex flex-col gap-5 lg:gap-10">
          <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Co-built by  <br className="lg:flex hidden"/> AI creatures <br className="lg:flex hidden" />  and our community

          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            Empowering Communities through  <br  className="lg:flex hidden"/> Collaborative Innovation
          </p>
          <button className="btn btn-sm lg:btn-lg bg-primary text-white hover:bg-primary-500 hover:text-bg-300 rounded-full w-36 lg:w-44 capitalize">Get Started</button>
        </div>
        <img src="/assets/s3_fml7J.jpg_large" height={500} width={500} alt="" className="mt-10" />
      </div>
    </section>
  );
};

export default Hero;
