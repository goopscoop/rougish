import React from 'react';

export default function Trident({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M17.156 16.438v41.656L192.78 234.22l-51.436 51.405-11.97 12L140.782 309l106.69 106.688-24.532 24.53 125.75 53.844-53.875-125.718-23.407 23.406-94.72-94.72 48.44-48.436 135.78 135.75-23.97 23.937 125.72 53.876-53.844-125.72-23.968 23.97-135.78-135.75 48.467-48.47 94.72 94.72-23.375 23.406 125.72 53.844-53.876-125.72-24.533 24.533L309.5 140.28l-11.406-11.374-11.97 11.97-51.468 51.436L58.812 16.438H17.157z" />
</svg>

  );
}

Trident.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}