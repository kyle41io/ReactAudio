import React from "react";
import DropIcon from "../assets/icons/DropIcon";
import ThreeDotsIcon from "../assets/icons/ThreeDotsIcon";
import { IconDevices2 } from "@tabler/icons-react";
import ShareIcon from "../assets/icons/ShareIcon";
import PlayListIcon from "../assets/icons/PlayListIcon";
import MusicRender from "./MusicRender";

const MusicPlayer = () => {
  return (
    <div
      className="w-[430px] h-[932px] mt-[87px] absolute z-10 flex flex-col items-center justify-between bg-[#430020] rounded-3xl bg-[url('../assets/icons/Rectangle 5.png')]"
      style={{ boxShadow: "8px 8px 24px 0px rgba(0, 0, 0, 0.50)" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-between px-5">
        <section className="w-full flex items-center justify-between mt-8 ">
          <DropIcon />
          <h1 className="text-[#F5F5F5] text-bold text-xl">English Songs</h1>
          <ThreeDotsIcon />
        </section>
        <MusicRender />
        <section className="w-full m-5">
          <div className="flex items-center justify-between">
            <IconDevices2
              color="white"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <div className="flex items-center justify-between gap-[26px]">
              <ShareIcon />
              <PlayListIcon />
            </div>
          </div>
        </section>
      </div>

      <div
        className="h-[75px] w-full flex items-center justify-between bg-[#fea5b024] p-5"
        style={{ borderRadius: "60px 60px 0px 0px" }}
      >
        <DropIcon />
        <h1 className="text-white text-bold text-xl -translate-x-1/2">
          Lyrics
        </h1>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MusicPlayer;
