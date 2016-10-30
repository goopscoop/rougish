import React from 'react';

export default function Elderberry({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M58.576 29.404c-40.888-1.14-53.564 70.543-6.728 70.688v.004c37.58.117 70.66 6.477 100.36 17.787 8.646 83.748-16.3 168.856-68.78 232.12-4.372-1.542-9.154-2.13-14.065-1.524-16.997 2.09-29.08 17.585-26.984 34.61 2.093 17.025 17.57 29.128 34.567 27.037 16.997-2.09 29.08-17.585 26.987-34.61-.657-5.333-2.628-10.184-5.547-14.267 25.99-31.51 45.522-67.927 58.008-106.826 10.044 47.533 12.96 97.372 8.417 142.71-17.478 2.5-29.817 18.56-27.648 36.192 2.196 17.85 18.426 30.54 36.246 28.348 17.82-2.193 30.49-18.437 28.293-36.287-1.413-11.486-8.642-20.83-18.363-25.453 6.096-58.798.078-123.915-17.162-183.442 5.808-29.49 7.716-59.895 5.513-90.26 9.94 4.74 19.49 10.056 28.7 15.893 12.64 47.223 11.675 92.14 9.204 137.854 16.453-39.2 20.673-79.568 17.25-119.003 15.312 12.155 29.7 25.788 43.435 40.584l1.454 8.67c9.375 55.83 1.86 111.615-15.7 165.243-.74-.053-1.484-.09-2.237-.09-17.125 0-31.01 13.903-31.01 31.056s13.885 31.056 31.01 31.056 31.01-13.903 31.01-31.057c0-9.69-4.434-18.344-11.38-24.04 16.417-49.76 24.738-101.978 19.428-154.87 14.344 17.527 28.09 36.245 41.608 55.708l.777 7.196c4.844 44.835 2.982 89.25-2.258 133.62-18.948 2.78-33.5 19.12-33.5 38.87 0 21.702 17.567 39.293 39.233 39.293 21.666 0 39.23-17.59 39.23-39.293 0-17.18-11.013-31.774-26.35-37.113 4.5-38.298 6.568-76.987 4.032-116.214 25.97 21.178 45.51 44.763 66.672 68.65-2.312 4.347-3.628 9.304-3.628 14.572 0 17.154 13.885 31.057 31.01 31.057s31.01-13.903 31.01-31.057c0-17.15-13.885-31.056-31.01-31.056-5.053 0-9.818 1.218-14.034 3.365-22.4-25.39-44.186-51.934-75.277-75.7-11.335-19.128-23.13-37.694-35.5-55.548 35.69 14.514 74.107 34.817 101.357 56.458-1.533 3.916-2.383 8.174-2.383 12.635 0 19.134 15.487 34.642 34.59 34.642 19.102 0 34.59-15.508 34.59-34.642 0-19.132-15.488-34.643-34.59-34.643-7.707 0-14.823 2.525-20.573 6.793-36.876-30.005-89.47-54.557-133.137-68.998-13.875-18.21-28.465-35.533-43.893-51.81 47.205-10.508 96.006-9.74 135.895 2.312-.835 3.162-1.284 6.48-1.284 9.906 0 21.355 17.285 38.664 38.605 38.664 21.32 0 38.605-17.31 38.605-38.664 0-21.352-17.285-38.662-38.605-38.662-11.034 0-20.978 4.644-28.014 12.077-25.67-8.318-54.27-12.187-83.776-11.744-.383.006-.767.022-1.15.03 10.446-9.026 21.284-16.437 32.43-23.65 4.025 2.793 8.91 4.435 14.18 4.435 13.768 0 24.93-11.18 24.93-24.973 0-13.79-11.162-24.97-24.93-24.97-13.77 0-24.935 11.178-24.935 24.97 0 1.68.166 3.32.482 4.906-16.988 10.997-34.407 23.23-50.918 41.15-15.644 1.734-31.348 4.637-46.824 8.68-49.1-47.832-106.518-85.246-175.96-107.43-3.85-1.23-7.52-1.85-10.984-1.946z"  fillRule="evenodd"/>
</svg>

  );
}

Elderberry.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
