import React from "react";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className=" text-center mt-20">
      <div>
        <h2 className="lg:text-7xl text-5xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>
          Apps
        </h2>
        <p className="text-[#627382] text-[20px] mt-4 mb-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="space-x-4 mb-10 flex justify-center">
          <div className=" w-48 h-14 px-6 py-3 flex items-center border border-[#D2D2D2] ">
            <img className="h-8 w-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s"
              alt=""
            />
            <a className=" text-[20px] font-semibold" href="">Google Play</a>
          </div>
          <div className="w-48 h-14 px-6 py-3 flex items-center border border-[#D2D2D2] gap-3">
            <img className="h-7 w-7" src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png" alt="" />
            <a className=" text-[20px] font-semibold" href="">App Store</a>
          </div>

        </div>
      </div>
      <div className="flex justify-center">
        <img src={hero} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9F62F2] p-20 text-white">
        <h2 className="text-5xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="lg:flex flex-1 justify-center gap-50">
          <div className="space-y-4">
            <p>Total Downloads</p>
            <h3 className="font-extrabold text-6xl">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-4">
            <p>Total Reviews</p>
            <h3 className="font-extrabold text-6xl">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div className="space-y-4">
            <p>Active Apps</p>
            <h3 className="font-extrabold text-6xl">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
