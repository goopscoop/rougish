import React from 'react';

export default function CoilingCurl({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M216.426 21.45c-9.01-.09-17.29 5.892-19.73 15-2.893 10.793 3.513 21.887 14.306 24.78 8.14 2.18 16.45-.933 21.283-7.224 9.466 9.2 13.93 22.49 9.85 36.14-8.996 30.09-44.5 48.927-79.537 40.516l-.088.365c-12.23-10.777-27.803-17.094-43.787-17.793-3.432-.15-6.88-.038-10.32.34-2.928-.322-5.96-.122-8.977.686-13.015 3.487-20.742 16.864-17.254 29.88 3.488 13.017 16.868 20.742 29.883 17.255 9.397-2.518 16.033-10.195 17.685-19.166 13.99 7.358 24.745 19.618 28.295 34.9 8.933 38.465-17.574 75.64-61.683 84.895-1.333-.014-2.662-.01-3.983.04-21.65.79-41.642 9.912-56.24 24.29-5.626 3.647-9.975 9.307-11.847 16.293-4.015 14.983 4.877 30.386 19.862 34.4 14.984 4.016 30.385-4.876 34.4-19.86 2.118-7.905.642-15.927-3.426-22.333 9.834-2.506 20.602-2.697 31.536.14 46.16 11.974 73.234 57.08 61.598 101.388-18.687 12.508-32.605 31.33-38.484 52.96-1.51 3.035-2.554 6.365-3.01 9.915-2.193 17.075 9.872 32.696 26.95 34.888 17.076 2.193 32.695-9.874 34.888-26.95 2.056-16.015-8.43-30.754-23.832-34.33 14.293-13.754 35.227-21.91 58.406-19.063 44.915 5.52 78.457 38.818 84.78 79.103h35.802c-6.39-56.884-50.945-104.217-110.145-111.818-3.356-.43-6.682-.685-9.97-.77-7.993-.206-15.766.587-23.208 2.246 3.77-45.372-20.65-88.8-61.114-109.306 36.756-20.608 56.423-64.348 45.018-106.914-.543-2.027-1.166-4.004-1.863-5.932 30.477 1.577 59.432-14.282 74.625-40.508 25.812 16.777 59.85 15.988 84.87-2.4 4.75 25.586 22.105 47.382 46.03 57.78-19.54 25.358-22.862 59.27-9.975 87.515-17.43 5.26-32.04 17.116-40.92 32.645-13.003-14.153-30.88-22.4-49.45-23.607 6.52-10.755 9.737-23.15 9.42-35.565 5.582.053 11.052-.886 16.193-2.685 1.328 6.412 4.61 12.503 9.767 17.242 10.66 9.797 26.83 9.418 36.29-.394l-13.456-12.97c-1.926 1.997-6.73 2.783-10.187-.396-5.358-4.924-5.956-12.072-2.14-17.127 4.708-5.342 8.293-11.804 10.25-19.115 5.213-19.46-5.823-38.71-23.24-44.816-1.438-1.07-3.088-1.9-4.923-2.393-7.783-2.086-15.784 2.532-17.87 10.316-2.085 7.783 2.534 15.783 10.317 17.87 4.952 1.325 9.985-.068 13.533-3.257 3.923 4.375 5.925 10.747 4.13 17.444-1 3.738-2.672 7.1-4.84 10.002-.81.853-1.552 1.743-2.24 2.66-6.28 6.58-15.458 9.978-24.91 8.684-2.132-6.366-5.275-12.503-9.5-18.16-10.563-14.138-26.767-20.836-42.497-20.09-7.353.35-14.6 2.332-21.12 5.935-2.592.527-5.112 1.598-7.37 3.286-8.178 6.11-9.856 17.693-3.746 25.872 6.11 8.178 17.693 9.855 25.87 3.746 6.396-4.778 8.793-12.9 6.622-20.127 9.89-.684 20.367 3.33 27.267 12.565 15.36 20.56 11.184 49.395-9.375 64.754l.18.24c-4.645 1.542-9.202 3.567-13.598 6.115-18.29 10.602-27.93 29.54-28.066 48.394-2.04 5.2-1.793 11.24 1.217 16.454 5.25 9.09 16.873 12.206 25.964 6.957 9.09-5.247 12.203-16.872 6.955-25.962-2.975-5.15-7.996-8.376-13.443-9.255 2.754-8.148 8.33-15.54 16.745-20.418 25.512-14.787 57.77-6.643 73.468 18.26-.965 4.636-1.476 9.433-1.476 14.347 0 28.977 22.382 51.46 48.54 53.666 2.19.863 4.567 1.353 7.063 1.353 10.653 0 19.29-8.634 19.29-19.288 0-10.653-8.637-19.29-19.29-19.29-9.02 0-16.57 6.2-18.68 14.564-10.48-5.772-18.234-17.08-18.234-31.004 0-25.208 17.8-46.064 41.578-50.764 2.207 2.845 4.616 5.58 7.232 8.188 26.068 25.977 67.117 24.58 90.885.894l-.288-.29c6.49-8.575 5.83-20.81-1.995-28.608-8.564-8.534-22.462-8.52-31.043.03-7.515 7.49-8.457 19.043-2.822 27.53-14.143 2.676-29.844-1.133-41.547-12.795-4.037-4.023-7.447-8.428-10.24-13.093v-1.54c-.29 0-.576.017-.865.02-14.124-25.077-10.68-57.194 10.375-78.883.815.122 1.634.234 2.46.33 31.64 3.67 59.1-17.51 65.397-45.495.53-1.462.908-3.003 1.098-4.613 1.335-11.306-6.782-21.54-18.13-22.857-11.35-1.317-21.633 6.782-22.968 18.088-1.144 9.692 4.66 18.594 13.492 21.767-8.378 9.998-21.72 16.287-36.736 14.545h-.002c-32.375-3.758-55.473-32.148-52.853-64.215 11.406-19.467 10.01-43.72-2.447-61.232-.93-3.068-2.6-5.958-5.025-8.383-7.864-7.864-20.616-7.865-28.48 0-7.865 7.865-7.864 20.617 0 28.48 6.498 6.5 16.328 7.612 23.986 3.37 2.926 12.12-.03 25.965-10.252 36.187-19.897 19.897-50.78 21.736-72.71 5.522.218-.73.428-1.46.626-2.2 8.265-30.846-8.12-61.135-34.438-72.545-2.472-2.58-5.642-4.555-9.345-5.547-1.687-.452-3.38-.677-5.05-.694z" />
</svg>

  );
}

CoilingCurl.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
