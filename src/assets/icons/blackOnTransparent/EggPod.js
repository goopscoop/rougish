import React from 'react';

export default function EggPod({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16c-67.5 0-105 120-105 210 0 45 45 90 105 90s105-45 105-90c0-90-37.5-210-105-210zM136 271c0 90 45 75 45 135 0 90-75 60-75 90h300c0-30-75 0-75-90 0-60 45-45 45-135-90 105-150 105-240 0z" />
</svg>


  );
}

EggPod.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
