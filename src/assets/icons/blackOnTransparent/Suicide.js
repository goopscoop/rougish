import React from 'react';

export default function Suicide({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M241 16a15 15 0 0 0-15 15v60h-15a15 15 0 0 0-15 15v90a15 15 0 0 0 13.844 14.938C158.366 301.06 106 326.67 106 361c0 90 72.837 135 150 135s150-45 150-135c0-34.326-52.37-59.927-103.844-150.03A15 15 0 0 0 316 196v-90a15 15 0 0 0-15-15h-15V31a15 15 0 0 0-15-15h-30zm15 210c15 45 90 120 90 135 0 45-45.033 90-90 90-45.033 0-90-45-90-90 0-15 75-90 90-135z" />
</svg>


  );
}

Suicide.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
