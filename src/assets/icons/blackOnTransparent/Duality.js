import React from 'react';

export default function Duality({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M137.703 23.605c-1.176.038-2.058.133-2.642.133-.98 0-1.952.032-2.92.088v-.088c-6.42 0-12.584 1.54-18.324 4.414-.876.366-1.743.747-2.595 1.15l.096.202c-5.578 3.252-10.708 7.805-15.197 13.53-9.665 12.324-15.956 29.914-15.956 49.618 0 19.875 7.628 45.94 16.648 57.248l10.045 12.594-15.918 2.467c-15.464 2.398-26.127 9.174-34.622 19.63-8.495 10.456-14.537 24.92-18.55 41.89-7.39 31.243-7.78 70.335-7.8 106.206h41.438L81.918 496.21H194.63l10.515-163.524h42.046v-9.346c0-35.39-1.044-74.64-10.13-107.604-4.542-16.48-11.126-31.5-21.123-43.496-7.27-8.725-16.5-15.703-27.5-20.105 8.084-14.387 12.618-32.26 12.618-50.14 0-41.227-25.068-73.777-58.948-78.18h-.003c-1.757-.227-3.226-.247-4.4-.21zm242.193 0c-1.176-.037-2.645-.018-4.404.21-33.88 4.403-58.947 36.953-58.947 78.18 0 17.88 4.532 35.753 12.617 50.14-11.002 4.402-20.23 11.38-27.5 20.105-9.997 11.997-16.58 27.015-21.123 43.496-9.086 32.963-10.132 72.213-10.132 107.604v9.346h42.047L322.97 496.21H435.68l10.513-163.524h41.438c-.02-35.87-.41-74.963-7.8-106.207-4.013-16.97-10.055-31.434-18.55-41.89-8.495-10.456-19.157-17.232-34.62-19.63l-15.92-2.466 10.044-12.594c9.02-11.31 16.65-37.373 16.65-57.248 0-19.704-6.29-37.294-15.955-49.62-4.49-5.724-9.62-10.278-15.2-13.53l.095-.2c-.842-.398-1.697-.775-2.563-1.136-5.747-2.885-11.923-4.428-18.353-4.428v.088c-.967-.056-1.94-.088-2.92-.088-.585 0-1.467-.095-2.644-.133zM139.693 42.35h.004c23.37 3.034 42.668 25.778 42.668 59.646 0 18.664-6.866 38.574-15.95 49.516l-10.142 12.218 15.606 2.934c12.81 2.408 22.07 8.382 29.7 17.54 7.63 9.156 13.387 21.71 17.463 36.5 7.437 26.983 9.096 60.97 9.344 93.292h-40.77L177.105 477.52H132.14V42.58c.975-.09 1.95-.15 2.92-.15 2.75 0 4.335-.117 4.633-.078zm238.21 0h.003c.3-.04 1.884.078 4.633.078.97 0 1.945.06 2.92.15V477.52h-44.966l-10.512-163.524h-40.77c.25-32.322 1.907-66.31 9.345-93.293 4.076-14.79 9.833-27.343 17.463-36.5 7.63-9.157 16.89-15.13 29.7-17.54l15.606-2.933-10.142-12.218c-9.083-10.942-15.952-30.852-15.952-49.516 0-33.868 19.3-56.612 42.67-59.646z"  fillRule="evenodd"/>
</svg>

  );
}

Duality.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
