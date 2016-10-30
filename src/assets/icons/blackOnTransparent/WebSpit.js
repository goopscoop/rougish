import React from 'react';

export default function WebSpit({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M21.438 17.656v9.938C37.81 43.897 54.236 59.792 70.78 75.25c2.573 12.667 1.725 23.156-2.124 32.438-15.92-18.03-31.71-35.61-47.22-52.782l.002 27.907c70.88 78.78 146.137 165.605 206.343 263.156 13.8 52.237 8.507 101.07-26.5 145.936h23.032c8.083-12.15 14.338-24.677 18.938-37.47 15.217 1.72 33.785 5.172 48.03 13.377 3.376 7.964 6.63 16 9.75 24.093h20c-3.345-8.968-6.838-17.854-10.5-26.656 8.66-10.96 22.278-19.576 37.94-24.938 11.79 20.602 21.207 38.808 26.624 51.594h20.125c-5.083-14.244-14.946-33.968-27.626-56.312 20.542-3.283 42-1.254 57.937 6.03l.314.157c11.46 16.573 22.16 33.27 32.03 50.126h21.563c-11.953-21.14-25.167-41.973-39.468-62.562 2.386-9.1 5.464-17.228 9.436-24.563l47.156 36.97V418l-36.5-28.594c7.515-8.648 17.01-16.088 29.063-22.844 2.47 1.22 4.956 2.42 7.438 3.625v-20.843c-18.542-9.172-36.76-18.583-54.688-28.25-1.054-13.162.976-23.972 6.53-33.75 6.17-10.858 17.096-20.864 34.876-30.25l4.19-2.22c3.075.052 6.108.03 9.092-.06v-18.72c-4.68.146-9.552.092-14.625-.188-9.012-15.84-13.766-31.516-15.906-47.406 10.3-4.778 20.49-10.258 30.533-16.375V150c-65.106 42.96-132.462 57.01-204.47 27.656-71.11-32.4-142.686-72.663-197.124-105.5-19.133-17.603-38.152-35.753-57.064-54.5H21.438zm69.093 75.75c9.104 8.28 18.228 16.462 27.407 24.5-2.14 9.614-6.785 21.5-13.343 31.125-7.563-8.876-15.15-17.642-22.72-26.31 4.953-8.856 7.91-18.705 8.657-29.314zm43.157 38.156c8.516 7.292 17.06 14.502 25.657 21.594 11.636 23.238 15.422 49.608 8.062 73.188-16.436-21.38-33.276-42.186-50.25-62.438 7.905-9.9 13.208-21.488 16.53-32.344zm33.72 3.97c19.33 10.633 39.44 21.326 59.968 31.718-.643 2.09-1.78 4.563-3.594 7.03-.93 1.27-2.013 2.506-3.186 3.69-15.632-11.976-31.102-24.276-46.438-36.876-.196-.365-.394-.73-.594-1.094l-.437.25c-1.91-1.57-3.814-3.138-5.72-4.72zm76.968 40.187c6.032 2.968 12.09 5.89 18.156 8.78v.03c6.862 3.562 13.704 6.74 20.533 9.564 5.253 2.4 10.5 4.78 15.75 7.094 7.944 3.5 15.86 6.88 23.75 10.156-1.775 2.63-4.25 5.393-7.407 7.906-6.508 5.18-15.358 9.116-23.75 10.094-18.86-12.937-37.46-26.262-55.812-40 1.152-1.29 2.243-2.63 3.25-4 2.21-3.008 4.123-6.236 5.53-9.625zm-55.72 8.593c25.305 22.866 49.936 45.837 73.626 69l-81.405-9.938c8.618-18.825 10.685-39.22 7.78-59.063zm259.658 11.656c2.107 12.503 5.76 25.073 11.53 37.624-25.556-3.827-54.49-11.692-85.03-22.344 25.004-.867 49.547-6.166 73.5-15.28zm-108 22.56c14.673 5.778 29.14 11.077 43.312 15.72-7.58 15.442-11.644 30.8-13.188 46.03-19.927-12.048-39.524-24.437-58.812-37.25 5.526-2.412 10.66-5.55 15.188-9.155 5.49-4.368 10.29-9.51 13.5-15.344zm61.406 21.314c18.968 5.555 37.247 9.83 54.5 12.375-10.454 7.697-18.568 16.23-24.064 25.905-5.7 10.035-8.58 21.023-9.125 32.688-11.698-6.502-23.257-13.142-34.717-19.875.57-17 4.48-33.964 13.406-51.094zm-122.845 3.53c29.595 20.37 59.846 39.808 90.938 58.345.64 15.733 3.538 31.3 7.53 46.624-30.25-35.6-63.362-70.51-98.468-104.97zm-83.47 20.595l28.97 3.53c15.58 14.313 37.374 41.2 59.313 71.875-6.406 12.17-10.73 26.36-12.938 43.22-22.624-41.445-48.19-80.912-75.344-118.626zm58.564 7.155l29.968 3.656c9.93 10.012 19.686 20.043 29.218 30.126-6.933 5.344-13.097 11.203-18.437 17.75-14.15-19.553-28.05-37.334-40.75-51.53zm135.343 42.063c26.142 15.11 52.89 29.6 80.312 43.562-20.473 14.02-34.436 31.82-43 53.844-5.67-7.747-11.472-15.448-17.438-23.125-8.76-25.44-16.983-50.004-19.875-74.283zm-63.375 5.437c8.626 9.347 17.076 18.738 25.312 28.156-21.46 6.077-43.836 14.744-61.188 31.126 4.605-28.262 16.223-44.755 35.875-59.28zM364.75 362.5c15.275 18.052 29.763 36.24 43.375 54.594-16.32-2.82-33.8-2.268-50.53 1.312-8.52-14.31-17.885-29.31-27.72-44.406 10.934-4.86 22.817-8.386 34.875-11.5zm-51.344 20.47c8.952 13.758 17.532 27.64 25.438 40.905-13.797 5.136-26.463 12.596-36.47 22.53-4.935-11.072-10.09-22.034-15.468-32.842 6.303-13.44 15.514-23.187 26.5-30.594zm-60.28 6.5c9.57 17.408 18.628 35.132 27.03 53.217-10.95-3.496-21.905-5.32-31.47-6.468 3.61-15.33 4.978-30.955 4.44-46.75z" />
</svg>

  );
}

WebSpit.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
