import React from 'react';

export default function StandingPotion({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M257.95 17.127c-19.323.186-39.152 5.737-49.462 16.437l4.494 25.288-18.836.13 3.756 12.04 12.84 41.165c1.466 31.346-8.624 56.45-23.828 79.997-18.854 29.198-45.987 55.144-67.662 83.957-11.56 15.367-15.767 33.277-13.285 50.57 2.48 17.29 11.322 33.89 24.795 48.257 26.945 28.736 72.624 49.044 128.345 48.654 52.815-.366 98.06-21.347 125.3-50.313 13.62-14.484 22.82-31.095 25.603-48.434 2.78-17.34-1.278-35.385-13.15-50.678h.003c-22.132-28.513-49.724-54.076-69.088-83.01-15.9-23.76-26.513-49.206-25.107-81.374l15.228-51.68-17.6.12 4.09-25.357c-8.29-10.77-27.11-15.952-46.435-15.766zm34.905 59.863l-6.582 22.336c-22.502 10.67-41.278 9.862-59.775.617l-7-22.447 73.357-.506zm-8.765 43.49c1.27 31.477 12.715 58.028 28.152 81.096 7.37 11.013 15.604 21.332 24.076 31.254-20.758-5.694-49.388-9.355-80.85-9.355-28.173 0-54.063 2.94-74.077 7.64 7.483-9.18 14.71-18.707 21.223-28.793 14.953-23.156 25.9-49.698 26.768-80.96 17.122 5.656 35.656 5.724 54.71-.882zm75.58 138.756c4.275 4.785 8.483 9.543 12.516 14.285-7.27 4.73-16.44 8.51-27.293 11.732-23.45 6.96-54.792 11.053-89.426 11.053s-65.977-4.094-89.426-11.053c-8.803-2.613-16.478-5.602-22.95-9.158 3.992-4.87 8.175-9.76 12.424-14.672 4.372 2.06 9.703 4.094 15.843 5.916 20.964 6.22 50.975 10.28 84.11 10.28 33.136 0 63.146-4.06 84.11-10.28 8.31-2.466 15.157-5.314 20.093-8.102zM102.04 364.234c-50.154 13.628-82.55 33.813-82.55 56.204 0 41.017 106.522 74.35 237.696 74.35 131.173 0 237.697-33.333 237.697-74.35 0-22.31-32.12-42.578-81.965-56.204 17.23 8.88 27.518 19.25 27.518 30.444 0 32.13-82.31 58.545-183.248 58.545-100.94 0-182.663-26.418-182.663-58.545 0-11.255 10.11-21.535 27.518-30.444h-.004z"/>
</svg>

  );
}

StandingPotion.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
