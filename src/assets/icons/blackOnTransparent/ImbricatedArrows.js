import React from 'react';

export default function ImbricatedArrows({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M24.406 26.844l86.72 153.906 52.093-19 17.155-47.03-155.97-87.876zm194.656 36.25l-36.25 99.5 60.032 70.875 13.906-38.064-37.688-132.312zm84.375 59.062L260.25 240.312l65.375 77.157 18.72-51.314-40.908-144zm94.344 52.03L342.5 325.72l102.406 120.874-122.53-103.813-146.813 53.564 310.625 88.437L397.78 174.19zm-233.186 6.97l-100.03 36.5 132.25 37.688 38.655-14.125-70.876-60.064zm77.72 77.438L123.5 302.03l144.063 40.908L319.5 324l-77.188-65.406z" />
</svg>

  );
}

ImbricatedArrows.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
