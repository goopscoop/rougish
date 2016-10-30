import React from 'react';

export default function LindenLeaf({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M464.932 21.29C274.485 132.043-106.076-.603 69.61 354.474c11.676-12.52 24.432-24.32 37.908-35.48C67.722 262.93 54.24 199.74 90.232 154.392c-8.058 41.812 10.656 93.947 47.094 141.673 6.008-4.318 12.087-8.544 18.23-12.662 10.623-7.123 21.434-13.967 32.294-20.576-39.13-48.68-51.65-106.296-7.61-146.414-13.92 45.353 3.117 91.37 36.944 129.17 17.7-10.1 35.226-19.632 51.978-28.648-34.28-38.035-47.893-86.045-9.226-120.44-16.994 38.647.948 78.153 32.75 107.777 8.61-4.647 16.946-9.188 24.85-13.595 11.313-7.012 22.352-14.307 32.98-22.016-27.643-27.05-38.643-67.445 2.504-88.78-19.482 26.625-7.21 56.638 15.572 74.905 31.87-25.927 58.968-56.626 77.308-95.932-7.773 45.32-28.388 79.65-55.957 108.272 28.69 11.048 62.472 4.036 75.99-39.15-9.714 74.018-57.36 78.104-94.42 56.668-16.333 14.264-34.34 27.185-53.087 39.593 47.863 30.855 109.968 41.123 142.123 8.13-29.384 68.29-110.973 51.34-167.126 7.144-15.316 10.506-31.402 21.544-47.444 33.152 55.11 43.938 133.57 69.352 202.166 55.34-65.948 54.125-165.335 22.79-230.382-34.147-7.38 5.78-14.64 11.68-21.68 17.713-8.618 7.387-16.886 14.97-24.684 22.725 59.03 57.24 143.643 100.245 234.204 96.922-85.83 40.44-190.386-1.646-259.903-68.238-9.28 11.84-17.164 24.022-23.136 36.52-1.49 3.123-2.867 6.262-4.126 9.418C584.836 697.405 502.94 124.374 464.932 21.288zm-227.2 234.314c-24.016 13.397-48.39 27.648-71.77 43.324C94.374 346.923 33.86 406.27 23.024 485.322c5.26 3.375 14.588 7.464 26.88 9.916 13.06 2.605 29.48 3.515 47.915 1.71-12.04-37.794-7.385-73.55 7.88-105.505 16.808-35.178 45.69-66.18 78.222-94.062 17.278-14.808 35.602-28.676 53.81-41.776z"/>
</svg>

  );
}

LindenLeaf.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}