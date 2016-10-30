import React from 'react';

export default function Cauldron({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M259.063 25.094c-56.045 0-106.836 9.775-144.438 26.125-18.8 8.174-34.34 17.96-45.594 29.53-11.254 11.57-18.28 25.338-18.28 40.188 0 9.936 3.17 19.388 8.625 28.03-10.218 21.883-15.844 45.794-15.844 70.782 0 103.158 95.757 187.844 215.532 187.844 119.776 0 215.563-84.686 215.563-187.844 0-24.99-5.653-48.897-15.875-70.78 5.454-8.644 8.625-18.096 8.625-28.032 0-14.85-7.026-28.617-18.28-40.188-11.256-11.57-26.825-21.356-45.626-29.53-37.603-16.35-88.363-26.126-144.408-26.126zm0 18.687c53.848 0 102.554 9.6 136.968 24.564 17.208 7.482 30.775 16.306 39.658 25.437 8.882 9.133 13 18.115 13 27.157 0 9.043-4.118 18.057-13 27.188-8.883 9.13-22.45 17.956-39.657 25.438-34.413 14.963-83.12 24.562-136.967 24.562-53.85 0-102.555-9.6-136.97-24.563-17.206-7.48-30.804-16.306-39.687-25.437-8.882-9.13-12.97-18.145-12.97-27.188 0-9.042 4.088-18.024 12.97-27.156 8.883-9.13 22.48-17.954 39.688-25.436 34.414-14.964 83.12-24.563 136.97-24.563zm-7.782 17.282c-80.57 0-146 26.008-146 57.844 0 31.836 65.43 57.81 146 57.813 40.04 0 76.404-6.613 102.782-16.94-21.316 3.34-45.064 5.845-70.656 5.845-86.066 0-155.937-21.656-155.937-47.906s69.868-47.282 155.936-47.282c20.43 0 39.926.725 57.813 2.906-24.816-7.704-55.957-12.28-89.94-12.28zM87.657 360.5c-9.916 19.897-14.758 36.638-15.78 49.03-1.23 14.906 2.752 22.238 6.655 24.626 3.905 2.388 11.497 2.48 23.376-5.75 9.25-6.41 20.16-17.73 31.375-34.406-16.778-9.432-32.1-20.71-45.624-33.5zm342.75.063c-13.532 12.782-28.872 24.043-45.656 33.468 11.21 16.666 22.13 27.97 31.375 34.376 11.88 8.23 19.472 8.138 23.375 5.75 3.903-2.388 7.886-9.72 6.656-24.625-1.022-12.38-5.855-29.098-15.75-48.967zm-199.25 64.25c1.36 21.275 5.296 37.554 10.344 48.468 6.272 13.56 13.26 17.82 17.72 17.908 4.457.088 11.14-3.683 17.374-16.907 5.133-10.89 9.165-27.52 10.437-49.467-9.175.965-18.51 1.468-27.967 1.468-9.437 0-18.75-.506-27.907-1.467z"  fillRule="evenodd"/>
</svg>

  );
}

Cauldron.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
