import React from 'react';

export default function CookingPot({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 100c-8 0-16 4-32 12l10.848 32.543C179.665 147.226 112.76 160.04 98.68 183h314.625c-7.012-11.422-27.093-20.334-52.305-26.738V135h-18v17.266c-21.203-4.107-44.4-6.68-65.848-7.723L288 112c-16-8-24-12-32-12zM96 201v14H55v18h41v151c0 16 16 32 32 32h256c16 0 32-16 32-32V233h41v-18h-41v-14H96z"/>
</svg>

  );
}

CookingPot.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
