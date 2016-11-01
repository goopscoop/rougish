import React from 'react';

export default function Tombstone({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 46c-81.822 0-150 63.366-150 150v150c0 6.668-.757 23.558 0 30h300c.757-6.442 0-23.332 0-30V196c0-86.634-68.178-150-150-150zM16 406v60h480v-60H16z" />
</svg>


  );
}

Tombstone.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
