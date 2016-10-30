import React from 'react';

export default function MoonClaws({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M257.893 25.73c-129.963 0-235.13 105.166-235.13 235.13 0 52.99 17.487 101.856 47.007 141.154 18.687-22.89 36.79-51.545 40.99-78.98l-60.55-123.81 102.927-67.675c-32.11 41.175-42.93 80.322-36.914 113.11 6.575 35.84 33.437 62.59 69.39 74.065l5.682-17.807c-30.667-9.787-51.42-30.922-56.688-59.63-.662-3.61-1.076-7.368-1.22-11.26 20.214 13.75 81.03-26.946 139.773-113.604l101.445 20.11c-87.707 2.83-148.702 57.44-137.615 108.94l109.625-63.956 92.942 26.306c-86.43.5-159.89 25.05-162.032 83.56l106.065-37.67 85.447 68.612c-128.788-47.823-210.17 2.972-273.937 56.713-14.598 27.523-21.196 63.61-24.002 100.435 26.848 10.654 56.13 16.515 86.795 16.515 129.962 0 235.13-105.168 235.13-235.13 0-129.964-105.168-235.13-235.13-235.13z" />
</svg>

  );
}

MoonClaws.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
