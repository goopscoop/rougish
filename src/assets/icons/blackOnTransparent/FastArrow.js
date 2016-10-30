import React from 'react';

export default function FastArrow({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M20.91 20.002v32.29l357.793 338.9L20.91 101.407v58.942l355.942 250.224-86.89-17.527 26.913 30.947-70.502 3.008 245.633 64.603-65.502-249.054-15.352 92.36-27.3-31.46 16.683 60.464L161.26 20.002h-22.37l142.276 208.935L109.496 42.17l98.975 138.547L45.194 20.002H20.91zm433 92.186l-32.234 38.482 55.19 208.21 15.286-217.794-38.242-28.9zm-231.88 327.89l-24.975 23.47 21.674 27.62 149.225-12.78-145.926-38.31z"/>
</svg>

  );
}

FastArrow.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
