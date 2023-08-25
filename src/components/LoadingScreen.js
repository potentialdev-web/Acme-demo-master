import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import LoadingImg from '../assets/img/loading.svg';

const LoadingScreen = () => {

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="loading">
      <img src={LoadingImg} alt="loading" />
    </div>
  );
};

export default LoadingScreen;
