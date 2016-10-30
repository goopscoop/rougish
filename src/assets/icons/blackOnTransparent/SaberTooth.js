import React from 'react';

export default function SaberTooth({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M107.938 17.313c-64.05-.594-139.82 178.305-40.157 337.78C46.42 198.208 89.32 135.292 120.22 98.75c-5.237 44.174 3.966 104.642 35.186 171.313-3.883-99.417 20.93-155.205 37.688-188.813-2.532 40.235 9.096 98.635 32.28 158.688 6.373-75.308 23.287-126.69 30.564-160.094 7.276 33.403 24.19 84.782 30.562 160.094 23.203-60.1 34.806-118.544 32.25-158.782 16.757 33.598 41.637 89.394 37.75 188.906 31.22-66.67 40.424-127.138 35.188-171.312 30.9 36.54 73.765 99.462 52.406 256.344 118.12-189.008-10.15-405.3-73.313-317.72-.614.853-1.19 1.676-1.717 2.5-12.798-14.073-29.877-18.707-49.125-11.03-7.397 2.95-11.8 6.116-13.97 9.906-7.806-9.65-19.195-13.25-34.468-8.97-7.67 2.15-12.638 5.573-15.563 10.47-2.926-4.89-7.9-8.32-15.562-10.47-15.254-4.276-26.63-.684-34.438 8.94-2.175-3.78-6.62-6.933-14-9.876-19.248-7.677-36.296-3.043-49.093 11.03-.528-.824-1.104-1.647-1.72-2.5-9.868-13.684-21.325-19.952-33.186-20.062zm12.312 254.03c-38.28 148.97 18.404 251.585 73.938 216.688 7.56-4.75 11.073-9.09 11.593-13.905 8.243 11.194 20.33 15.146 36.47 9.938 7.026-2.268 11.393-5.666 13.688-10.375 2.294 4.71 6.66 8.107 13.687 10.375 16.14 5.208 28.227 1.256 36.47-9.938.52 4.816 4.032 9.155 11.592 13.906 55.534 34.898 112.218-67.716 73.938-216.686-15.7 109.287-57.585 155.766-76.313 181.97 9.146-34.875 3.78-94.316-14.25-163.564-13.933 79.56-38.066 129.646-45.125 159.563-7.06-29.918-31.192-80.01-45.125-159.563-18.03 69.248-23.364 128.69-14.218 163.563-18.727-26.203-60.645-72.682-76.344-181.97z"  fillRule="evenodd"/>
</svg>

  );
}

SaberTooth.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
