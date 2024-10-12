"use client"
import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors: {
    0: "#FFC107",
    0.5: "#FFC107",
    1: "#FFC107",
  },
  shadowBlur: 20,
});

const FullScreenLoader = () => {
  return (
    <div>
      <TopBarProgress />
    </div>
  );
};

export default FullScreenLoader;
