import React from 'react';

export default function LevelTwo({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16c-22.5 72-45 72-45 120 0 0 22.5 24 45 24s45-24 45-24c0-48-22.5-48-45-120zm2.625 144.03A90 96 0 0 0 166 256a90 96 0 0 0 180 0 90 96 0 0 0-87.375-95.97zM256 352c-22.5 0-45 24-45 24 0 48 22.5 48 45 120 22.5-72 45-72 45-120 0 0-22.5-24-45-24z" />
</svg>


  );
}

LevelTwo.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
