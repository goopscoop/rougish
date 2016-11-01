import React from 'react';

export default function BatteryPackAlt({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M226 16c-24.93 0-45 13.38-45 30v15h-45c-29.547 0-60 30.453-60 60v315c0 29.547 30.453 60 60 60h240c29.547 0 60-30.453 60-60V121c0-29.547-30.453-60-60-60h-45V46c0-16.62-20.07-30-45-30h-60zm-90 105h240v315H136V121zm120 30v105h-75l75 150V301h75l-75-150z" />
</svg>


  );
}

BatteryPackAlt.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
