import React from 'react';

export default function Pounce({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M196 16l60 60 60-60H196zm-30 90l90 90 90-90H166zm-30 120l120 120 120-120H136zm121.75 150.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z" />
</svg>


  );
}

Pounce.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
