import React from 'react';

export default function TripleScratches({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M190.03 21.97c-.71-.003-1.422.01-2.124.03 38.633 74.657 186.967 157.52 307.906 333.03-38.488-159.928-215.34-332.78-305.78-333.06zM83.53 65.374c61.253 98.216 249.157 212.75 375.75 378.844C420.49 283.03 173.3 62.907 83.53 65.374zm-67.31 81.313c59.365 87.324 194.506 155.172 355.03 345.125-38.792-161.19-265.263-347.592-355.03-345.125z"  fillRule="evenodd"/>
</svg>

  );
}

TripleScratches.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
