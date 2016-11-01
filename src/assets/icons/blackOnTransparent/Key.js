import React from 'react';

export default function Key({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M226.878 16v243.274a120.023 120.023 0 0 0 30 236.71 119.996 119.996 0 0 0 29.998-236.242v-93.747h59.998v-44.998h-59.998v-45h89.997V16H226.878zm25.312 299.99a60.01 60.01 0 0 1 2.343 0 59.998 59.998 0 0 1 2.343 0 59.998 59.998 0 0 1 0 119.996 60.044 60.044 0 0 1-4.688-119.996z" />
</svg>


  );
}

Key.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
