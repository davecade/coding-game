import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../Utilities/Lottie/loading-animation.json';

const LottieControl = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={30} width={30} />
    </div>
  );
};

export default LottieControl;
