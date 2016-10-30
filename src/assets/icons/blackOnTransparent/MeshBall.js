import React from 'react';

export default function MeshBall({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M253.625 21.406c-9.43.1-18.883.785-28.313 2.032 16.53 3.31 33.2 9.07 49.563 17.062 11.578 5.655 23.043 12.428 34.25 20.22 6.24-.527 12.432-.842 18.53-.94 7.205-.113 14.287.05 21.25.532 18.135 1.258 35.424 4.61 51.376 10-40.077-30.755-88.92-47.736-138.905-48.843-1.307-.03-2.63-.057-3.938-.064-1.267-.007-2.543-.013-3.812 0zm-58.53 17.407c-1.527-.017-3.05-.007-4.564.03-6.165.155-12.213.775-18.124 1.844 14.393 7.383 29.855 19.437 46.25 35.344 1.53 1.484 3.082 3.014 4.625 4.564 19.142-7.216 38.315-12.535 57.126-16-4.56-2.63-9.134-5.074-13.72-7.313-24.374-11.904-48.703-18.224-71.592-18.468zm-50.532 12.75c-2.23.037-4.117.454-5.657 1.156-.308.14-.593.305-.875.468-.28.162-.567.334-.843.53-4.138 2.95-7.55 9.8-8.406 22.344-.888 13.053 1.234 31.09 6.44 52.22 10.584-7.72 21.785-15.014 33.56-21.813 11.772-6.797 23.68-12.853 35.657-18.157-15.693-15.072-30.22-25.964-41.968-31.72-6.024-2.95-11.025-4.43-15.064-4.874-1.01-.113-1.95-.173-2.844-.157zM110.03 76.686c-19.126 22.58-30.267 53.734-32.78 89.97-.352 5.073-.527 10.253-.53 15.5 12.403-14.554 26.62-28.475 42.436-41.438-.572-2.116-1.135-4.213-1.656-6.282-5.58-22.154-8.272-41.594-7.47-57.75zm222.064 1.75c15.036 12.812 29.39 27.554 42.72 44 2.817-.813 5.595-1.59 8.342-2.312 20.855-5.47 39.537-8.29 55.438-7.438.04.003.083-.002.125 0-22.667-19.712-54.264-31.164-91.095-33.718-5.082-.354-10.27-.53-15.53-.532zM303.97 80.03c-21.562 2.388-44.026 7.507-66.626 15.407 15.99 17.66 32.468 38.536 48.78 61.907 23.995-11.56 47.5-21.334 69.438-28.813-16.066-18.928-33.518-35.214-51.593-48.5zm-85.44 22.626c-13.546 5.663-27.074 12.303-40.405 20-13.326 7.694-25.858 16.07-37.53 24.97 7.092 23.307 17.243 49.447 30.093 77.03 22.672-15.747 46.71-30.66 70.968-44.187 9.165-5.113 18.372-10.008 27.53-14.69-17.127-24.312-34.34-45.67-50.655-63.124zm-149.905 11.28c-38.138 49.677-55.05 112.848-46.875 174.94 3.31-16.508 9.055-33.17 17.03-49.5 5.66-11.587 12.454-23.04 20.25-34.25-1.143-13.604-1.297-26.926-.405-39.782 1.258-18.144 4.608-35.45 10-51.406zm363.97 17.283c-12.153.062-27.47 2.45-44.69 6.968-.277.072-.563.175-.842.25 7.324 10.145 14.27 20.837 20.75 32.062 6.796 11.772 12.82 23.68 18.125 35.656 15.07-15.695 25.963-30.252 31.718-42 5.74-11.714 5.977-19.404 3.594-23.97-3.757-4.786-11.175-8.172-23.656-8.842-1.604-.086-3.264-.134-5-.125zM368 144.093c-22.03 7.154-46.267 17.008-71.22 28.906 9.52 14.358 18.94 29.516 28.095 45.375 9.8 16.972 18.748 33.787 26.844 50.25 22.99-16.374 43.228-32.814 59.905-48.406-5.658-13.54-12.31-27.055-20-40.376-7.307-12.656-15.224-24.584-23.625-35.75zm-243.03 16.22c-18.154 15.63-33.836 32.51-46.69 50 2.655 23.956 8.683 49.022 18.157 74.155 3.003-2.868 6.07-5.736 9.22-8.595 15.034-13.65 31.77-27.124 49.562-40.156-12.562-26.61-22.744-52.088-30.25-75.407zm348.624 13.75c-7.38 14.41-19.445 29.892-35.375 46.31-1.48 1.524-3.02 3.057-4.564 4.595 7.218 19.14 12.566 38.31 16.03 57.124 2.622-4.55 5.05-9.116 7.283-13.688 15.947-32.65 21.904-65.212 16.624-94.344zm-193.72 7.28c-9.68 4.906-19.428 10.06-29.124 15.47-24.617 13.727-49.004 28.972-71.844 44.967 7.554 15.228 15.883 30.787 24.938 46.47 10.09 17.478 20.52 34.067 31.03 49.625 16.8-8.184 34.047-17.31 51.44-27.344l.217-.124c17.484-10.094 34.09-20.518 49.658-31.03-8.224-16.88-17.413-34.185-27.5-51.657-9.384-16.254-19.05-31.77-28.813-46.376zm210.938 45.78c-3.31 16.504-9.054 33.14-17.03 49.47-5.66 11.585-12.45 23.038-20.25 34.25 1.144 13.603 1.297 26.925.406 39.78-1.26 18.17-4.627 35.492-10.032 51.47 38.154-49.677 55.077-112.87 46.906-174.97zm-427.937 6.75c-2.63 4.562-5.073 9.136-7.313 13.72-18.296 37.46-23.392 74.825-13.5 107C50.5 336.134 64.4 317.474 82 298.906c-8.804-21.764-15.182-43.624-19.125-65.03zm355.97 5.157c-16.91 15.315-36.763 31.083-58.94 46.72 11.38 24.628 20.673 48.224 27.658 69.938 18.16-15.637 33.83-32.536 46.687-50.032-2.39-21.56-7.51-44.027-15.406-66.625zM163.53 252.813c-16.314 12.067-31.604 24.464-45.31 36.907-4.935 4.478-9.62 8.988-14.095 13.467 4.927 11.044 10.53 22.057 16.813 32.938 7.698 13.334 16.065 25.883 24.968 37.563 21.845-6.648 46.165-16.024 71.844-27.75-10.192-15.228-20.275-31.392-30.063-48.344-8.714-15.094-16.78-30.074-24.156-44.78zM344.25 296.5c-15.242 10.203-31.404 20.296-48.375 30.094-16.96 9.792-33.77 18.75-50.22 26.844 16.375 22.975 32.79 43.233 48.376 59.906 13.544-5.66 27.05-12.306 40.376-20 13.34-7.702 25.88-16.092 37.563-25-6.65-21.833-16-46.182-27.72-71.844zM90.28 317.844c-19.393 21.894-32.452 42.998-36.718 60.812 3.484 3.39 9.91 6.103 20.782 6.844 13.06.89 31.105-1.287 52.25-6.5-7.722-10.582-15.047-21.76-21.844-33.53-5.272-9.132-10.095-18.36-14.47-27.626zm345.564 15.937c-12.417 14.567-26.635 28.496-42.47 41.47.576 2.125 1.134 4.234 1.657 6.313 5.584 22.167 8.28 41.618 7.47 57.78 19.145-22.583 30.298-53.746 32.813-90 .353-5.093.528-10.293.53-15.562zM228.5 361.626c-24.63 11.385-48.22 20.67-69.938 27.656 15.632 18.16 32.54 33.833 50.032 46.69 21.572-2.386 44.043-7.503 66.656-15.408-15.316-16.91-31.11-36.76-46.75-58.937zm148.813 26.063c-10.587 7.72-21.787 15.013-33.563 21.812-11.782 6.802-23.7 12.846-35.688 18.156 15.702 15.08 30.28 25.96 42.032 31.72 11.292 5.53 18.938 6.013 23.562 3.905.31-.14.594-.305.875-.467.283-.163.57-.335.845-.532 4.138-2.95 7.55-9.798 8.406-22.342.89-13.06-1.256-31.106-6.467-52.25zm-238.282 7.406c-2.124.574-4.233 1.133-6.31 1.656-22.17 5.582-41.62 8.277-57.782 7.47 22.584 19.135 53.75 30.266 90 32.78 5.083.353 10.273.527 15.53.53-14.555-12.406-28.468-26.62-41.437-42.436zm150.25 40.25c-19.134 7.22-38.286 12.56-57.092 16.03 4.553 2.625 9.11 5.078 13.687 7.313 32.65 15.948 65.213 21.903 94.344 16.625-14.412-7.38-29.895-19.444-46.314-35.375-1.534-1.488-3.077-3.038-4.625-4.593zm-177.06 10.312c49.682 38.15 112.863 55.098 174.968 46.906-16.515-3.308-33.158-9.08-49.5-17.062-11.59-5.66-23.063-12.446-34.282-20.25-13.603 1.147-26.925 1.298-39.78.406-18.145-1.258-35.452-4.608-51.407-10z" />
</svg>

  );
}

MeshBall.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}