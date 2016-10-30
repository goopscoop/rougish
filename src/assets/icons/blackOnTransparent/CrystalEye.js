import React from 'react';

export default function CrystalEye({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M168.03 118.875c-13.335.037-26.66.754-40 2.094-3.81.382-7.625.83-11.436 1.31-1.906.243-3.813.486-5.72.75-7.623 1.064-15.25 2.314-22.874 3.75-3.813.72-7.624 1.474-11.438 2.282-1.708.363-3.415.746-5.124 1.125-.553.123-1.104.25-1.657.375-1.3.294-2.603.572-3.905.875-.25.06-.5.13-.75.188-.958.225-1.917.457-2.875.688-.948.227-1.895.454-2.844.687-13.315 3.27-26.62 7.033-39.937 11.25 5.585 48.63 19.624 88.445 39.936 120.22v-.25c20.904 32.82 48.428 57.043 80.188 73.56-21.5-25.38-34.5-58.194-34.5-94 0-52.93 28.358-99.354 70.687-124.843-2.58-.044-5.167-.07-7.75-.062zm47.626 2.906c-3.812 1.09-7.563 2.324-11.22 3.75l28.845 63.5L310 201.188l36.875-36.156c-43.75-24.067-87.483-37.74-131.22-43.25zm-28.094 11.814c-38.147 21.86-63.78 62.972-63.78 110.187 0 11.558 1.557 22.744 4.437 33.376L179.687 267l36.218-71.03-28.344-62.376zm172.094 45.062l-37.03 36.313 11.843 74.593L362.405 304c9.655-17.91 15.156-38.406 15.156-60.22 0-23.828-6.526-46.094-17.906-65.124zm25.875 10.375c6.89 16.912 10.72 35.392 10.72 54.75 0 44.952-20.46 85.213-52.563 111.94 27.568-6.378 55.03-15.792 81.563-27.94v.408c24.174-11.05 47.57-24.363 69.53-39.75-23.174-26.64-46.354-49.616-69.53-69.313v.594c-13.244-11.28-26.48-21.496-39.72-30.69zM230.94 207.595l-33.72 66.22 52.532 52.53 66.28-33.75-11.624-73.375-73.47-11.626zM182.5 285.53l-48 9.44c12.203 27.734 34.035 50.223 61.28 63.28 14.396 3.322 29.258 5.446 44.44 6.47l-.532-22.033-57.188-57.156zm145.72 21.845l-69.845 35.594.5 22.467c10.614.083 21.356-.34 32.156-1.28 24.707-8.264 45.998-23.925 61.283-44.344l-24.094-12.438z"  fillRule="evenodd"/>
</svg>

  );
}

CrystalEye.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
