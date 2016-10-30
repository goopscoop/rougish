import React from 'react';

export default function Guillotine({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M159.375 30.72v94.186l205.25-51.062V30.72h-205.25zm-45.125.06v448.47h27.78V30.78h-27.78zm266.53 0v448.47h27.783V30.78H380.78zm-16.155 61.25l-205.25 51.064v45.062l205.25-51.656V92.03zm-205.25 279.69v45.217h67.72c3.82-17.578 18.53-30.687 36.093-30.687 17.56 0 32.24 13.11 36.062 30.688h65.375v-44.22l-205.25-1zm0 62.874v43.875h205.25v-43.876h-65.25c-3.668 17.8-18.48 31.125-36.188 31.125-17.708 0-32.52-13.326-36.187-31.126h-67.625z" />
</svg>

  );
}

Guillotine.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
