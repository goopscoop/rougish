import React from 'react';

export default function PsychicWaves({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M65.125 18.344C47.11 49.844 36.72 86.262 36.72 125.124c0 80.293 43.973 150.497 109.124 187.75.403-6.904.92-13.833 1.625-20.75-55.33-34.965-92.064-96.676-92.064-167 0-39.426 11.63-75.964 31.563-106.78H65.124zm69.03 0c-25.61 28.273-41.374 65.635-41.374 106.78 0 51.08 24.052 96.656 61.44 125.97l.06-.25c1.612-6.61 3.473-13.008 5.69-19.125-29.73-25.896-48.5-64.026-48.5-106.595 0-42.848 19.254-80.837 49.436-106.78h-26.75zm210.532 0c30.125 25.95 49.438 64.003 49.438 106.78 0 41.152-17.546 78.157-45.563 103.97 2.26 6.282 4.116 12.876 5.657 19.687 35.748-29.366 58.592-73.883 58.592-123.655 0-41.123-15.81-78.5-41.406-106.78h-26.72zm73.407 0c20.06 30.867 32.094 67.387 32.094 106.78 0 69.457-35.82 130.505-90 165.69.545 7.037.933 14.107 1.187 21.123 64.267-37.483 107.53-107.18 107.53-186.812 0-38.925-10.745-75.328-28.874-106.78h-21.936zm-165.313 2.28c-57.625 0-104.53 46.906-104.53 104.532 0 28.606 11.56 54.573 30.25 73.47 4.13-4.712 8.84-8.817 14.094-12.19-15.844-15.56-25.656-37.237-25.656-61.28 0-47.527 38.316-85.844 85.843-85.844 47.528 0 85.845 38.317 85.845 85.844 0 23.16-9.108 44.114-23.938 59.53 5.488 3.14 10.394 7.033 14.688 11.533 17.327-18.666 27.938-43.657 27.938-71.064 0-57.626-46.905-104.53-104.532-104.53zm-4.186 55.564c-21.622 2.8-40.97 27.91-40.97 60.28 0 17.846 6.173 33.653 15.282 44.595l10.188 12.218-15.656 2.94c-11.884 2.226-20.62 8.512-28.032 18.655-7.41 10.143-13.023 24.216-16.97 40.406-7.188 29.5-8.736 65.498-8.967 97.126h38.999l.655 8.656 9.906 132.5h83.69l8.75-132.437.592-8.72h37.125c-.02-32-.39-68.49-6.906-98.217-3.57-16.297-8.992-30.34-16.5-40.375-7.505-10.035-16.654-16.288-29.967-18.344L273.875 193l10.094-12.625c8.713-10.89 14.592-26.495 14.592-43.906 0-34.515-21.658-60.22-45.468-60.22-2.672 0-4.275-.092-4.5-.063z" />
</svg>

  );
}

PsychicWaves.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
