import React from 'react';

export default function HeavyArrow({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M60.344 17.594l4.75 45.718-45.063-2.874 41.157 49.812-11.406 243.156c-.03.02-.06.043-.093.063-.03.02-.06.04-.093.06-37.928 26.657-38.036 71.926-19.844 103.44 24.263 42.024 72.83 42.51 87.25 4.75-24.33 12.43-43.486 1.97-55-17.97-11.764-20.378-8.908-43.704 26.438-56.063C134.162 371.7 225.256 440.334 311.75 428l-11.875-55.344c-83.384 34.902-166.713-51.397-223.063-32.53l-.468.155c-2.46.97-4.918 1.967-7.344 3.033L79.063 127.47l32.687-5.907 196.563 207.906 1.218 1.28 26.75 124.438 1.283 5.906 5.875 1.25 136.375 29.344 14.156 3.03-3.064-14.156-29.312-136.343-1.28-5.908-5.908-1.28-124.5-26.75-1.53-1.5-205.563-195.688L129 78.814l213.47-9.626c-.25.52-.51 1.036-.75 1.562-.04.085-.087.165-.126.25-.885 2.202-1.71 4.482-2.5 6.844-18.86 56.333 68.363 138.695 33 222.594l56.03 12c11.78-85.565-57.487-177.073-41.437-222.97 12.36-35.345 35.654-38.203 56.032-26.437 19.94 11.513 30.4 30.674 17.967 55 33.042-12.617 37.266-51.432 9.532-77.186-3.96-3.682-9.025-7.03-14.283-10.063-12.983-7.495-28.3-11.89-43.687-11.81-19.84.1-39.804 7.626-55.03 25.53-1.293 1.813-2.548 3.646-3.783 5.5L113.5 60.813l-53.156-43.22zM328.28 329.03l97.126 20.876-47.25 25.063-2.53 1.342-1.345 2.532-25.124 47.344-20.875-97.157zm117.626 31.158l23.72 110.187-110.22-23.688 30.03-56.53 56.47-29.97z"  fillRule="evenodd"/>
</svg>

  );
}

HeavyArrow.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
