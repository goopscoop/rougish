import React from 'react';

export default function ElectricalCrescent({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M239.172 27.03l-.004.005-66.578 25.697 50.226 2.918-.584 24.53c.726 12.525 5.523 14.74 18.106 12.85l83.516-15.186-56.65 39.13c-19.067 12.847-2.43 27.668 24.53 28.034l112.13 10.512-87.6 33.287c-23.595 8.37-10.043 38.75 12.263 49.642l86.434 39.712-89.94 2.92c-30.218.486-35.565 13.945-15.768 33.873l99.87 96.363-126.15-68.914c-25.672-12.57-41.764-.86-36.208 18.104l22.775 66.578-56.65-59.568c-12.143-13.383-38.997-16.92-40.296.578l-6.424 63.074-19.857-67.746c-3.372-15.715-31.885-25.995-38.545-11.68L79.152 406.64l3.504-65.994c2.903-14.986-8.96-28.388-24.53-14.6L32.43 345.32l-15.184-49.056 2.918 68.914 35.625-9.346 6.425 103.955 58.4-65.992 54.315 97.53 22.777-89.354 110.377 89.352-15.768-95.777 197.397 79.426-124.395-157.685 117.973-19.27-136.075-90.525 121.476-51.392-152.426-43.22 74.17-65.41-147.172 22.194-4.09-42.633zM137.42 91.446c8.008 3.085 15.954 6.974 23.695 11.692 54.57 33.253 78.314 94.91 53.03 137.715-25.28 42.802-90.01 50.54-144.58 17.286-22.038-13.43-39.044-31.49-49.83-51.072 1.372 6.19 3.247 12.407 5.628 18.604 12.02 31.28 36.836 61.6 71.633 82.863 34.798 21.262 72.684 29.257 105.334 25.348 32.65-3.91 59.756-19.373 75.002-45.254 15.247-25.884 15.917-57.697 3.898-88.978-12.018-31.28-36.833-61.6-71.63-82.863-23.506-14.364-48.42-22.668-72.18-25.343z"/>
</svg>

  );
}

ElectricalCrescent.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
