import React from 'react';

export default function FrozenOrb({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M255.063 15.47c-131.508 0-238.657 107.12-238.657 238.624S123.558 491.75 255.062 491.75c131.505 0 238.625-106.15 238.625-237.656 0-131.504-107.117-238.625-238.625-238.625zm0 18.343c121.407 0 219.28 98.877 219.28 220.28 0 121.408-97.877 219.313-219.28 219.313-121.404 0-219.313-97.91-219.313-219.312 0-121.404 97.905-220.28 219.313-220.28zm-.032 19.28c-110.986 0-200.75 89.763-200.75 200.75 0 110.988 89.764 200.75 200.75 200.75 110.99 0 200.75-89.762 200.75-200.75 0-110.987-89.76-200.75-200.75-200.75zm-.843 16.532l12.313 62.72 51-21.095-46.094 46.094 6.22 31.687-12.5 3.345L273 221.72l29.313-7.876-3.25-12.094 31.343-10.72 16.813-62.81 7.217 54.56 60.313-20.624-48.313 42.156 42.375 33-61.625-16.187-24.25 21.156-10.03-10.03-21.47 21.5 21.47 21.47 9.218-9.22 24.688 21.563L409.5 270.78l-43.563 33.47 48.22 42.063-60.97-20.844-7.406 53.186-16.81-61.5-30.22-10.312 3.563-13.313L273 285.657 265.125 315l12.5 3.344-6.22 31.625 46.095 46.06-51-21.06-12.313 62.75-12.375-63.033-49.593 20.125 44.686-45.093-6.125-31.19 13.157-3.53-7.875-29.344-29.343 7.875 3.624 13.533-29.28 10.03L164.28 378.5l-7.374-53.156L96 346.188l48.188-42.063-43.594-33.5 62.75 16.813 24.03-20.97 8.75 8.75 21.47-21.468-21.47-21.5-9.593 9.594-23.56-20.563-61.72 16.22 42.47-33.03-48.345-42.19 60.28 20.626 7.19-54.53 16.81 62.75 30.376 10.374-3.31 12.344 29.343 7.875 7.875-29.345-13.188-3.53 6.156-31.25-44.687-45.126 49.593 20.124 12.375-62.97z" />
</svg>

  );
}

FrozenOrb.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
