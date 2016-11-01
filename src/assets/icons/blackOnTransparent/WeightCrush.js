import React from 'react';

export default function WeightCrush({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16c-41.42 0-75 33.58-75 75 0 17.06 5.874 32.398 15.468 45H136L46 346h420l-90-210h-60.468C325.127 123.398 331 108.06 331 91c0-41.42-33.58-75-75-75zm0 30c24.854 0 45 20.146 45 45 0 24.853-20.146 45-45 45s-45-20.147-45-45c0-24.854 20.146-45 45-45zm-4.218 330A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-64.218-60z" />
</svg>


  );
}

WeightCrush.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
