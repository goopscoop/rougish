import React from 'react';

export default function Lift({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M258.125 25.095L86.563 125.625H150v271H86.563l171.53 100.563 171.563-100.562H366.22v-271h63.467L258.125 25.096zm2.125 69.687c.684-.028 1.34-.018 2 .094 17.524 2.275 31.665 19.426 34.656 41.375h-29.47l.002 18.688h29.218c-1.692 10.3-5.91 19.407-11.687 26.375 41.13 7.74 60.86 67.412 48.75 125.75h-33.033l-7.562 101.563h-72.5l-6.688-101.563h-31.593c-10.68-56.805 3.537-119.376 48.47-126.343-5.488-6.883-9.463-15.787-11.095-25.782h29.03V136.25H219.5c3.226-23.553 19.343-41.374 38.688-41.374.677 0 1.378-.066 2.062-.094z" />
</svg>

  );
}

Lift.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
