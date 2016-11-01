import React from 'react';

export default function Revolt({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M106 145.23c0-36.923 37.5-36.923 37.5-36.923s-18.75-23.163-18.75-36.922c0-13.76 0-18.462 18.75-36.922C162.25 16 162.25 16 181 16h150c18.75 0 42.22 19.56 56.25 36.923C398.26 66.556 406 89.845 406 101.813c0 61.88-50.018 178.424-50.018 178.424l6.137 215.197-203.352.566L181 274.46l-37.5-36.922c-18.75-18.462-37.5-36.924-37.5-55.384z" />
</svg>


  );
}

Revolt.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}