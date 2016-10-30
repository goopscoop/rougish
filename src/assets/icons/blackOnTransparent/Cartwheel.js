import React from 'react';

export default function Cartwheel({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M253.75 18.72C150.05 19.84 55.67 89.402 27.5 194.53-6.415 321.106 68.582 451.023 195.156 484.94c126.574 33.915 256.49-41.083 290.406-167.657C519.478 190.708 444.48 60.79 317.906 26.876c-19.777-5.3-39.657-7.957-59.22-8.156-1.65-.018-3.29-.02-4.936 0zm2.313 53.81c12.822-.048 25.848 1.247 38.843 4.032 1.034.222 2.06.48 3.094.72.488.115.98.223 1.47.343.51.123 1.018.247 1.53.375 1.004.255 1.994.512 3 .78 3.028.812 6.018 1.674 8.97 2.626 41.44 13.382 75.138 40.527 97.374 74.906.1.158.21.312.312.47.742 1.153 1.473 2.33 2.188 3.5.812 1.33 1.596 2.65 2.375 4 .733 1.27 1.452 2.555 2.155 3.843.594 1.09 1.177 2.18 1.75 3.28.107.207.206.42.313.626.08.16.17.312.25.47 18.66 36.453 25.32 79.192 16.187 121.78-.323 1.508-.7 3.026-1.063 4.533-.374 1.525-.747 3.037-1.156 4.562-.81 3.028-1.672 6.018-2.625 8.97-13.38 41.44-40.526 75.138-74.905 97.374-.157.1-.31.21-.47.31-1.153.743-2.33 1.474-3.5 2.19-1.328.81-2.65 1.595-4 2.374-1.27.734-2.554 1.453-3.842 2.156-1.09.594-2.18 1.177-3.282 1.75-.205.107-.417.206-.624.313-.157.08-.31.17-.47.25-36.452 18.66-79.19 25.32-121.78 16.187-1.507-.323-3.025-.693-4.53-1.063-.01-.002-.022.003-.032 0-1.516-.37-3.016-.75-4.53-1.156-3.03-.81-6.02-1.67-8.97-2.624-41.49-13.398-75.107-40.577-97.22-75-.068-.107-.15-.205-.218-.312-.773-1.21-1.505-2.43-2.25-3.656-.015-.025-.047-.04-.062-.063-.34-.56-.666-1.124-1-1.688-1.16-1.956-2.29-3.938-3.375-5.937-.7-1.287-1.395-2.57-2.064-3.875-.113-.22-.232-.436-.344-.656-18.464-36.382-24.94-79.035-15.812-121.533.324-1.506.693-3.025 1.063-4.53.002-.01-.003-.022 0-.032.37-1.516.75-3.017 1.156-4.53.33-1.242.672-2.463 1.03-3.69.08-.272.17-.54.25-.81.437-1.473.875-2.952 1.344-4.407.007-.022.024-.04.03-.063 13.345-41.36 40.262-75.04 74.44-97.313 1.284-.837 2.567-1.662 3.874-2.468.02-.012.042-.02.062-.03.99-.612 1.998-1.222 3-1.814.342-.202.688-.394 1.03-.594.687-.4 1.373-.797 2.064-1.187.485-.275.98-.544 1.47-.814.23-.13.453-.278.686-.406 1.314-.72 2.638-1.407 3.97-2.094 23.324-12.032 49.244-19.11 76.093-20.22 2.247-.09 4.49-.146 6.75-.155zm33.968 22.157l-25.75 96.188c3.07.368 6.15.96 9.22 1.78 3.062.822 6.01 1.85 8.844 3.064l25.78-96.22c-2.947-.97-5.933-1.874-8.968-2.688-3.038-.814-6.083-1.49-9.125-2.124zM182.5 109c-5.56 2.83-10.95 5.965-16.156 9.406l49.72 86.094c4.922-3.863 10.38-7.01 16.186-9.344L182.5 109zm211.72 56.594l-86.25 49.812c3.865 4.92 7.037 10.383 9.374 16.188l86.25-49.813c-2.812-5.572-5.953-10.965-9.375-16.186zM100.686 204.47c-.97 2.948-1.873 5.93-2.687 8.968-.81 3.025-1.522 6.065-2.156 9.093l95.687 25.626c.367-3.058.932-6.13 1.75-9.187.825-3.074 1.875-6.033 3.095-8.876l-95.688-25.625zM255.25 209c-20.188.584-38.553 14.304-44.03 34.75-6.68 24.925 8.23 50.79 33.155 57.47 24.925 6.677 50.79-8.233 57.47-33.158 6.677-24.924-8.233-50.79-33.158-57.468-3.115-.835-6.27-1.35-9.375-1.53-1.358-.08-2.716-.103-4.062-.064zm1.688 18.625c.408.008.807.037 1.218.063 1.88.117 3.792.43 5.688.937 15.17 4.065 24.033 19.424 19.97 34.594-4.066 15.17-19.425 24.032-34.595 19.967-15.17-4.064-24.035-19.423-19.97-34.593 3.446-12.86 15.01-21.206 27.688-20.97zm64.656 36.03c-.365 3.07-.928 6.152-1.75 9.22-.822 3.066-1.877 6.006-3.094 8.844l96.188 25.78c.97-2.948 1.874-5.934 2.687-8.97.81-3.025 1.524-6.063 2.156-9.092l-96.186-25.782zM195.78 280.22l-86.093 49.686c2.787 5.577 5.884 10.995 9.282 16.22l86.124-49.72c-3.857-4.922-6.983-10.384-9.313-16.187zm101.25 27.155c-4.92 3.86-10.383 7.01-16.186 9.344l49.812 86.25c5.566-2.81 10.942-5.96 16.156-9.376l-49.78-86.22zm-66.31 8.75l-25.782 96.188c2.947.97 5.933 1.874 8.968 2.687 3.026.81 6.065 1.524 9.094 2.156l25.78-96.187c-3.057-.367-6.128-.932-9.186-1.75-3.076-.825-6.03-1.873-8.875-3.095z" />
</svg>

  );
}

Cartwheel.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}