import React from 'react';

export default function Coffin({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M312.094 21.97l59.094 119.686h52.093L362.595 22l-50.5-.03zM173 22.687l-63.594 127.218 65.844 345.75 114.688.094L354.467 150 291.626 22.75 173 22.687zm16.063 76.28h88.78v18.688h-88.78V98.97zm0 36.22h88.78v18.687h-88.78v-18.688zm182.5 25.156L309 495.438l47.25.03 68.313-335.124h-53z" />
</svg>

  );
}

Coffin.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
