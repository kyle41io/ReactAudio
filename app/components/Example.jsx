"use client";
import React, { useState } from "react";
import PlayBackIcon from "../assets/icons/PlayBackIcon";
import PlayForwardIcon from "../assets/icons/PlayForwardIcon";

const Example = () => {
  const [progress, setProgress] = useState(0);

  const handlePlayBack = () => {
    setProgress(0);
  };

  const handlePlayForward = () => {
    setProgress(0);
  };
  return (
    <div>
      <button onClick={handlePlayBack}>
        <PlayBackIcon />
      </button>
      <input
        id="progress"
        className="w-11/12 accent-pink-500 cursor-pointer mb-2"
        type="range"
        value={progress}
        step="1"
        min="0"
        max="100"
        onChange={(e) => {
          const newProgress = parseInt(e.target.value);
          setProgress(newProgress);
        }}
      />
      <button onClick={handlePlayForward}>
        <PlayForwardIcon />
      </button>
    </div>
  );
};

export default Example;
