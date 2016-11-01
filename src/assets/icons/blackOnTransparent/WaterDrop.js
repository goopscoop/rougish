import React from 'react';

export default function WaterDrop({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z" />
</svg>


  );
}

WaterDrop.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
