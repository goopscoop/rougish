import React from 'react';

export default function BrickWall({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M18 0v.51l101-.104V0H18zm119 0v.387L375 .14V0H137zm256 0v.123L494 .02V0H393zm101 18.02l-101 .103V119h101V18.02zm-119 .12l-238 .247V119h238V18.14zm-256 .266L18 18.51V119h101V18.406zM18 137v110h229V137H18zm247 0v110h229V137H265zM18 265v110h101V265H18zm119 0v110h238V265H137zm256 0v110h101V265H393zM18 393v100.98l229-.236V393H18zm247 0v100.727l229-.237V393H265z"  fillRule="evenodd" strokeLinejoin="round"/>
</svg>

  );
}

BrickWall.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
