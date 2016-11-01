import React from 'react';

export default function JetPack({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16C178.857 16 76 192.867 76 268.657c0 25.263 103.128 25.223 180 25.313 76.874.09 180-.046 180-25.313C436 192.867 333.144 16 256 16zm-90 303.282c-29.772 0-59.312 4.894-63.282 15C94.778 354.492 150.12 496 166 496c15.88 0 71.22-141.51 63.282-161.718-3.97-10.105-33.51-15-63.282-15zm180 0c-29.772 0-59.312 4.894-63.282 15C274.778 354.492 330.12 496 346 496c15.88 0 71.22-141.51 63.282-161.718-3.97-10.105-33.508-15-63.282-15z" />
</svg>


  );
}

JetPack.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
