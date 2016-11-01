import React from 'react';

export default function Pulse({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256 16c-120 0-135 105-60 195 0-165 135-45 135-135 0-30-45-60-75-60zm146.25 134.532C370.61 152.554 334.75 167.875 301 196c165 0 45 135 135 135 30 0 60-45 60-75 0-75-41.016-108.838-93.75-105.468zM76 181c-30 0-60 45-60 75 0 120 105 135 195 60-165 0-45-135-135-135zm175.782 15A60 60 0 0 0 196 256a60 60 0 0 0 120 0 60 60 0 0 0-64.218-60zM316 301c0 165-135 45-135 135 0 30 45 60 75 60 120 0 135-105 60-195z" />
</svg>


  );
}

Pulse.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
