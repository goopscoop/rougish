import React from 'react';

export default function PowerLightning({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M29.805 29.777L242.14 209.55H118.712l112.54 86.784H95.995l225.656 174.012-81.537-116.05 66.487.143 179.185 138.175-171.96-244.746h84.568L248.082 29.776H29.805z"/>
</svg>

  );
}

PowerLightning.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
