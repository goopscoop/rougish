import React from 'react';

export default function CrystalShine({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M258.396 21.375l-17.503 64.1c-1.133 2.452-1.782 5.172-1.782 8.05 0 10.634 8.62 19.256 19.255 19.256 10.634 0 19.256-8.62 19.256-19.255 0-.72-.045-1.426-.122-2.125h.022l-.05-.18c-.23-1.917-.737-3.746-1.488-5.45l-17.586-64.395zm118.21 31.494l-46.21 45.77c-6.03 3.254-10.126 9.626-10.126 16.956 0 10.633 8.622 19.254 19.255 19.254.668 0 1.327-.034 1.977-.1 7.608 5.175 14.85 11.125 21.6 17.875 57.872 57.872 57.87 151.418 0 209.29-6.75 6.747-13.99 12.694-21.594 17.868-.65-.066-1.308-.1-1.975-.1-10.634 0-19.256 8.623-19.256 19.256 0 7.006 3.757 13.12 9.352 16.49l46.694 46.252-18.545-70.55c6.468-4.81 12.67-10.137 18.536-16.003l6.608-6.61-.334-.332c3.252-3.637 6.305-7.388 9.183-11.23l71.057 18.68-51.63-52.126c6.54-15.08 10.757-30.926 12.636-46.996l70.61-19.282-70.56-19.267c-1.82-15.925-5.937-31.633-12.343-46.59l51.234-51.727-70.318 18.483c-4.842-6.536-10.22-12.8-16.144-18.723-5.794-5.794-11.916-11.063-18.298-15.824l18.587-70.717zm-236.307.005l17.112 65.107c.218 1.76.662 3.45 1.322 5.032l.153.582c-6.38 4.76-12.498 10.023-18.29 15.814-5.92 5.92-11.294 12.18-16.136 18.715L54.024 139.61l51.31 51.802c-6.41 14.945-10.535 30.64-12.376 46.553l-70.562 19.27L92.95 276.5c1.856 16.108 6.06 31.994 12.595 47.105l-51.574 52.07 70.952-18.648c4.722 6.312 9.94 12.368 15.676 18.102 5.815 5.814 11.96 11.102 18.367 15.876-1.004 2.215-1.613 4.646-1.707 7.213l-16.678 63.456 48.91-48.447-.037-.08c3.86-3.52 6.297-8.575 6.297-14.21 0-10.634-8.622-19.256-19.256-19.256-.395 0-.786.015-1.176.04-7.573-5.16-14.783-11.088-21.506-17.81-57.872-57.872-57.872-151.417 0-209.29 6.725-6.723 13.938-12.65 21.514-17.81.39.022.782.036 1.178.036 10.634 0 19.254-8.62 19.254-19.254 0-6.22-2.963-11.736-7.54-15.256L140.3 52.875zm127.436 89.87v49.02l33.602 19.292 46.18-25.045-79.782-43.268zm-18.69.312l-79.722 42.957 46.31 24.955 33.413-19.062v-48.85zM159.9 202.164v114.012l46.346-24.975v-64.063L159.9 202.164zm196.985.027l-46.342 25.134v63.7l46.342 25.136V202.19zm-98.367 5.83l-33.584 19.158v64.285l33.584 19.162 33.336-19.145v-64.318l-33.336-19.14zm43.082 99.416l-33.864 19.445v47.056l78.24-42.432-44.376-24.068zm-86.24.084l-44.495 23.976 78.182 42.127v-46.885L215.36 307.52zm43.005 94.234c-10.634 0-19.254 8.622-19.254 19.256 0 2.74.582 5.342 1.615 7.703l17.67 64.713 17.787-65.12c.57-1.39.965-2.86 1.197-4.388l.06-.23h-.026c.122-.878.207-1.767.207-2.678 0-10.634-8.62-19.256-19.255-19.256z" />
</svg>

  );
}

CrystalShine.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
