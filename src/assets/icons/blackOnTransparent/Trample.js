import React from 'react';

export default function Trample({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M136 16h15l15 15 15-15h150l15 15 15-15h15v120h-15l-15-15-15 15h-45v345c0 15-15 15-15 15h-30s-15 0-15-15V136h-45l-15-15-15 15h-15z" />
</svg>


  );
}

Trample.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
