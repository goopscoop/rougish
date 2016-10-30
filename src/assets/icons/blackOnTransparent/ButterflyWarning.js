import React from 'react';

export default function ButterflyWarning({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M257.656 19.78c-30.5.17-59.177 22.708-80.125 62.97-.06.12-.124.224-.186.344L46.656 311.814l-.25.405c-24.31 38.264-29.428 74.37-14.343 100.874 15.08 26.497 48.628 40.094 93.5 37.875v.03h265.093v-.03c44.888 2.226 78.446-11.373 93.53-37.876 15.09-26.51 9.927-62.627-14.405-100.906l-.217-.375L337.219 81.938h-.033c-20.512-40.02-49.058-62.324-79.53-62.157zm-.062 18.876c13.575-.13 26.545 6.444 38.187 17.75 11.565 11.23 22.36 27.28 33.064 48.22.073.142.145.26.22.405L445.56 307.22l.063.092.156.282c12.062 18.924 20.543 35.996 24.876 51.53 4.362 15.64 4.54 30.2-1.5 42.438-6.04 12.24-17.97 20.882-33.75 25.72-15.668 4.803-35.544 6.348-60.375 5.093v.03H141.22v-.03c-22.915 1.16-41.99-.127-57.44-4.47-15.558-4.372-27.84-12.177-34.75-23.936-6.906-11.76-7.785-26.4-3.874-42.408 3.884-15.898 12.374-33.677 25.282-53.937l.25-.406 115.218-201.533c.063-.12.125-.222.188-.343C196.946 84.452 207.864 68.346 219.47 57c11.672-11.412 24.55-18.212 38.124-18.344zm.187 18.688c-7.502.073-15.764 3.727-25.25 13-9.484 9.273-19.69 23.974-30.03 43.937l-.094.157-.094.188-87.343 152.78c13.76-5.03 27.72-7.523 41.56-7.53 34.365-.018 68.02 15.233 96.157 44.688-49.69 27.25-104.785 20.256-148.25-18.72l-17.78 31.063-.094.188-.126.187C74.076 336.63 66.477 353.044 63.314 366c-3.166 12.957-2.053 21.95 1.812 28.53 3.865 6.58 11.153 11.845 23.72 15.376 12.565 3.532 30.023 4.95 51.874 3.813h70.436c-14.237-41.996 3.346-77.317 49.188-95.44 18.38 38.924 9.88 73.377-21.656 95.44H375.5c23.735 1.233 41.894-.468 54.438-4.314 12.543-3.845 19.11-9.29 22.468-16.094 3.358-6.803 3.848-16.257.25-29.156-3.598-12.898-11.28-28.78-22.844-46.875l-.125-.155-.125-.188-69.968-121.5c-8.44 48.982-40.586 85.365-88.97 99.438-1.364-58.31 26.12-103.905 74.563-124.438l-32.53-56.5-.126-.187-.124-.22c-10.195-20.008-20.282-34.614-29.656-43.718-9.374-9.103-17.465-12.54-24.97-12.468zm-2.655 105.875l17.72 5.968c-10.588 31.498-15.707 64.94-14.158 101.062l.875 20.47-16.03-12.75c-28.31-22.513-49.124-51.743-61.376-87.564l17.688-6.062c8.81 25.758 22.248 47.273 40.094 65.25.81-30.364 6.037-59.15 15.187-86.375zm54.063 140.28c31.794-.467 57.084 18.255 70.656 53.594-48.42 19.4-89.145 2.506-107.47-45.438 12.96-5.31 25.313-7.987 36.813-8.156z" />
</svg>

  );
}

ButterflyWarning.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}