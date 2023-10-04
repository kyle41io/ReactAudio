"use client";
import React, { useState, useEffect, useRef } from "react";
import LikeIcon from "../assets/icons/LikeIcon";
import ShuffleIcon from "../assets/icons/ShuffleIcon";
import PlayBackIcon from "../assets/icons/PlayBackIcon";
import PlayForwardIcon from "../assets/icons/PlayForwardIcon";
import RepeatIcon from "../assets/icons/RepeatIcon";
import { Icon } from "@iconify/react";
import { playList } from "../data/playList";

const MusicRender = () => {
  // const [isShuffle, setIsShuffle] = useState(false);
  // const [isRepeat, setIsRepeat] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const totalIndex = playList.length - 1;
  // const audioRef = useRef(null);

  // const handleShuffleClick = () => {
  //   setIsShuffle(!isShuffle);
  //   if (!isShuffle) {
  //     setIsRepeat(false);
  //   }
  // };

  // const handleRepeatClick = () => {
  //   setIsRepeat(!isRepeat);
  //   if (!isRepeat) {
  //     setIsShuffle(false);
  //   }
  // };

  // // Xử lý handlePlay
  // const handlePlay = () => {
  //   if (isPlaying) {
  //     document.getElementById("audio").pause();
  //     setIsPlaying(false);
  //   } else {
  //     document.getElementById("audio").play();
  //     setIsPlaying(true);
  //   }
  // };

  // // Xử lý handlePlayBack
  // const handlePlayBack = () => {
  //   if (isShuffle) {
  //     // Khi isShuffle=true thì khi click vào button chứa handlePlayBack, biến currentIndex sẽ được xét giá trị random mới từ 0 đến totalIndex (trừ giá trị currentIndex đang có hiện tại) và audio sẽ play.
  //     setCurrentIndex(
  //       Math.floor(Math.random() * (totalIndex - currentIndex)) + currentIndex
  //     );
  //   } else if (isRepeat) {
  //     // Khi isRepeat=true thì khi click vào button chứa handlePlayBack, biến currentIndex sẽ được xét giá trị như hiện tại và audio sẽ play.
  //     setCurrentIndex(currentIndex);
  //   } else {
  //     // Khi cả isShuffle và isRepeat đều false thì khi click button chứa handlePlayBack, biến currentIndex sẽ trừ đi 1 và audio sẽ play.
  //     setCurrentIndex(currentIndex - 1);
  //   }

  //   handlePlay();
  // };

  // // Xử lý handlePlayForward
  // const handlePlayForward = () => {
  //   if (isShuffle) {
  //     // Khi isShuffle=true thì khi click vào button chứa handlePlayForward, biến currentIndex sẽ được xét giá trị random mới từ 0 đến totalIndex (trừ giá trị currentIndex đang có hiện tại) và audio sẽ play.
  //     setCurrentIndex(
  //       Math.floor(Math.random() * (totalIndex - currentIndex)) +
  //         currentIndex +
  //         1
  //     );
  //   } else if (isRepeat) {
  //     // Khi isRepeat=true thì khi click vào button chứa handlePlayForward, biến currentIndex sẽ được xét giá trị như hiện tại và audio sẽ play.
  //     setCurrentIndex(currentIndex);
  //   } else {
  //     // Khi cả isShuffle và isRepeat đều false thì khi click button chứa handlePlayForward, biến currentIndex sẽ cộng thêm 1 và audio sẽ play.
  //     setCurrentIndex(currentIndex + 1);
  //   }

  //   handlePlay();
  // };

  // // Xử lý khi audio kết thúc
  // useEffect(() => {
  //   if (isPlaying) {
  //     document.getElementById("audio").addEventListener("ended", () => {
  //       if (isShuffle) {
  //         setCurrentIndex(
  //           Math.floor(Math.random() * (totalIndex - currentIndex)) +
  //             currentIndex
  //         );
  //       } else if (isRepeat) {
  //         setCurrentIndex(currentIndex);
  //       } else {
  //         setCurrentIndex(currentIndex + 1);
  //       }

  //       handlePlay();
  //     });
  //   }
  // }, [isPlaying, isShuffle, isRepeat, currentIndex]);

  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndex = playList.length - 1;
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Handling audio end event
    const handleAudioEnd = () => {
      if (isRepeat) {
        // When isRepeat = true, play audio from the beginning
        audio.currentTime = 0;
        audio.play();
      } else if (isShuffle) {
        // When isShuffle = true, select a new random index
        const randomIndex = getRandomIndex(currentIndex, totalIndex);
        setCurrentIndex(randomIndex);
        audio.src = playList[randomIndex].path;
        audio.play();
      } else {
        // When both isShuffle and isRepeat are false, move to the next song
        const nextIndex = (currentIndex + 1) % playList.length;
        setCurrentIndex(nextIndex);
        audio.src = playList[nextIndex].path;
        audio.play();
      }
    };

    // Add event listener for audio end
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      // Clean up the event listener when the component unmounts
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [currentIndex, isRepeat, isShuffle, totalIndex]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      // Pause audio if it's playing
      audio.pause();
    } else {
      // Play audio if it's paused
      audio.play();
    }
    // Toggle isPlaying state
    setIsPlaying(!isPlaying);
  };

  const handlePlayBack = () => {
    const audio = audioRef.current;
    if (isShuffle) {
      // When isShuffle = true, select a new random index
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
      audio.src = playList[randomIndex].path;
    } else {
      // Decrease currentIndex by 1 if Shuffle is not used
      const prevIndex = (currentIndex - 1 + playList.length) % playList.length;
      setCurrentIndex(prevIndex);
      audio.src = playList[prevIndex].path;
    }
    audio.play();
  };

  const handlePlayForward = () => {
    const audio = audioRef.current;
    if (isShuffle) {
      // When isShuffle = true, select a new random index
      const randomIndex = getRandomIndex(currentIndex, totalIndex);
      setCurrentIndex(randomIndex);
      audio.src = playList[randomIndex].path;
    } else {
      // Increase currentIndex by 1 if Shuffle is not used
      const nextIndex = (currentIndex + 1) % playList.length;
      setCurrentIndex(nextIndex);
      audio.src = playList[nextIndex].path;
    }
    audio.play();
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
        style={{ backgroundImage: `url(${playList[currentIndex].img})` }}
        className="w-[270px] h-[270px] rounded-full bg-[#fea5af3c] bg-cover "
      ></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-center">
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
      <audio
        ref={audioRef}
        id="audio"
        src={`${playList[currentIndex].path}`}
      ></audio>
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
        <button onClick={handleShuffleClick}>
          <ShuffleIcon color={isShuffle ? "#801166" : "#67676740"} />
        </button>
        <button onClick={handlePlayBack}>
          <PlayBackIcon />
        </button>
        <button onClick={handlePlay}>
          <Icon
            icon="gridicons:play"
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
