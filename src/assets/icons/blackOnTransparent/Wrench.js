import React from 'react';

export default function Wrench({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M151 16c-14.774 0-30 15.226-30 30v105c0 14.774 11.946 26.718 26.718 26.718H181V334.28h-33.282c-14.773 0-26.718 11.946-26.718 26.718v105c0 14.774 15.227 30 30 30h30v-90l75-45 75 45v90h30c14.774 0 30-15.226 30-30v-105c0-14.773-11.946-26.718-26.718-26.718H331V177.718h33.282C379.056 177.718 391 165.772 391 151V46c0-14.773-15.226-30-30-30h-30v90l-75 45-75-45V16h-30z" />
</svg>


  );
}

Wrench.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
