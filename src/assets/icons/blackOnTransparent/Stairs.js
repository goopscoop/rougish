import React from 'react';

export default function Stairs({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M64 448v-64h64v-64h64v-64h64v-64h64v-64h64V64h64v384z" />
</svg>


  );
}

Stairs.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
