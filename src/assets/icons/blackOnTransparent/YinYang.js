import React from 'react';

export default function YinYang({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 23C127.424 23 23 127.424 23 256s104.424 233 233 233 233-104.424 233-233S384.576 23 256 23zm-6.094 18.09C128.036 47.807 130.066 256 256 256c125.215 0 127.935 205.872 8.168 214.83-2.71.1-5.432.17-8.168.17-118.848 0-215-96.152-215-215 0-116.81 92.883-211.69 208.906-214.91zM256 103c22.537 0 41 18.463 41 41s-18.463 41-41 41-41-18.463-41-41 18.463-41 41-41zm0 224c-22.537 0-41 18.463-41 41s18.463 41 41 41 41-18.463 41-41-18.463-41-41-41z"/>
</svg>

  );
}

YinYang.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
