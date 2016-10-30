import React from 'react';

export default function PaperArrow({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M32.773 20.22l157.23 216.14c34.636 24.228 67.18 52.126 97.608 84.167-55.124-32.744-111.903-62.108-173.862-80.89l-26.373-7.252c-19.323-4.77-39.164-8.476-59.64-10.89l147.478 106.376c48.008 6.057 95.976 17.203 144.207 34.02-92.163-7.09-183.867-6.92-273.713 22.448 153.47 8.53 305.213 31.958 450.104 114.453L277.505 78.07c5.71 102.37 42.343 193.67 86.375 282.31-43.76-50.662-78.767-104.638-106.398-162.067L32.772 20.22z"/>
</svg>

  );
}

PaperArrow.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
