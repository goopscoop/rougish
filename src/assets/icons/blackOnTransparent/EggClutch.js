import React from 'react';

export default function EggClutch({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M191.75 36c-.61 0-1.205.03-1.813.063-19.428 1.067-38.773 19.964-52.562 50-6.317 13.76-11.322 29.556-14.72 46.156 17.484 7.632 32.42 23.69 44.314 43.624.655-1.813 1.332-3.606 2.03-5.375 13.44-34.055 35.15-61.243 65.094-64.532 1.87-.206 3.745-.3 5.594-.313 7.764-.057 15.32 1.54 22.593 4.5-4.258-10.827-9.193-21.016-14.655-30.125-16.466-27.458-36.948-43.967-55.875-44zm134.406 8.53c-1.23-.007-2.447.06-3.656.19-18.168 1.93-35.45 19.565-47.625 47.124 5 10.974 9.278 22.676 12.75 34.75 8.72 7.852 16.788 17.48 24.03 28.187 10.013 14.803 18.648 31.955 25.376 50.25 2.528-4.694 5.17-9.243 7.94-13.593 16.88-26.52 38.59-47.037 63.186-51.718-6.524-19.918-15.44-38.63-25.78-54.032-17.27-25.726-37.78-41.04-56.22-41.157zm-86.344 79.814c-1.23-.004-2.447.054-3.656.187-19.34 2.126-37.618 22.04-49.75 52.782-3.89 9.86-7.104 20.677-9.53 32.032 29.68.523 53.856 24.966 70.75 57 4.535 8.602 8.58 17.865 12.093 27.562 3.923-7.238 8.14-14.132 12.624-20.562 14.788-21.204 32.794-38.133 52.625-44.938-6.728-23.306-16.828-45.436-28.814-63.156-17.36-25.664-37.906-40.857-56.344-40.906zm-139.78 21.75c-13.674 0-27.782 8.808-40.313 24.187l25.655 14.845 5.72 3.28-1.19 6.47-4.155 22.875 11.094 10.594-12.875 13.53-14.782-14.06-3.626-3.5.907-4.94L70.343 198 49.03 185.687c-1.436 2.404-2.854 4.883-4.218 7.47-15.416 29.233-25.218 68.456-25.218 105.155 0 36.32 23.966 65.417 57.312 74.72 1.153-37.705 11.2-76.254 27.25-106.688 13.374-25.36 31.34-45.97 52.97-53.72.685-3.718 1.438-7.396 2.28-11.03-1.338-2.893-2.717-5.71-4.156-8.438-15.416-29.233-35.76-47.062-55.22-47.062zm318 11.344c-19.202.582-40.093 16.975-57.313 44.03-4.662 7.324-9.003 15.338-12.94 23.845.935.067 1.88.165 2.814.28 29.895 3.718 51.205 31.196 64.156 65.438 11.4 30.14 16.72 66.696 14.47 102.064 33.922-8.08 60.06-36.513 62.936-71.72 3.093-37.845-3.716-79.103-17.156-110.562-13.44-31.458-32.94-51.63-53.156-53.28-1.264-.104-2.533-.133-3.813-.095zM175.905 228.03c-19.458 0-39.802 17.8-55.22 47.032-15.415 29.234-25.217 68.49-25.217 105.188 0 44.28 35.612 77.875 80.436 77.875 24.69 0 46.663-10.8 61.375-27.656-5.878-14.5-8.246-30.682-6.155-47.5 2.715-21.84 8.586-43.758 16.813-64.064-4.268-15.86-9.988-30.842-16.844-43.844-15.417-29.233-35.73-47.03-55.188-47.03zm168.72 15.876c-1.23-.015-2.47.038-3.72.156-17.48 1.666-36.676 16.25-53.22 39.97-18.904 27.107-33.47 64.832-37.998 101.25-5.464 43.944 25.704 81.687 70.187 87.218 44.293 5.508 84.182-25.098 89.438-67.375 4.527-36.418-.34-76.556-12.032-107.47-.635-1.682-1.294-3.317-1.967-4.936l-30.094 24.342 7.092 7.594-13.656 12.75L344.72 322.5l-6.845-7.344 7.813-6.312 41.093-33.28c-10.798-18.223-24.287-29.64-38.5-31.408-1.206-.15-2.425-.234-3.655-.25z" />
</svg>

  );
}

EggClutch.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
