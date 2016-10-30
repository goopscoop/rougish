import React from 'react';

export default function RibbonMedal({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256.883 29.7L241.11 51.554l-23-14.06-6.202 26.224-26.63-4.193 4.308 26.604-26.21 6.317 14.165 22.93-21.794 15.86L177.61 147l-14.065 22.992 26.234 6.2-4.194 26.624 26.613-4.308 6.316 26.2 22.937-14.16 15.865 21.788 15.772-21.856 23 14.06 4.283-18.11 1.92-8.116 26.633 4.194-4.31-26.606 26.21-6.314-14.166-22.928 21.797-15.86-21.863-15.767 14.064-22.992-26.234-6.2 4.19-26.624-26.61 4.307-6.318-26.2-22.936 14.16-15.867-21.788zm-.252 51.68a49.657 49.64 0 0 1 49.657 49.64 49.657 49.64 0 0 1-49.656 49.638 49.657 49.64 0 0 1-49.655-49.638 49.657 49.64 0 0 1 49.656-49.64zm59.345 137.308l-8.082 34.164-29.96-18.315-9.747 13.504c11.734 82.04 18.1 163.835 54.654 247l16.553-66.185c10.51 13.815 27.52 26.056 49.656 33.092-31.075-77.557-42.77-158.987-54.714-240.37l-18.36-2.89zm-117.37.253l-19.76 3.2c-11.916 81.194-23.63 162.428-54.632 239.807 22.136-7.036 39.147-19.277 49.658-33.092l16.552 66.186c36.794-83.71 43.005-166.034 54.89-248.614l-8.595-11.8-29.88 18.442-8.232-34.127z"/>
</svg>

  );
}

RibbonMedal.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
