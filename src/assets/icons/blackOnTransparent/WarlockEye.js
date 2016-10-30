import React from 'react';

export default function WarlockEye({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 16l-32 112 32 32 32-32-32-112zM64 96l32 80 64 16-96-96zm384 0l-96 96 64-16 32-80zm-192 80l-64 48-128 32c80 16 128 96 192 128 64-32 112.476-110.213 192-128l-128-28.31L256 176zm-39.512 52.682l28.342 8.863-7.45 20.955L256 310.895l18.62-52.395-7.45-20.955 28.342-8.863c14.923 10.97 24.488 28.03 24.488 47.283C320 309.237 291.47 336 256 336s-64-26.763-64-60.035c0-19.254 9.565-36.314 24.488-47.283zM96 336l-64 48-16 64 32-32 64-48s-16-27.61-16-32zm320 0l-16 32 64 48 32 32-16-64-64-48zm-272 64l-16 64 48-48-32-16zm112 0l-48 16 48 80 48-80-48-16zm112 0l-32 16 48 48-16-64z"/>
</svg>

  );
}

WarlockEye.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
