import React from 'react';

export default function WindHole({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M19.842 17.184v61.42C29.59 124.187 54.08 177.31 96.35 234.948c-19.817-18.264-37.322-36.358-52.72-54.082 25.615 59.5 69.548 119.182 123.13 162.795 48.123 31.57 119.676 29.46 162.902-10.613 6.732-7.988 13.065-16.54 18.98-25.682-20.605 78.87-90.272 129.942-216.61 139.61 22.292 6.705 46.503 10.895 72.36 12.234-74.885 23.496-140.058 19.362-187.47-3.782v38.822h344.572c12.548-25.422 22.592-53.765 29.526-84.895 4.948-48.52-4.294-110.44-32.512-182.982 17.547 27.72 31.866 54.315 43.36 79.518-.008-16.152-.728-32.81-2.237-49.982-.084-5.56-.53-11.03-1.29-16.398-33.654-52.997-81.454-71.595-133.21-64.133 59.48-17.147 105.816-5.343 143.067 40.62 61.71 66.54 84.012 167.01 60.17 278.837h25.113V184.81c-31.772-28.644-73.986-47.578-126.732-52.068 32.298-9.65 61.865-13.936 88.188-13.43 4.774.09 9.442.34 14.002.74-29.598-8.21-60.133-11.63-90.846-11.398-12.44.095-24.907.807-37.354 2.024l.088.05c-47.7 10.48-91.986 38.815-126.73 88.68 6.15-25.89 14.357-48.62 24.226-68.144-29.95 7.29-55.854 24.91-73.71 48.888-12.354 53.054 9.742 114.704 56.314 126.26-16.457-8.185-27.838-25.188-27.838-44.73 0-27.46 22.46-49.918 49.92-49.918s49.92 22.46 49.92 49.918c0 17.3-8.92 32.61-22.385 41.576-38.712 29.777-80.068 19.58-109.082-19.545-31.807-42.892-33.913-88.063-8.812-146.24-13.99 18.068-25.763 39.423-34.736 64.257-2.735-95.686 31.315-157.842 82.412-184.546H19.842z"/>
</svg>

  );
}

WindHole.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
