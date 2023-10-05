"use client";
import React, { useState, useEffect, useRef } from "react";
import LikeIcon from "../assets/icons/LikeIcon";
import ShuffleIcon from "../assets/icons/ShuffleIcon";
import PlayBackIcon from "../assets/icons/PlayBackIcon";
import PlayForwardIcon from "../assets/icons/PlayForwardIcon";
import RepeatIcon from "../assets/icons/RepeatIcon";
import { Icon } from "@iconify/react";
import { playList } from "../../public/playList";

const MusicRender = () => {
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(7);
  const totalIndex = playList.length - 1;
  const audioSource = playList[currentIndex].path;

  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleAudioEnd = () => {
      if (isRepeat) {
        audioElement.currentTime = 0;
        audioElement.play();
      } else if (isShuffle) {
        const randomIndex = getRandomIndex(currentIndex, totalIndex);
        setCurrentIndex(randomIndex);
        audioElement.play();
      } else {
        const nextIndex = (currentIndex + 1) % playList.length;
        setCurrentIndex(nextIndex);
        audioElement.play();
      }
    };

    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, [currentIndex, isRepeat, isShuffle, totalIndex]);

  const handlePlay = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayBack = () => {
    const audioElement = audioRef.current;
    if (isShuffle) {
      // When isShuffle = true, select a new random index
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
    } else {
      // Decrease currentIndex by 1 if Shuffle is not used
      const prevIndex = (currentIndex - 1 + playList.length) % playList.length;
      setCurrentIndex(prevIndex);
      audioElement.src = playList[prevIndex].path;
    }
    setIsPlaying(true);
    audioElement.play();
  };

  const handlePlayForward = () => {
    const audioElement = audioRef.current;
    if (isShuffle) {
      // When isShuffle = true, select a new random index
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
    } else {
      // Increase currentIndex by 1 if Shuffle is not used
      const nextIndex = (currentIndex + 1) % playList.length;
      setCurrentIndex(nextIndex);
      audioElement.src = playList[nextIndex].path;
    }
    setIsPlaying(true);

    audioElement.play();
  };

  const handleShuffleClick = () => {
    setIsShuffle(!isShuffle);
    if (!isShuffle) {
      setIsRepeat(false);
    }
  };

  const handleRepeatClick = () => {
    setIsRepeat(!isRepeat);
    if (!isRepeat) {
      setIsShuffle(false);
    }
  };

  const getRandomIndex = (currentIndex, totalIndex) => {
    let randomIndex = Math.floor(Math.random() * (totalIndex + 1));
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * (totalIndex + 1));
    }
    return randomIndex;
  };

  return (
    <React.Fragment className="flex flex-col justify-between items-center">
      <div
        style={{
          backgroundImage: `url(${playList[currentIndex].img})`,
          transform: isPlaying ? "rotate(360deg)" : "",
          transition: isPlaying ? "transform 10s linear" : "none",
        }}
        className="w-[270px] h-[270px] rounded-full bg-[#fea5af3c] bg-cover "
      ></div>
      <div className="w-full min-h-[105px] flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-white font-bold text-3xl">
            {playList[currentIndex].name}
          </h2>
          <p className="text-[#fea5af87]  font-normal text-2xl">
            {playList[currentIndex].singer}
          </p>
        </div>
        <button>
          <LikeIcon />
        </button>
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
      <audio ref={audioRef} className="audio-element">
        <source src={audioSource}></source>
      </audio>

      <div className="w-full flex items-center justify-between">
        <button onClick={handleShuffleClick}>
          <ShuffleIcon color={isShuffle ? "#801166" : "#67676740"} />
        </button>
        <button onClick={handlePlayBack}>
          <PlayBackIcon />
        </button>
        <button onClick={handlePlay}>
          <Icon
            icon={isPlaying ? "gridicons:pause" : "gridicons:play"}
            color="#fea5b0"
            width="80"
            height="80"
            className="cursor-pointer"
          />
        </button>
        <button onClick={handlePlayForward}>
          <PlayForwardIcon />
        </button>
        <button onClick={handleRepeatClick}>
          <RepeatIcon color={isRepeat ? "#801166" : "#67676740"} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default MusicRender;
