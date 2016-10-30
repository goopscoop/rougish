import React from 'react';

export default function EdgeCrack({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M117.938 50.5l2.53 99.906 105.313 58.97L117.938 50.5zm260.906 22.594l-97.438 35.97L302.344 280l76.5-206.906zm115.22 78.75L360.154 211.78l67.563 119.75 5.655 10.064-11 3.47-82.063 25.78 57.438 49.25 23.75 20.375-31.03-4-254.22-32.814-35.406-4.562 33.094-13.375 127.187-51.345L173.5 295.03 19.75 363.907v130.656h474.313V151.844zm-357.783 50.47l-96.53 22.655 246.844 72.343-150.313-95z"  fillRule="evenodd"/>
</svg>

  );
}

EdgeCrack.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
