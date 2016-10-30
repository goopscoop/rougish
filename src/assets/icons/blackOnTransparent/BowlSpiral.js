import React from 'react';

export default function BowlSpiral({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M205.625 34.563c8.22 21.345 11.89 48.323 11.906 75.53.02 27.25-3.636 54.304-11.905 75.75 16.036-1.14 29.94-4.13 41.813-8.5 11.268-12.86 22.237-28.278 31.625-44.562 7.876-13.663 14.656-27.974 19.875-41.78-9.13-27.716-38.906-52.6-93.313-56.438zm122.063 21.593c-3.722 26.903-16.014 57.48-32.438 85.97-16.442 28.52-36.79 54.54-58.344 71.28 16.63 8.312 32.295 13.67 46.813 16.563 20.317-6.42 42.256-16.24 62.905-28.19 16.776-9.705 32.75-20.827 46.563-32.374 0-.01-.002-.02 0-.03 5.895-34.385-11.328-77.505-65.5-113.22zm-177.313 8.47c-15.173-.127-32.815 3.85-52.438 13.218 15.736 13.046 30.362 32.077 42.376 52.875 12.03 20.825 21.264 43.11 24.687 63.374 10.463-7.207 18.94-14.772 25.688-22.47 5.21-17.335 8.17-39.47 8.156-61.53-.006-8.946-.508-17.893-1.438-26.53-10.02-10.69-24.988-17.99-44.03-18.845-.99-.046-1.99-.087-3-.095zm-53.906 58.28c-.588.007-1.19.035-1.782.063-18.18.86-38.95 11.885-57.407 37.936 16.93 3.252 35.248 11.057 52.47 21 17.252 9.96 33.207 21.976 44.53 35.094 5.23-11.422 8.218-21.994 9.44-31.625-4.08-14.306-10.955-30.324-19.595-45.28-2.63-4.556-5.435-9.006-8.344-13.314-5.834-2.556-12.365-3.957-19.31-3.874zm342.467 26.5c-19 25.112-49.458 49.192-82.937 68.563-33.507 19.385-69.66 33.86-101.063 37.75 11.48 17.685 23.697 32.08 36.22 43.5 24.492 5.62 52.87 8.573 81.187 8.53 24.004-.036 48.026-2.23 69.687-6.344 24.64-32.096 30.827-85.508-3.092-152zM66.78 190.97c-18.664 1.095-38.328 17.025-42.436 53.468 13.29-4.236 28.886-6.027 44.625-6.032 15.766-.005 31.398 1.807 44.75 6.063-1.363-11.844-4.384-21.53-8.5-29.25-7.417-6.087-15.91-11.985-24.814-17.126-4.465-2.58-9.04-4.953-13.625-7.125zm2.19 66.124c-4.687 0-9.367.24-13.94.656-10.867 7.7-18.518 23.42-15.186 48.063 10.193-6.277 22.46-11.147 35.312-14.594 12.887-3.457 25.968-5.347 38-5-5.37-12.994-12.395-21.786-19.906-27.19-7.648-1.24-15.975-1.94-24.28-1.936zm426.467 48.156c-33.182 14.47-78.016 21.12-123.062 21.188-45.076.068-89.997-6.457-123.313-21 5.06 111.108 65.082 163.31 123.094 163.437 58.027.126 118.125-51.796 123.28-163.625zm-401.593 1.094c-4.58.72-9.273 1.672-13.875 2.906-5.394 1.446-10.698 3.26-15.657 5.28-.45 3.156-.198 7.113 1.124 12.033 2.07 7.703 6.983 17.308 15.532 27.937 3.705-7.192 8.923-13.89 14.874-19.844 5.96-5.962 12.688-11.185 19.906-14.906-7.986-6.396-15.42-10.76-21.906-13.406zm25.625 33.062c-3.586 2.35-7.17 5.23-10.407 8.47-2.845 2.845-5.397 5.95-7.563 9.093 17.968 12.058 40.552 7.024 58.5-5.314-16.893 1.393-31.168-4.46-40.53-12.25z" />
</svg>

  );
}

BowlSpiral.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
