import React from 'react';

export default function Robe({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M255.563 19.313c-8.59.207-18.054 4.34-28.22 12.906L153.75 137.874l77.625 36.75-35.25-31.906c49.398-102.846 72.005-100.992 117.78 0l-34.842 31.56 77.343-36.405-73.78-105.906c-9.694-9.432-18.4-12.867-27.063-12.657zm82.593 147.812L258.75 204.5l-4 1.875-3.97-1.875-76.56-36.25L69.343 291.094l18.75 14.125 66.03 15.06 28.94-118.217 17.217 8.156-69.53 283.905h92.906l15.594-265.47 15.594 7.376 17.75-8.374 15.656 266.47h92.906l-69.75-284.72 17.25-8.125 29.22 119.25 71.687-16.405L444 291.095l-105.844-123.97zM103.094 327.813c-1.266 3.364-1.97 7.008-1.97 10.812 0 16.984 13.767 30.75 30.75 30.75 3.754 0 7.363-.676 10.69-1.906l7.092-29.033-46.562-10.625zm306.812 0l-47.562 10.875 6.906 28.28c3.65 1.534 7.665 2.407 11.875 2.407 16.984 0 30.75-13.766 30.75-30.75 0-3.81-.706-7.448-1.97-10.813z" />
</svg>

  );
}

Robe.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}