"use client";
import React from "react";
import LikeIcon from "../assets/icons/LikeIcon";
import ShuffleIcon from "../assets/icons/ShuffleIcon";
import PlayBackIcon from "../assets/icons/PlayBackIcon";
import PlayForwardIcon from "../assets/icons/PlayForwardIcon";
import RepeatIcon from "../assets/icons/RepeatIcon";
import { Icon } from "@iconify/react";
import { playList } from "../data/playList";

const MusicRender = () => {
  return (
    <React.Fragment className="flex flex-col justify-between items-center">
      <div className="w-[270px] h-[270px] rounded-full bg-[#fea5af3c]"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-3xl">No thing</h2>
          <p className="text-[#fea5af87]  font-normal text-2xl">Singer</p>
        </div>
        <LikeIcon />
      </div>
      <div className="w-full flex flex-col items-center">
        <input
          id="progress"
          class="text-white w-[382px] h-2 rounded-lg progress"
          type="range"
          value="0"
          step="1"
          min="0"
          max="100"
        ></input>
        <div className="w-full flex items-center justify-between mt-5 px-3">
          <p className="text-[#fea5af87] text-xl font-medium">1:11</p>
          <p className="text-[#fea5af87] text-xl font-medium">2:22</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <ShuffleIcon />
        <PlayBackIcon />
        <Icon
          icon="gridicons:play"
          color="#fea5b0"
          width="80"
          height="80"
          className="cursor-pointer"
        />
        <PlayForwardIcon />
        <RepeatIcon />
      </div>
    </React.Fragment>
  );
};

export default MusicRender;
