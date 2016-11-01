import React from 'react';

export default function Electric({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M376 211H256V16L136 301h120v195z" />
</svg>

  );
}

Electric.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
