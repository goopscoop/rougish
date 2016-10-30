import React from 'react';

export default function Earwig({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M55.836 28.59c-.682-.008-1.352-.004-2.008.012-10.49.253-17.153 3.2-21.37 7.668-4.215 4.468-6.71 11.194-6.27 21.564.442 10.37 4.09 24.004 11.785 40.047 4.768 9.94 11.075 20.797 19.007 32.442l71.176-76.4C116.16 47.008 105.028 41.594 94.88 37.6c-15.573-6.132-28.808-8.897-39.044-9.01zm119.836.494l79.33 205.252 24.078 22.43c14.3-12.52 32.123-19.167 50.156-19.817 3.852-.14 7.713-.004 11.55.405-1.73-5.99-3.855-12.23-6.427-18.73-18.454-46.654-59-104.866-126.89-168.29-10.213-9.538-20.985-16.37-31.798-21.25zm119.254 7.545L265.6 82.5c4.45 4.89 8.744 9.745 12.877 14.56l32.2-50.363-15.75-10.068zM144.418 63.884l-76.29 81.888c8.823 11.61 19.148 23.878 31.024 36.696l14.483 4.503 72.816-78.16-7.927-20.51c-11.908-9.288-23.304-17.418-34.105-24.418zm201.94 29.912l-46.004 30.27c3.87 5.092 7.54 10.127 11.044 15.11l45.237-29.765-10.276-15.615zm-152.42 34.396l-60.5 64.94 97.294 30.256-36.793-95.197zm191.576 47.416l-48.77 4.24c3.298 6.104 6.31 12.102 9.02 17.98l41.37-3.598-1.62-18.623zM34.704 182c5.583 9.95 12.94 19.732 23 29.13 68.28 63.786 129.182 100.34 176.872 115.49 6.404 2.036 12.54 3.68 18.41 4.966-3.772-20.823.685-42.925 13.55-60.963L239.9 245.81 34.705 182zm298.155 73.48c-.987-.013-1.974-.002-2.96.034-15.772.57-31.336 7.165-43.002 19.66-17.816 19.083-21.222 46.203-10.712 68.306 3.685-2.48 7.783-4.47 12.236-5.834 3.05-.934 6.13-1.535 9.193-1.824 1.34-.126 2.68-.192 4.012-.2 19.983-.13 38.644 12.792 44.777 32.814.827 2.698 1.378 5.416 1.698 8.128 10.76-2.912 20.876-8.764 29.068-17.54 7.844-8.4 12.884-18.363 15.187-28.768-16.542-3.03-30.933-14.942-36.173-32.05-3.824-12.48-2.057-25.4 3.837-36.048-8.54-4.342-17.844-6.57-27.16-6.68zm67.535 1.385c-.8.01-1.602.052-2.407.13-1.84.18-3.693.548-5.537 1.112-14.746 4.517-22.904 19.878-18.387 34.623 4.516 14.746 19.88 22.904 34.626 18.387 14.747-4.516 22.905-19.878 18.388-34.623-3.705-12.096-14.708-19.758-26.683-19.63zm-307.672 9.29L54.73 294.42l11.16 14.998 42.17-31.37c-5.062-3.803-10.178-7.78-15.337-11.892zm46.193 33.6l-23.516 41.92 16.3 9.145 23.052-41.09c-5.21-3.145-10.49-6.47-15.836-9.974zM490.01 315.23l-77.64 2.504c-.098 11.22-2.542 22.43-7.33 32.85 21.634-4.112 46.81 3.183 66.524 21.508 10.075 9.364 17.117 20.466 21.54 31.957l-3.094-88.82zm-289.567 18.385l-.658 41.322 18.69.297.545-34.168c-6.05-2.187-12.25-4.678-18.577-7.45zm101.4 20.668c-.8.01-1.602.052-2.407.13-1.84.18-3.694.548-5.538 1.112-14.747 4.517-22.905 19.878-18.388 34.623 4.516 14.746 19.88 22.906 34.627 18.39 14.747-4.517 22.905-19.88 18.388-34.626-3.705-12.096-14.708-19.758-26.683-19.63zm59.927 37.32c-10.896 4.32-22.572 6.188-34.155 5.577l3.088 88.683 89.608-3.845.002-.002c-11.84-3.584-23.366-9.783-33.47-19.176-21.715-20.182-30.53-47.91-25.072-71.236z"/>
</svg>

  );
}

Earwig.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
