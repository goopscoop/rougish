import React from 'react';

export default function CardboardBox({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M185.424 52.607L30.404 130.04l55.375 55.317 155.017-77.43-55.373-55.32zm141.152 0l-55.373 55.32 155.018 77.43 55.376-55.316-155.02-77.433zM256 120.45l-9 4.497v142.715l9 4.496 9-4.496V124.947l-9-4.496zM86.482 207.605l-57.59 71.917 139.545 77.45 72.358-72.286-154.313-77.08zm339.036 0l-154.313 77.08 72.358 72.287 139.544-77.45-57.59-71.916zM247 303.93l-75.436 75.36-78.562-43.6v44.058L247 456.67V303.93zm18 0v152.74l153.998-76.922v-44.06l-78.562 43.603L265 303.93z"/>
</svg>

  );
}

CardboardBox.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
