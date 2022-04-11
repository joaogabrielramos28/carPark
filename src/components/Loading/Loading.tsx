import React from "react";

import Lottie from "react-lottie";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../../public/5156-parking-find.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default Loading;
