import React from 'react';

export default function RobinHoodHat({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M479.748 54.52c-3.247.052-8.496 1.107-16.535 4.175-38.124 14.552-81.353 54.73-108.15 102.532-21.36 38.1-32.264 80.38-24.58 118.46 31.922-79.072 53.33-134.06 120.095-202.58l6.28-6.447 12.894 12.563-6.28 6.445c-66.477 68.224-85.57 120.75-118.79 202.922l28.898-19.266c1.446-2.054 31.707-45.064 61.922-92.43 15.47-24.255 30.696-49.33 41.455-69.707 5.38-10.188 9.64-19.23 12.207-26.132 2.57-6.9 2.526-12.237 2.838-11.098l-.023-.088-.023-.09c-3.218-12.73-6.556-17.57-8.64-18.665-.522-.274-1.272-.48-2.297-.56-.385-.03-.808-.043-1.272-.035zM285.166 171.604c-46.497 19.48-85.4 67.53-125.963 122.62-34.715 47.15-70.717 99.035-115.605 140.862 63.072-22.56 133.71-45.586 194.03-67.822 24.73-9.118 47.717-18.105 67.66-26.823l2.444-5.7c4.238-9.888 8.137-19.27 11.91-28.44-12.014-29.86-12.136-62.28-4.413-93.86-5.04-9.554-9.87-18.16-14.44-24.98-3.872-5.773-7.586-10.252-10.65-12.913-2.297-1.993-3.82-2.65-4.974-2.943zm-152.143 127.89c-19.718 7.986-37.81 17.73-51.03 29.512-25.002 22.282-40.403 59.83-51.815 94.012 38.65-35.812 71.293-80.407 102.845-123.524zm231.08 1.78l-27.107 18.072-4.492 2.994c-.93 2.232-1.88 4.5-2.836 6.775 16.537-8.255 29.662-16.335 37.842-23.234-1.15-1.5-2.284-3.044-3.406-4.607zm15.274 18.27c-11.21 9.74-27.214 18.788-46.977 28.292-24.655 11.857-55.104 23.987-88.548 36.316-50.326 18.552-107.424 37.533-161.155 56.235 37.62-3.482 83.504-10.964 128.188-22.75 39.996-10.55 79.145-24.41 110.832-41.276 28.665-15.255 50.853-33.042 62.726-52.057-1.72-1.505-3.407-3.1-5.066-4.76z"/>
</svg>

  );
}

RobinHoodHat.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
