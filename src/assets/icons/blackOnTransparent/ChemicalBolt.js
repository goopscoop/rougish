import React from 'react';

export default function ChemicalBolt({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M39.344 15c-.778 0-1.554.045-2.344.125-12.645 1.288-21.85 12.573-20.563 25.22 1.288 12.644 12.574 21.85 25.22 20.56C54.3 59.62 63.506 48.334 62.218 35.688 61.01 23.832 51.01 14.997 39.343 15zm121.187 9.125c-.46 0-.937.015-1.405.063-7.48.76-12.918 7.457-12.156 14.937.76 7.48 7.456 12.918 14.936 12.156 7.48-.76 12.918-7.425 12.156-14.905-.714-7.013-6.63-12.252-13.53-12.25zM84.72 42.063c-.46 0-.91.014-1.376.062-7.48.762-12.95 7.457-12.188 14.938.762 7.48 7.457 12.918 14.938 12.156 7.48-.763 12.918-7.427 12.156-14.907-.714-7.013-6.63-12.252-13.53-12.25zm109.718 11.812c-.747 0-1.492.017-2.25.094-12.136 1.235-20.986 12.082-19.75 24.218 1.235 12.135 12.083 20.985 24.218 19.75 12.135-1.236 20.955-12.084 19.72-24.22-1.16-11.376-10.744-19.846-21.94-19.843zM119.53 77.72c-1.322 0-2.654.05-4 .186-7.677.782-14.606 3.768-20.25 8.22-5.088-4.18-11.774-6.408-18.843-5.69-14.072 1.435-24.34 13.99-22.906 28.064 1.434 14.073 14.022 24.308 28.095 22.875.483-.05.964-.112 1.438-.188 4.48 11.417 14.082 20.036 25.75 23.344-1.302 3.463-1.838 7.26-1.438 11.19 1.385 13.598 13.557 23.51 27.156 22.124 13.6-1.385 23.48-13.526 22.095-27.125-.692-6.8-4.06-12.686-8.97-16.69 7.707-8.002 11.996-19.206 10.782-31.124-2.053-20.166-19.062-35.193-38.906-35.187zm108.876 43.405c-1.983 0-3.984.076-6 .28-32.25 3.286-55.722 32.094-52.437 64.345.494 4.868 1.572 9.53 3.155 13.938-16.95 7.738-27.9 25.62-25.906 45.187 2.5 24.564 24.434 42.44 49 39.938 4.128-.42 8.062-1.405 11.75-2.844.047 1.358.14 2.72.28 4.092 3.11 30.542 28.016 53.592 57.72 55.282-4.984 15.2-6.945 31.654-5.22 48.594.05.49.1.98.156 1.468-.312.024-.624.03-.937.063-19.733 2.008-34.073 19.642-32.064 39.374 2.01 19.73 19.612 34.103 39.344 32.094 7.937-.81 15.016-4.143 20.5-9.125 24.262 28.84 61.9 45.574 102.22 41.468 64.763-6.594 111.907-64.453 105.31-129.217-4.034-39.622-27.25-72.647-59.5-90.813 1.907-7.465 2.546-15.39 1.72-23.5-3.77-37.03-36.846-63.99-73.875-60.22-25.248 2.572-45.788 18.78-55.125 40.564-9.945-8.12-22.39-13.146-35.813-13.813 10.245-11.804 15.77-27.628 14.063-44.405-3.08-30.236-28.592-52.758-58.344-52.75zm108.78 1.72c-.994 0-1.987.052-2.998.155-16.18 1.648-27.96 16.1-26.313 32.28 1.648 16.182 16.1 27.962 32.28 26.314 16.182-1.648 27.962-16.1 26.314-32.28-1.546-15.17-14.356-26.474-29.283-26.47zm59.564 26.343c-.46 0-.94.046-1.406.093-7.48.763-12.918 7.427-12.156 14.907.76 7.48 7.457 12.92 14.937 12.157 7.48-.762 12.918-7.426 12.156-14.906-.713-7.013-6.63-12.252-13.53-12.25zM61.562 202.375c-.46 0-.907.015-1.374.063-7.48.76-12.95 7.425-12.188 14.906.635 6.24 5.41 11.045 11.313 12.03-.555 2.602-.722 5.338-.438 8.126 1.465 14.388 14.3 24.87 28.688 23.406 14.387-1.465 24.87-14.33 23.406-28.72-1.466-14.386-14.3-24.87-28.69-23.405-2.86.293-5.572 1.042-8.06 2.157-2.028-5.095-7.024-8.564-12.657-8.562zm44.126 75.906c-.67 0-1.352.026-2.032.095-10.883 1.108-18.796 10.835-17.687 21.72 1.107 10.882 10.834 18.795 21.718 17.686 10.883-1.107 18.795-10.803 17.687-21.686-1.04-10.203-9.648-17.815-19.688-17.813zm48.78 37.25c-1.467.002-2.945.068-4.437.22-23.873 2.43-41.243 23.782-38.81 47.656 2.43 23.874 23.75 41.244 47.624 38.813 10.225-1.043 19.265-5.562 26.062-12.25 5.16 2.962 11.255 4.397 17.625 3.75 16.182-1.65 27.962-16.102 26.314-32.283-1.648-16.18-16.1-27.96-32.28-26.312-1.783.18-3.495.523-5.158 1-7.74-12.493-21.584-20.598-36.937-20.594z" />
</svg>

  );
}

ChemicalBolt.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
