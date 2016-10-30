import React from 'react';

export default function Minotaur({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M110 18.906c-3.766 9.014-2.938 15.91-2.938 28.032 0 26.995 24.076 48.413 52.563 52.562 19.28 2.807 39.315 4.758 59.594 5.813-8.56 7.39-13.907 18.092-13.907 35.124 0 17.576 6.436 37.856 16.562 52.97 10.126 15.112 23.233 24.374 36.03 24.374 12.8 0 25.906-9.26 36.033-24.374 10.126-15.113 16.562-35.392 16.562-52.97 0-17.186-5.43-27.946-14.125-35.342 19.053-1.09 37.854-2.952 56-5.594 28.487-4.147 51.47-23.72 52.563-52.563.368-9.723-1.637-18.74-2.938-28.03-2.943 27.71-26.205 45.69-54.313 49.656-59.833 8.443-123.54 8.443-183.375 0-28.107-3.966-51.37-21.945-54.312-49.657zm79.78 99.313c-248.928 7.213-200.628 194.293-22.124 242.5 40.812-39.456-6.55-101.937-43.72-57.033-23.22-43.474-20.674-82.77 4.5-95.03 48.72 27.067 83.566 88.52 86.126 148.405-33.595 23.148-59.625 63.032-59.625 63.032l26.344 38.78-41.31 23.5h82.124c-40.513-40.52-11.77-86.093 36.22-86.093 48.645 0 74.12 48.22 36.248 86.095h81.282l-40.47-23.5 26.345-38.78s-26.458-40.502-60.44-63.564c2.744-59.716 37.52-120.887 86.095-147.874 25.176 12.262 27.722 51.557 4.5 95.03-37.168-44.903-84.53 17.578-43.72 57.033 178.5-48.206 226.788-235.28-22.124-242.5 2.054 6.73 3.158 14.17 3.158 22.218 0 21.95-7.423 45.024-19.72 63.375-12.295 18.35-30.17 32.656-51.562 32.656-21.392 0-39.266-14.306-51.562-32.657-12.296-18.352-19.72-41.426-19.72-63.375 0-8.048 1.105-15.488 3.157-22.22z" />
</svg>

  );
}

Minotaur.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
