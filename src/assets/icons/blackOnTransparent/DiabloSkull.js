import React from 'react';

export default function DiabloSkull({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M256.717 15.525s-34.385 56.154-34.385 75.143c0 12.812 5.063 22.368 12.436 28.5 5.633 4.823 12.896 7.8 20.896 8.04 17.535.9 35.436-10.866 35.436-36.54.002-18.993-34.383-75.143-34.383-75.143zM206.17 79.94c-23.862 9.82-40.335 27.916-52.5 52.656-18.018 36.645-24.874 88.532-25.535 146.586h62.68c-2.794 14.47-3.947 30.726-4.07 47.943-1.695 14.567 8.944 76.447 8.944 76.447s30.256-50.032 35.736-66.283c6.153 24 22.82 68.677 22.82 68.677s16.506-44.24 22.73-68.324c5.796 16.617 35.618 65.93 35.618 65.93s10.947-63.662 8.865-77.04c-.147-16.997-1.304-33.047-4.067-47.35h62.156c-.662-58.055-7.518-109.942-25.536-146.587-11.04-22.452-25.63-39.43-46.065-49.72.723 3.455 1.107 7.03 1.107 10.692 0 28.803-23.55 52.354-52.354 52.354-28.803 0-52.353-23.55-52.353-52.354 0-4.71.64-9.277 1.82-13.627zm-47.895 4.93c-1.13-.015-2.26-.015-3.384 0C68.12 86.09-3.26 175.69 25.03 269.714c12.356 41.064 72.85 67.43 104.263 50.228-59.21.1-76.798-64.22-58.488-108.835 10.297-25.09 27.425-40.573 50.732-44.042 3.926-15.375 8.962-29.7 15.36-42.713 7.417-15.08 16.88-28.326 28.488-39.192-2.38-.162-4.75-.26-7.11-.29zm193.286 0c-3.013.037-6.045.19-9.09.446 11.53 10.836 20.936 24.027 28.315 39.034 6.358 12.93 11.37 27.156 15.285 42.418 24.447 2.792 42.338 18.452 52.96 44.337 18.31 44.614.72 108.935-58.49 108.836 31.413 17.204 91.91-9.163 104.267-50.227 28.29-94.024-43.09-183.622-129.862-184.842-1.125-.015-2.254-.015-3.384 0zm-25.937 80.847c11.335 4.365 19.38 15.354 19.38 28.226 0 16.704-13.54 30.244-30.24 30.244-15.347 0-28.017-11.434-29.974-26.248 20.755-5.506 33.46-17.012 40.833-32.223zm-143.562.01c7.38 15.212 20.09 26.717 40.858 32.218-1.96 14.81-14.63 26.243-29.973 26.243-16.7 0-30.242-13.54-30.242-30.245 0-12.865 8.035-23.845 19.358-28.216zm108.48 74.513l-36.698 76.045-36.7-76.043 36.698 25.143 36.7-25.145zM170.483 360.002s-51.736 72.637-56.19 89.27c-11.81 44.068 49.134 57.507 60.22 16.136 4.455-16.63-4.03-105.406-4.03-105.406zm165.327 0s-8.488 88.776-4.033 105.406c11.086 41.37 72.033 27.932 60.223-16.137-4.455-16.63-56.19-89.268-56.19-89.268zM228.14 383.73s-29.39 58.982-30.724 71.635c-3.538 33.527 42.495 36.31 45.816 4.836 1.336-12.652-15.09-76.47-15.09-76.47zm51.788 0s-16.43 63.818-15.094 76.47c3.32 31.475 49.356 28.692 45.818-4.835-1.333-12.653-30.724-71.636-30.724-71.636z" />
</svg>

  );
}

DiabloSkull.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
