import React from 'react';

export default function Shield({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16c25 24 100 72 150 72v96c0 96-75 240-150 312-75-72-150-216-150-312V88c50 0 125-48 150-72z" />
</svg>


  );
}

Shield.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
