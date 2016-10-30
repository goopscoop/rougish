import React from 'react';

export default function Sing({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M251.47 18.844c-42.103 0-80.822 25.502-109.532 68.156C113.227 129.654 95 189.316 95 255.406s18.227 125.784 46.938 168.438c28.71 42.653 67.43 67.468 109.53 67.468 42.102 0 80.853-24.815 109.563-67.468 28.712-42.654 46.94-102.347 46.94-168.438 0-66.09-18.228-125.752-46.94-168.406-28.71-42.654-67.46-68.156-109.56-68.156zm-52.94 161.812c.907-.013 1.812-.018 2.72 0 9.685.198 19.48 2.548 29.188 6.438l-7 16.937c-31.307-12.544-60.594-2.12-80 30.94l-16.375-9.908c16.74-28.52 43.404-44.005 71.468-44.406zm104.72 1.156c28.064.402 54.695 15.886 71.438 44.407l-16.344 9.342c-19.407-33.06-48.694-42.918-80-30.375l-7-17.53c9.707-3.89 19.502-5.615 29.187-5.813.91-.02 1.815-.044 2.72-.03zM252.187 245.5c53.175 0 96.282 50.127 96.282 111.97 0 61.838-43.108 112-96.283 112-53.174 0-96.28-50.16-96.28-112 0-61.843 43.106-111.97 96.28-111.97zm-19.53 54.156l2 14.094 11.03 78.78c-6.2-2.444-13.285-3.874-20.656-3.874-21.288 0-36.88 11.77-34.843 26.28 2.04 14.513 20.96 26.25 42.25 26.25s36.883-11.737 34.844-26.25c0-.01.002-.02 0-.03l.408-.062-9.25-66.875 39.875 13.31 12.093 4.44V320.593l-6.875-1.625-57.186-15.69-13.688-3.624z" />
</svg>

  );
}

Sing.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
