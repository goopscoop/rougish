import React from 'react';

export default function Ermine({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 24l-32 64 32 48 32-48-32-64zm-64 96l-64 32 64 32 48-32-48-32zm128 0l-48 32 48 32 64-32-64-32zm-64 32c-32 128-64 192-128 256 16 0 48 0 64-16 0 16-16 48-32 64 16 0 48 0 64-16 16 16 16 16 32 48 16-32 16-32 32-48 16.847 12.064 48 16 64 16-16-16-32-48-32-64 16 16 48 16 64 16-64-64-96-128-128-256z"/>
</svg>

  );
}

Ermine.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
