import React from 'react';

export default function BigEgg({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16C166 16 76 196 76 316c0 90 60 180 180 180s180-90 180-180c0-120-90-300-180-300z" />
</svg>

  );
}

BigEgg.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
