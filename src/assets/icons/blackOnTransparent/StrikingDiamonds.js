import React from 'react';

export default function StrikingDiamonds({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M30.875 36.063L88.25 300.625 202.406 400.97l24.688-76.814L30.874 36.062zm102 42.343L333.72 198.344l96.374 2.375-46.78-68.345-250.44-53.97zm3.5 42.28l202 284.595 149.5 78.626L440.78 365.78 136.376 120.69z"  fillRule="evenodd"/>
</svg>

  );
}

StrikingDiamonds.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
