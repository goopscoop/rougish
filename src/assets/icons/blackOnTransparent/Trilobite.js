import React from 'react';

export default function Trilobite({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M160.75 19.813c-20.646.25-41.612 7.79-60.313 20.812-53.193 37.04-89.84 119.422-56.75 216.78 14.02 41.247 17.176 76.314 12.532 102.876-4.645 26.563-16.63 44.325-33.407 53.533l8.968 16.375c22.472-12.332 37.482-36.012 42.845-66.688 5.363-30.676 1.525-68.624-13.25-112.094-30.714-90.37 3.892-163.527 49.72-195.437 22.912-15.957 48.175-21.373 69.874-14.595 8.79 2.746 17.236 7.494 24.905 14.656 6.87-1.905 13.903-3.405 21.063-4.53-11.533-13.967-25.36-23.27-40.407-27.97-7.074-2.21-14.334-3.396-21.655-3.655-1.373-.05-2.75-.08-4.125-.063zm190.25 0c-.688.01-1.376.038-2.063.062-7.32.26-14.58 1.446-21.656 3.656-14.853 4.64-28.525 13.77-39.967 27.44 7.332 1.015 14.52 2.423 21.562 4.25 7.433-6.704 15.552-11.206 24-13.845 21.7-6.778 46.93-1.362 69.844 14.594 45.826 31.91 80.432 105.067 49.717 195.436-14.774 43.47-18.613 81.418-13.25 112.094 5.364 30.676 20.375 54.356 42.844 66.688l9-16.375c-16.775-9.208-28.792-26.97-33.436-53.532-4.644-26.56-1.488-61.628 12.53-102.874 33.09-97.36-3.524-179.74-56.718-216.78-18.7-13.023-39.694-20.563-60.344-20.813-.688-.01-1.374-.012-2.062 0zM258.875 67.72c-45.568 0-85.98 15.268-115.344 46.28-18.403 19.437-32.584 45.278-40.624 78 2.796-2.137 5.747-4.206 8.875-6.156 20.045-12.495 47.272-21.908 78.97-27.53l.813-.158h4.468l2.157 1.25c16.93 9.77 38.155 16.125 60.907 16.125 22.986 0 43.854-6.19 60.844-16.093l2.968-1.718 3.344.56c31.974 5.568 59.492 14.963 79.75 27.44 3.09 1.9 6.01 3.915 8.78 6-8.05-32.59-22.21-58.338-40.56-77.72-29.365-31.012-69.777-46.28-115.345-46.28zm-67.063 109.436c-28.934 5.36-53.488 14.142-70.156 24.53-17.108 10.666-25.03 22.14-25.03 32.5h-.25c-.45 6.048-.75 12.255-.845 18.658 9.775-9.317 22.855-17.17 38.532-23.75 16.838-7.066 36.7-12.63 58.625-16.375-.517 6.294-.938 12.71-1.312 19.218-18.94 3.514-35.94 8.447-50.063 14.375-14.73 6.182-26.31 13.498-33.78 20.906-7.315 7.252-10.587 14.128-10.72 20.905.003.03-.002.063 0 .094.635 7.003 1.506 13.89 2.563 20.686.893-.988 1.816-1.96 2.78-2.906 9.418-9.24 22.25-16.933 37.69-23.344 14.618-6.07 31.61-10.955 50.31-14.437-.018 2.17-.03 4.343-.03 6.53 0 4.218.038 8.402.094 12.563-16.265 3.207-30.918 7.485-43.22 12.593-13.886 5.766-24.762 12.58-31.75 19.438-6.69 6.563-9.663 12.7-9.906 18.687 1.997 7.853 4.237 15.54 6.78 22.97 1.404-1.7 2.936-3.34 4.564-4.906 8.68-8.356 20.432-15.226 34.53-20.97 11.845-4.823 25.412-8.8 40.22-11.812.345 6.382.74 12.67 1.218 18.844-12.858 2.73-24.48 6.208-34.406 10.25-12.562 5.117-22.362 11.158-28.594 17.156-5.302 5.104-7.876 9.803-8.53 14.282 4.204 9.452 8.844 18.456 13.905 26.906 1.72-2.303 3.7-4.468 5.876-6.47 7.432-6.83 17.324-12.346 29.125-16.936 7.987-3.107 16.865-5.79 26.47-7.97.837 6.367 1.76 12.573 2.75 18.595-8.278 1.923-15.823 4.207-22.438 6.78-10.306 4.01-18.314 8.745-23.25 13.28-4.503 4.14-6.255 7.63-6.53 10.72 6.897 9.326 14.325 17.786 22.187 25.25 1.29-1.478 2.736-2.842 4.25-4.063 5.613-4.53 12.744-7.94 21.155-10.812 3.854-1.316 8-2.51 12.375-3.563 1.613 6.326 3.34 12.347 5.156 18-4.177.962-8.04 2.04-11.5 3.22-7.036 2.402-12.41 5.276-15.437 7.718-.742.598-1.308 1.13-1.75 1.594 22.71 17.092 48.362 26.562 75.405 26.562 26.61 0 51.873-9.172 74.313-25.75-.472-.624-1.215-1.42-2.438-2.406-3.026-2.442-8.432-5.316-15.47-7.72-3.25-1.11-6.887-2.11-10.78-3.03 1.846-5.656 3.576-11.668 5.22-18 4.09 1.01 7.995 2.136 11.624 3.375 8.41 2.872 15.51 6.283 21.125 10.813 1.834 1.48 3.54 3.173 5.03 5.03 8.788-8.207 17.033-17.647 24.625-28.156-.737-2.598-2.538-5.483-6.125-8.78-4.935-4.537-12.944-9.273-23.25-13.282-7.288-2.835-15.713-5.317-25-7.344 1-6.013 1.903-12.207 2.75-18.562 10.58 2.264 20.35 5.123 29.03 8.5 11.803 4.59 21.663 10.107 29.095 16.937 1.763 1.622 3.372 3.367 4.844 5.19 4.768-8.078 9.16-16.648 13.155-25.626-.655-4.48-3.23-9.178-8.53-14.28-6.233-6-16.065-12.04-28.626-17.158-10.093-4.11-21.953-7.624-35.064-10.375.49-6.184.898-12.448 1.25-18.842 15.063 3.022 28.858 7.042 40.875 11.937 14.1 5.743 25.85 12.613 34.533 20.97 1.627 1.565 3.16 3.204 4.562 4.905 2.456-7.176 4.646-14.586 6.594-22.156h-1.564c0-6.24-2.95-12.644-9.937-19.5-6.99-6.857-17.897-13.672-31.783-19.438-12.01-4.986-26.264-9.19-42.062-12.375.06-4.232.094-8.485.094-12.78 0-2.113-.014-4.215-.033-6.313 18.243 3.468 34.842 8.276 49.157 14.22 15.44 6.41 28.27 14.104 37.687 23.343 1.53 1.5 2.97 3.054 4.314 4.656 1.186-7.36 2.154-14.83 2.844-22.437v-.095c-.133-6.777-3.405-13.653-10.72-20.906-7.47-7.41-19.05-14.725-33.78-20.908-14.295-5.998-31.504-10.973-50.72-14.5-.374-6.496-.826-12.9-1.343-19.187 22.197 3.746 42.3 9.33 59.313 16.47 15.677 6.578 28.756 14.432 38.53 23.75-.12-8.078-.537-15.866-1.218-23.376-2.06-9.098-10.045-18.77-24.78-27.845-16.722-10.298-41.312-18.954-70.19-24.28-19.17 10.455-42.02 16.874-66.936 16.874-24.938 0-48.096-6.622-67.28-17.064zm113.938 37.03c.552 6.737 1.022 13.588 1.406 20.564-14.747 7.02-32.27 10.037-49.687 9.938-16.666-.095-33.324-3.06-47.564-9.282.373-6.835.84-13.55 1.375-20.156 12.04 6.664 29.156 10.652 46.282 10.75 18.163.103 36.2-4.176 48.188-11.813zm2.5 55.69c.01 1.622.03 3.242.03 4.874 0 5.7-.07 11.345-.186 16.938-14.94 7.35-32.83 10.507-50.625 10.406-17.025-.097-34.033-3.19-48.47-9.688-.122-5.83-.188-11.71-.188-17.656 0-1.193.026-2.375.032-3.563 12.092 7.523 30.394 12.115 48.72 12.22 19.474.11 38.802-4.83 50.686-13.532zm-1.53 55.312c-.478 7.605-1.045 15.068-1.72 22.343-14.235 6.408-30.902 9.158-47.5 9.064-15.85-.09-31.69-2.794-45.406-8.47-.65-7.073-1.223-14.3-1.688-21.687 11.908 7.076 29.543 11.37 47.188 11.47 18.773.106 37.374-4.534 49.125-12.72zM301 381.313c-1.094 7.552-2.3 14.82-3.594 21.78-12.44 4.234-26.21 6.11-39.937 6.032-13.043-.074-26.065-1.916-37.94-5.688-1.254-6.85-2.436-13.98-3.5-21.406 11.578 5.232 26.547 8.322 41.532 8.408 15.906.09 31.702-3.183 43.438-9.125zm-75.063 51.5c7.966 4.054 20.26 6.72 32.5 6.78 12.307.062 24.534-2.53 32.375-6.718-2.17 8.255-4.473 15.77-6.906 22.5-8.14 2.06-16.85 2.95-25.562 2.906-8.772-.042-17.526-1.03-25.656-3.124-2.374-6.685-4.637-14.166-6.75-22.344z" />
</svg>

  );
}

Trilobite.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}