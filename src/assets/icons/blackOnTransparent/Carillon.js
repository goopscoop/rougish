import React from 'react';

export default function Carillon({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M385.094 18.03l4.25 37.814h-.22l3.063 27.343h.22L438.25 492.25h66.563V364.344L427.156 18.03h-42.062zm-296.625.095L10.812 364.47v127.905h66.562L123.25 83.187h.03l3.064-27.343h-.03l4.217-37.72H88.47zm56.718 37.72l-3.063 27.343h105.75v32c-10.452 4.037-17.97 14.21-17.97 26 0 4.962 1.337 9.633 3.657 13.687-9.215 3.742-16.44 10.183-23.375 19.97-12.268 17.314-22.33 46.215-33.406 87.56-9.713 36.27-23.063 54.097-32.81 66.908-9.75 12.81-15.285 19-15.282 40.03 0 3.104 1.746 6.535 7.78 10.938 6.036 4.405 15.845 8.82 28.126 12.408 24.56 7.173 58.89 11.304 94.594 11.312 35.703.008 70.067-4.083 94.625-11.25 12.278-3.583 22.092-8.004 28.125-12.406 6.032-4.402 7.75-7.86 7.75-10.97-.004-21.03-5.53-27.217-15.282-40.03-9.75-12.813-23.118-30.638-32.844-66.906-11.087-41.35-21.13-70.242-33.406-87.563-7.51-10.597-15.365-17.26-25.72-20.844 2.032-3.853 3.19-8.22 3.19-12.843 0-12.21-8.035-22.717-19.063-26.437V83.187h106.812l-3.063-27.343H145.188zM257.78 132c5.17 0 9.158 4.017 9.158 9.188 0 5.17-3.987 9.156-9.157 9.156s-9.155-3.986-9.155-9.156S252.61 132 257.78 132zm9.75 35.25c29.084 10.748 41.874 57.507 49.283 89.406 15.208 65.5 48.59 77.5 48.53 110.188-2.848 2.364-7.698 5.03-13.75 7.156-7.64 2.684-16.88 4.66-25.812 6.094 3.806-40.826-29.81-52.602-29.31-104.594.522-54.635-14.517-90.058-33.658-106.938 1.63-.302 3.2-.736 4.72-1.312zm17.345 254.78c-8.423.444-17.01.66-25.688.658-7.31-.002-14.548-.182-21.687-.5.75 12.437 11.06 22.28 23.688 22.28 12.683.003 23.022-9.923 23.687-22.437z" />
</svg>

  );
}

Carillon.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
