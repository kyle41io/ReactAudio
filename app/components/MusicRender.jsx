"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import LikeIcon from "../assets/icons/LikeIcon";
import ShuffleIcon from "../assets/icons/ShuffleIcon";
import PlayBackIcon from "../assets/icons/PlayBackIcon";
import PlayForwardIcon from "../assets/icons/PlayForwardIcon";
import RepeatIcon from "../assets/icons/RepeatIcon";
import { Icon } from "@iconify/react";
import { useSearchParams } from "next/navigation";

const MusicRender = ({ playList }) => {
  useSearchParams({});
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [durationTime, setDuratonTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndex = playList.length - 1;
  const audioSource = playList[currentIndex].path;

  const audioRef = useRef(null);
  useEffect(() => {
    const element = document.getElementById("musicImage");
    if (isPlaying) {
      element.style.animationPlayState = "running";
    } else {
      element.style.animationPlayState = "paused";
    }
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleAudioEnd = () => {
      const audioElement = audioRef.current;
      if (isRepeat) {
        audioElement.currentTime = 0;
      } else if (isShuffle) {
        const randomIndex = getRandomIndex(currentIndex, totalIndex);
        setCurrentIndex(randomIndex);
        audioElement.src = playList[randomIndex].path;
      } else {
        const nextIndex = (currentIndex + 1) % playList.length;
        setCurrentIndex(nextIndex);
        audioElement.src = playList[nextIndex].path;
      }
      setIsPlaying(true);
      setProgress(0);
      audioElement.play();
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setDuratonTime(audioElement.duration);
      let newProgress = 0;
      if (audioElement.currentTime && audioElement.duration) {
        newProgress = (audioElement.currentTime / audioElement.duration) * 100;
      }

      setProgress(newProgress);
    };

    audioElement.addEventListener("ended", handleAudioEnd);
    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("ended", handleAudioEnd);
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
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
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
    } else {
      const prevIndex = (currentIndex - 1 + playList.length) % playList.length;
      setCurrentIndex(prevIndex);
      audioElement.src = playList[prevIndex].path;
    }
    setIsPlaying(true);
    setProgress(0);
    audioElement.play();
  };

  const handlePlayForward = () => {
    const audioElement = audioRef.current;
    if (isShuffle) {
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
    } else {
      const nextIndex = (currentIndex + 1) % playList.length;
      setCurrentIndex(nextIndex);
      audioElement.src = playList[nextIndex].path;
    }
    setIsPlaying(true);
    setProgress(0);
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return time ? `${formattedMinutes}:${formattedSeconds}` : "--:--";
  };

  const getRandomIndex = (currentIndex, totalIndex) => {
    let randomIndex = Math.floor(Math.random() * (totalIndex + 1));
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * (totalIndex + 1));
    }
    return randomIndex;
  };

  return (
    <div className="w-full h-[75%] flex flex-col justify-between items-center">
      <div className=" flex justify-center items-center w-[270px] h-[270px] rounded-full bg-[#fea5af3c]">
        <div
          id="musicImage"
          style={{
            backgroundImage: `url(${playList[currentIndex].img})`,
          }}
          className={`w-[250px] h-[250px] rounded-full bg-[#fea5af3c] bg-cover rotate-animation`}
        ></div>
      </div>

      <div className="w-full min-h-[105px] flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
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
          className="w-11/12 accent-pink-500 cursor-pointer mb-1"
          type="range"
          value={progress}
          onChange={(e) => {
            const newProgress = parseInt(e.target.value);
            const newTime = (newProgress / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(newProgress);
          }}
        />
        <label htmlFor="progress"></label>
        <div className="w-full flex items-center justify-between mt-5 px-3">
          <p className="text-[#fea5af87] text-xl font-medium">
            {formatTime(currentTime)}
          </p>
          <p className="text-[#fea5af87] text-xl font-medium">
            {formatTime(durationTime)}
          </p>
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
    </div>
  );
};

export default MusicRender;
