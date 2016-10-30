import React from 'react';

export default function SevenPointedStar({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 22.017l-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z"/>
</svg>

  );
}

SevenPointedStar.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
