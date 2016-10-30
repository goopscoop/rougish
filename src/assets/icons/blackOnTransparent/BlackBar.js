import React from 'react';

export default function BlackBar({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M341.28 22.813L254 123.843l-11.094 5.907-113.094-83.125L154.22 177.03l-47.907 25.564-89.72 24.22 36.938 19.624-30.968 82.625-2.843 7.687 7.218 3.844 79.406 42.25-19.47 44.844L144 402.906l32.22 17.156 4.405 2.344 4.375-2.344 47.844-25.468L287.75 497.97l37.78-139.876L467.94 384.75l-60.907-82.875 74.814-39.844 7.25-3.842-2.906-7.688-20.625-54.594 26.218-22.625-35.28-1.405-3.906-10.344-1.25-3.25-3.03-1.655-103.97-56.53-3.063-77.282zM321.595 109l107.97 58.688-237.47 125.718-108.625-57.5L321.593 109zm42.78 44.563l-171.718 90.062-41.562-22.188-25.313 13.407 66.876 35.656 197.28-103.906-25.56-13.03zm76.313 29.406l25.125 66.436L193.656 394.28l5.78-83.624 241.25-127.687zM71.813 250.874l109.032 57.75-6.188 89.438L42.97 327.938l28.843-77.063z" />
</svg>

  );
}

BlackBar.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
