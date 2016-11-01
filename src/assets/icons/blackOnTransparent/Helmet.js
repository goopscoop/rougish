import React from 'react';

export default function Helmet({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 76C123.45 76 16 183.452 16 316c0 43.716 11.453 84.698 31.875 120H196l31.875-64.688C191.868 359.546 166 325.938 166 286c0-49.706 40.294-90 90-90s90 40.294 90 90v30h150c0-132.548-107.45-240-240-240zm-4.218 150A60 60 0 0 0 196 286a60 60 0 0 0 120 0 60 60 0 0 0-64.218-60z" />
</svg>


  );
}

Helmet.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}