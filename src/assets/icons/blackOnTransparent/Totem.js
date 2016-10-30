import React from 'react';

export default function Totem({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M201 23.363v50.12c4.603-5.394 11.432-8.846 19-8.846 13.7 0 25 11.3 25 25s-11.3 25-25 25c-7.568 0-14.397-3.453-19-8.848v18.792c11.52 7.362 21.84 12.615 31.514 15.9l15.435-30.87 8.05-16.1 23.484 46.97c9.675-3.285 19.996-8.538 31.516-15.9V105.79c-4.603 5.394-11.432 8.847-19 8.847-13.7 0-25-11.3-25-25s11.3-25 25-25c7.568 0 14.397 3.452 19 8.847v-50.12l-55 55-55-55zm19 59.274c-3.973 0-7 3.027-7 7 0 3.972 3.027 7 7 7s7-3.028 7-7c0-3.973-3.027-7-7-7zm72 0c-3.973 0-7 3.027-7 7 0 3.972 3.027 7 7 7s7-3.028 7-7c0-3.973-3.027-7-7-7zm-36 51.127l-21.05 42.095L256 196.91l21.05-21.05L256 133.763zm-229.92 4.873c2.246 9.43 8.006 18.132 16.838 26.445 4.568 4.3 9.936 8.4 15.877 12.268l9.678-38.713H26.08zm60.947 0l-12.004 48.01c4.656 2.363 9.497 4.6 14.47 6.695 10.593 4.46 21.776 8.27 32.857 11.457l11.027-66.163h-46.35zm64.596 0l-11.785 70.713c16.26 3.777 31.445 6.095 43.162 6.927v-77.64h-31.377zm177.377 0v77.64c11.717-.832 26.902-3.15 43.162-6.927l-11.785-70.713H329zm49.623 0L389.65 204.8c11.08-3.187 22.264-6.997 32.858-11.458a225.246 225.246 0 0 0 14.47-6.694l-12.005-48.01h-46.35zm64.904 0l9.678 38.713c5.94-3.868 11.31-7.97 15.877-12.268 8.832-8.313 14.592-17.015 16.838-26.445h-42.393zM201 145.805v102.832h110V145.805c-8 4.566-15.742 8.236-23.363 10.98l11.314 22.63-42.95 42.95-42.95-42.95 11.313-22.63c-7.62-2.744-15.363-6.414-23.363-10.98zm18 120.832l14.488 10.865c.752-3.474 1.65-6.76 2.723-9.766.134-.372.274-.734.41-1.1H219zm56.38 0c.136.365.276.727.41 1.1 1.073 3.007 1.97 6.292 2.722 9.767l14.49-10.867H275.38zM256 267.98c-.846 1.257-1.876 3.114-2.838 5.81-2.408 6.744-4.162 17.156-4.162 28.663 0 11.507 1.754 21.917 4.162 28.662.962 2.696 1.992 4.552 2.838 5.81.846-1.258 1.876-3.114 2.838-5.81 2.408-6.745 4.162-17.155 4.162-28.662 0-11.507-1.754-21.92-4.162-28.664-.962-2.696-1.992-4.553-2.838-5.81zm-61.523 2.764a54.308 54.308 0 0 0-2.717 8.45c-1.793 7.612-2.76 17.02-2.76 26.392 0 9.373.97 18.75 2.758 26.303a52.498 52.498 0 0 0 2.808 8.573l36.836-27.627c-.26-3.357-.402-6.82-.402-10.383 0-1.437.032-2.853.074-4.26l-36.597-27.45zm123.046 0l-36.597 27.45c.042 1.406.074 2.822.074 4.26 0 3.562-.143 7.025-.402 10.382l36.923 27.693a54.34 54.34 0 0 0 2.718-8.454c1.793-7.62 2.762-17.04 2.762-26.44 0-9.4-.97-18.82-2.762-26.44-.757-3.218-1.717-6.072-2.715-8.452zm-82.71 62.033L219 344.637h20.533c-1.285-2.296-2.363-4.783-3.322-7.47a71.727 71.727 0 0 1-1.398-4.39zm42.375 0a71.727 71.727 0 0 1-1.4 4.39c-.958 2.687-2.036 5.174-3.32 7.47H293l-15.812-11.86zM201 362.637v70.183l24.223-16.148-23.157-54.035H201zm20.648 0L256 442.79l34.352-80.153h-68.704zm88.286 0l-23.16 54.035L311 432.82v-70.183h-1.066zm-77.5 70.86L201 454.452v2.184h41.352l-9.918-23.14zm47.13 0l-9.916 23.14H311v-2.184l-31.436-20.957zM169 470.636v18h174v-18H169z"/>
</svg>

  );
}

Totem.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
