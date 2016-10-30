import React from 'react';

export default function SmashArrows({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M121.068 15.52v339.31H20.54L121.07 497.346h77.385l-47.49-149.364h50.225V15.52h-80.12zm98.81 0v351.15h-43.362l41.547 130.676h80.36l41.548-130.676h-43.36V15.52h-76.733zm95.42 0v332.462h50.223l-47.487 149.364H391.3L491.823 354.83H391.3V15.52h-76z"/>
</svg>

  );
}

SmashArrows.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}