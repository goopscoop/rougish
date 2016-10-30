import React from 'react';

export default function RopeCoil({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M254.975 87.254c.014 3.753.25 7.9 1.13 12.623 20.567-.324 42.97.314 61.426 2.172-.454-4.327-.397-8.4.173-12.212-22.7-2.366-41.806-3.26-62.728-2.584zm-17.983.99c-30.506 2.324-57.81 7.82-78.87 15.27 1.52 2.57 3.475 5.714 5.58 9.236 18.06-5.958 44.528-10.26 74.33-12.078-.71-4.617-.99-8.795-1.04-12.428zm98.485 4.225c-.51 3.186-.412 7.078.607 11.977 17.317 2.758 31.027 6.566 39.78 11.047 6.22-2.21 12.698-3.51 19.046-4.078-18.683-10.09-40.566-15.6-59.433-18.947zm-194.15 18.04c-7.45 3.67-13.535 7.566-17.925 11.427-6.762 5.95-9.25 11.164-9.193 15.8 2.88 14.316 16.585 21.355 28.028 26.67 3.563-7.343 7.913-14.19 13.23-20.27-10.358-4.167-15.85-8.943-15.958-13.873.013-3.395 2.578-6.794 7.578-10.04-2.084-3.41-4.06-6.613-5.762-9.714zm243.872 20.935c-3.434 5.42-13.274 10.584-28.39 14.9 2.534 8.536 3.26 16.935 3.585 25.36 5.015-1.48 9.785-3.05 14.22-4.723 13.67-5.152 24.396-11.192 31.158-17.142 5.456-5.55 10.75-12.163 8.63-19.416-9.56-2.122-19.945-1.54-29.204 1.02zm-203.63 13.758c-13.12 8.26-21.86 21.633-27.566 37.818.904 14.655 1.645 34.896 13.03 45.51 4.34-31.856 21.238-64.244 39.595-81.57-8.192-7.766-16.495-7.075-25.06-1.757zm157.56 5.31c-17.885 3.476-39.25 5.782-61.763 6.667-6.585 12.47-6.903 17.475-8.293 27.47 26.736-.57 51.75-3.582 73.258-8.322-.21-9.07-.317-17.642-3.2-25.816zm-116.235 5.938c-9.243 7.686-16.304 15.748-21.698 24.073 15.364 2.316 32.104 3.77 49.707 4.14 1.478-9.554 2.15-16.747 6.414-27.075-11.733.01-23.324-.373-34.423-1.137zm-120.39.142c-7.716 11.592-.986 22.458 6.255 29.398 5.28 4.963 12.754 9.966 22.02 14.64 1.254-6.573 2.83-13.09 4.83-19.42-13.028-6.36-25.29-13.387-33.104-24.618zm318.175 3.918c-9.435 8.883-22.006 15.853-31.975 20.18 2.928 10.055 3.63 20.353.996 29.718 11.635-4.58 20.99-9.818 27.423-15.176 7.78-6.477 11.01-12.53 11.182-18.263.152-5.053-2.056-10.497-7.625-16.46zm-48.905 26.515c-19.506 6.366-42.65 11.054-68.076 13.586-8.227 7.115-8.265 18.093-7.225 27.183 24.37-1.16 46.822-4.32 66.035-8.97 10.164-11.204 12.988-18.51 9.265-31.798zM91.88 194.373c-11.4 15.04-5.362 27.834 5.58 37.68 6.796 5.994 16.563 11.86 28.692 17.072.228-9.665.774-19.735 1.875-29.828-12.764-5.863-23.455-12.538-31.595-20.19-1.62-1.522-3.136-3.105-4.553-4.734zm349.067.676c-6.305 9.83-14.86 16.724-24.006 22.198 2.03 7.352 2.218 14.395.503 21.025 11.534-6.864 26.488-19.466 26.563-32.62-.05-3.466-1.017-6.995-3.06-10.604zm-248.44 2.362c-2.826 7.15-4.736 14.43-6.038 21.772 5.16 1.118 10.473 2.155 15.94 3.087.395-8.7 2.656-15.963 7.262-22.385-5.878-.702-11.6-1.532-17.164-2.473zm39.83 4.516c-7.27 6.332-13.01 14.544-11.898 22.994 20.833 2.338 38.792 3.464 57.968 3.35-.57-9.523-.542-17.883 2.615-26.004-16.293.746-33.656.57-48.685-.34zM69.85 224.008c-5.203 10.11-1.048 22.213 4.295 29.414 1.338-4.07 2.886-8.804 4.968-14.344-4.048-4.65-7.228-9.7-9.263-15.07zm330.882 1.35c-21.764 8.88-47.255 14.405-67.503 17.206-6.34 6.692-3.766 16.04-2.392 23.415 24.458-3.914 46.288-9.695 64.055-16.77 2.764-7.645 7.323-16.37 5.84-23.85zm-255.486 3.02c-1.7 20.817-1.195 41.8-.937 58.862 4.928 20.133 23.537 7.066 23.47 4.37-.328-12.213-1.77-27.096-1.708-43.284-10.14-5.332-16.638-11.248-20.826-19.947zm303.127 8.446c-.872.938-1.785 1.855-2.723 2.76 1.367 10.563 1.658 22.46 1.31 32.004 4.697-5.575 7.016-11.134 7.32-16.705.314-5.772-1.52-11.768-5.907-18.06zm-263.94.37c-.53 9.593-.29 19.1.133 28.283 10.667 1.84 21.93 3.304 33.666 4.33-2.12-9.656-2.22-18.585 1.98-26.764-12.484-1.483-24.453-3.453-35.78-5.85zm127.733 7.642c-25.51 1.687-47.32 1.877-70.62.234-9.12 6.94-6.99 18.238-3.903 26.018 25.34 1.065 51.79.05 75.29-2.64-1.375-8.46-2.65-15.93-.767-23.612zM93.67 251.9c-1.928 5.69-3.423 10.636-5.268 15.37 13.248 9.227 24.64 15.364 37.916 20.824-.09-5.992-.217-12.586-.275-19.6-12.465-4.792-23.37-10.287-32.373-16.594zm335.152.565c-16.506 9.828-33.367 16.35-50.355 21.38-1.344 11.183-4.902 21.952-1.106 31.745 7.32-1.744 14.237-3.69 20.69-5.824 9.94-3.288 18.77-7.026 26.292-11.045 4.844-11.28 5.05-26.165 4.48-36.255zm48.285 11.058c-6.728-.222-11.75 6.133-9.978 12.627 1.26 4.894 1.795 9.924 1.677 15.045 6.686-3.195 13.668-3.755 20.103-1.218-.033-6.258-.797-12.54-2.412-18.813-1.058-4.367-4.9-7.493-9.39-7.64zm-417.06 1.065c-3.302 5.385-4.873 10.71-4.873 16 2.705 17.17 11.992 26.653 24.306 35.36-.924-10.175 1.904-20.11 7.915-27.464-10.735-7.283-20.11-14.416-27.348-23.896zm298.877 14.332c-17.988 4.112-37.665 7.13-58.502 8.88-7.375 7.54-7.675 18.36-4.283 27.606 22.654-.55 43.972-2.667 63.17-6.08-1.79-10.04-1.626-21.504-.386-30.406zm-173.426 5c.524 7.092-.07 15.36-4.027 20.894 5.174 1.128 10.463 2.183 15.868 3.15-1.155-7.845-1.243-15.226 1.435-22.114-4.503-.578-8.927-1.225-13.275-1.93zm32.66 3.98c-5.738 6.486-3.378 16.322-1.734 23.07 21.628 2.75 40.757 4.238 60.865 4.536-1.775-9.23-1.602-18.107 1.226-26.36-20.125.743-42.123.24-60.358-1.246zm235.373 2.62c-11.178 9.19-24.82 16.63-35.987 21.248-2.276 7.06-.484 13.415 1.197 19.632 14.232-6.124 25.983-13.035 34.635-20.22-.49-6.94 1.425-14.413.156-20.66zm-350.016 7c-9.282 8.418-5.538 22.616-2.682 30.703 13.937 6.595 29.81 11.908 43.137 15.54-2.363-10.75-2.303-20.545 2.913-29.294-15.798-5.16-29.907-10.247-43.37-16.95zm375.84 8.798c-3.23.89-11.908 8.268-22.76 24.11-5.513 9.653-12.717 19.27-21.283 28.603 2.728 6.967 6.148 13.09 9.194 19.365 20.34-20.584 36.11-43.852 41.957-67.99-1.84-2.24-4.42-4.704-7.105-4.087zm-80.9 12.2c-20.63 6.32-44.63 10.83-70.89 13.18-3.86 7.077-.485 16.076 1.76 22.48 27.07-3.525 51.67-9.132 72.48-16.27-1.843-6.764-3.422-12.91-3.35-19.39zm-232.817 1.132c-9 9.01-3.932 22.027-.383 29.172 17.758 3.68 37.06 6.407 57.418 7.983-2.76-9.15-2.993-18.603.447-26.825-20.34-2.38-39.638-5.883-57.483-10.33zm77.87 12.31c-7.953 6.984-4.95 18.435-.64 26.01 22.772.833 47.19.12 68.106-1.757-2.33-7.723-3.944-15.778-2.862-23.193-23.577.73-43.523.566-64.602-1.06zm-130.32 36.128c-20.428-.15-40.722 7.7-55.632 20.69.108 2.285.47 4.86 1.154 7.566 1.147 4.537 3.168 9.37 5.825 13.916 19.87-17.833 41.71-25.383 65.205-20.155.883-6.938 4.604-13.887 8.81-18.568-8.196-2.12-16.634-3.385-25.364-3.45zm307.258 5.648c-10.832 9.784-22.944 18.947-35.633 27.172 3.372 5.847 7.596 11.714 10.428 17.194 12.454-8.083 24.406-17.045 35.397-26.67-2.226-4.383-8.174-19.403-10.192-17.696zM158.23 378.32c-6.465 4.7-11.114 10.15-10.79 17.463 18.427 7.468 37.077 19.38 56.24 31.248.07.045.143.088.215.132.87-7.925 3.45-14.493 6.12-19.754-16.527-10.33-33.587-21.34-51.786-29.088zM42.87 406.182c-6.69 11.238-9.67 24.862-6.04 38.478 1.92 7.202 5.605 14.195 11.045 20.822 3.16-7.205 6.85-12.436 13.05-15.845-4.232-6.3-6.37-13.845-5.466-20.817-5.673-6.858-9.893-14.713-12.59-22.638zm326.484 4.12c-19.35 11.015-39.35 19.672-57.713 24.925-1.887 5.236-2.4 12.17-.53 20.86 22.182-5.587 45.937-15.523 68.693-28.558-3.312-6.433-7.005-11.522-10.45-17.227zm-144.192 6.376c-3.087 5.64-5.058 11.674-3.324 21.248 22.38 12.77 46.023 22.978 71.57 21.213-1.423-7.106-1.735-13.834-.988-20.003-22 1.55-43.95-8.657-67.258-22.46zM68.264 466.27c-1.9 1.506-3.11 3.636-3.733 6.283-.84 4.403-.692 7.85 2.988 10.25 4.6 3.152 10.89 1.93 13.98-2.713 3.088-4.645 1.78-10.918-2.906-13.942-3.175-2.93-7.098-2.383-10.328.122z"/>
</svg>

  );
}

RopeCoil.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
