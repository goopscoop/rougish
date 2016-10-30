import React from 'react';

export default function Table({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M41 265v30h430v-30H41zm39 48v158.066h32V313H80zm320 0v158.066h32V313h-32z"/>
</svg>

  );
}

Table.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
