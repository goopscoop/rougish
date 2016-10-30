import React from 'react';

export default function Charm({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M146.47 21.594c-19.843.39-40.255 13.992-46.94 38.937-36.28-36.277-90.65-8.066-79 41.595 11.826 50.403 99.55 64.537 114.25 90 0-32.133 66.5-82.522 54.19-135.125-5.728-24.468-23.862-35.773-42.5-35.406zM237 154.47c-35.243.73-68.834 22.932-79.688 69.31C133.202 326.807 263.438 425.5 263.438 488.44c28.8-49.877 200.592-77.563 223.75-176.282 22.82-97.274-83.624-152.5-154.687-81.437-13.49-50.343-55.558-77.08-95.5-76.25z" />
</svg>

  );
}

Charm.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}