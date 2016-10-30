import React from 'react';

export default function SiegeRam({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M404.89 233.115c3.81.15 6.27-3.31 9.94-2.26 5.65 1.61 5.68 8.8 4 11.45a10.93 10.93 0 0 1-12 4c-8-2.21-8.4-11.83-8-14.37a12.82 12.82 0 0 0 6.06 1.18zm-208.42-9.55v57.21h55.27v-57.21zm-178.62 0v57.21h52.38l17.65-57.21h-70zm101.07 57.21h29.33v-57.21h-11.68zm181-57.21v57.21h42.57l-13.29-57.21H300zm-196.86 126.06a51.19 51.19 0 0 0-36.195 87.385 51.19 51.19 0 0 0 87.385-36.195c0-28.272-22.919-51.19-51.19-51.19zm248.18 0a51.19 51.19 0 0 0-36.195 87.385 51.19 51.19 0 0 0 87.385-36.195c0-28.272-22.919-51.19-51.19-51.19zM90.74 91.785h272.83v-31.79H90.74zM153 355.875a67 67 0 0 1 16 32h116.32a67 67 0 0 1 16-32zm271.43 0h-23.28a67 67 0 0 1 16 32h7.22v-32zm-394.49 0v32h7.22a67 67 0 0 1 16-32H29.91zm125.62-248.09h-15.2l-72.84 236a66.84 66.84 0 0 1 17.59-7.76zm178.12 0h-14.91L372 336.915a67 67 0 0 1 16.82 8.21zM164.25 108v183.815h16.21V108zm103.48 0v183.815H284V108zm217.11 149.885l2 54-18.19 4.32-18.88-8.5-7.52-27-18.19-.09s26-9.95 26.82-36.6c.48-16.45-9.86-38.59-33.82-39.22-16-.42-36.62 16.37-29.58 35.69 1.85 5.06 5 15.06 17.35 17.59 10.93 2.24 25.42-3.43 26.85-18.05 1-10.35-7.67-27.48-27.62-19a22 22 0 0 1 13-4.27c6.87.06 15.69 3.79 20.3 15.93 3.74 9.86 1.82 24.86-12.87 34.24a37.35 37.35 0 0 1-37.15 1.07l-15.44-66.5c14.24-25 66.86-45.12 102.91-1.44 5.7 6.9 19.34 30.94 19.34 30.94zm-6.32-5.82c2-.92 1.9-5.17-.12-9.51s-11.26-9.11-13.22-8.19c-1.96.92-1.9 5.17.13 9.51s11.21 9.11 13.17 8.19zm1.6 49.37c0-3.29-5-10-6.31-10-1.31 0-2.31 2.67-2.31 6s5 10 6.31 10c1.31 0 2.31-2.67 2.31-6z" />
</svg>

  );
}

SiegeRam.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
