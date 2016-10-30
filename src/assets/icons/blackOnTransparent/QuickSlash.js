import React from 'react';

export default function QuickSlash({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M270.877 444.542C576.857 496.618 318.44 29.007 23.097 25.68 447.57-7.506 696.864 640.745 270.878 444.54z"  fillRule="evenodd"/>
</svg>

  );
}

QuickSlash.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
