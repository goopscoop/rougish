import React from 'react';

export default function FallDown({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M257.75 16.03A60 60 0 0 0 196 76a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97zM250.72 166c-24.72.11-24.72 1.875-24.72 30v210h-60l90 90 90-90h-60V196c0-30 0-30-30-30-1.875 0-3.633-.007-5.28 0z" />
</svg>


  );
}

FallDown.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
