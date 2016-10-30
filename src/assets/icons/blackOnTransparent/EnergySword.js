import React from 'react';

export default function EnergySword({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M491.313 21.406C331.102 120.193 194.688 226.866 70 350.906c29.11-21.616 63.387-37.86 103.875-49.28 40.95-60.157 100.923-106.7 170.844-130.157-23.522 69.8-70.747 130.135-131.314 171.25-9.76 38.353-26.835 69.38-48 96.374C289.153 314.63 403.748 181.7 491.312 21.406zM132.656 345.5v.344c-30.526 52.844-71.12 87.318-115.437 115.47-4.89 28.29 9.777 39.067 34.75 34.56 30.594-51.69 68.69-88.052 115.436-115.468 0-19.56-12.363-34.906-34.75-34.906z" />
</svg>

  );
}

EnergySword.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
