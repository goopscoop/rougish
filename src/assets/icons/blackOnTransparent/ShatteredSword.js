import React from 'react';

export default function ShatteredSword({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M496.223 16.818l-48.475 44.205 48.475 4.575v-48.78zm-41.55 1.22l-68.91 11.28-7.04 65.547 75.95-76.828zM352.26 77.907l-87.887 50.3 15.447 41.026 82.662-16.87-10.222-74.456zm64.34 25.022l-32.967 67.443 24.842 70.684 54.314-134.19-46.19-3.937zm-271.362 72.808c-10.02.155-20.714 3.165-30.79 9.057 4.143 8.863 3.382 18.708-2.776 24.873-6.158 6.165-15.993 6.927-24.846 2.78-12.923 22.167-11.88 47.34 2.485 61.73l29.84-29.87c58.655 42.87 109.37 92.94 150.57 151.24l-36.19 36.23 6.61-6.604c14.283 14.298 39.192 15.42 61.23 2.732-4.88-9.197-4.366-19.74 2.107-26.22 6.47-6.478 17-6.993 26.185-2.112 12.66-22.062 11.54-47-2.732-61.3l-28.248 28.28c-57.035-42.41-107.91-92.665-151.426-150.386l35.455-35.492-6.61 6.603c-7.834-7.843-18.863-11.726-30.862-11.542zm108.45 4.512c-17.61 17.41-39.674 39.21-62.22 61.375 8.873 10.318 18.02 20.337 27.407 30.094l59.063-59.126-24.25-32.344zm78.28 32.688L297 219.968l-65 65.063c11.33 11.185 22.99 21.98 35 32.376 22.02-23.134 43.764-46.41 64.97-69.406v-35.063zM173.47 313.25c-31.146 40.858-67.877 74.323-108.905 101.875 4.13 13.708 16.394 26.374 30.624 30.563 29.466-41.26 61.113-79.902 100.97-109.97-7.368-7.662-14.914-15.154-22.688-22.468zM44.5 410.28l-20.844 20.845c7.133 24.65 27.843 44.912 53.72 53.438l19.28-19.313c-26.948-4.28-48.314-26.91-51.875-52.938l-.28-2.03z"  fillRule="evenodd"/>
</svg>

  );
}

ShatteredSword.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
