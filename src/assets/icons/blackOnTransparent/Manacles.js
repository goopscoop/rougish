import React from 'react';

export default function Manacles({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M158.06 18.422c-36.695 0-69.95 6.1-94.865 16.498-12.458 5.2-22.882 11.456-30.625 19.096-7.742 7.64-12.924 17.156-12.924 27.62 0 .78.04 1.552.096 2.32h-.1v70.25c0 10.46 5.187 19.974 12.932 27.612 7.745 7.638 18.172 13.894 30.63 19.094 24.92 10.4 58.173 16.502 94.85 16.502 36.678 0 69.93-6.102 94.85-16.502 12.46-5.2 22.886-11.456 30.63-19.094 7.746-7.638 12.93-17.15 12.93-27.613v-20.703c9.27.424 17.71 1.55 25.307 3.23-.798 3.753-.985 7.68-.637 11.55.94 10.456 5.445 21.254 13.047 30.91 7.602 9.655 17.04 16.57 26.984 19.935 2.417.818 4.914 1.416 7.43 1.762-3.297 5.552-8.22 11.055-15.012 16.196-4.39-5.606-10.9-9.44-17.896-11.457-4.414-1.273-9.136-1.933-14.036-1.972-.7-.005-1.402.002-2.11.022-5.653.16-11.514 1.132-17.39 2.93-11.75 3.593-21.61 9.89-28.347 17.945-4.25 5.08-7.327 11.186-8.227 17.595-3.977.162-8.04.264-12.25.264-7.765 0-15.21.498-22.326 1.438-4.75-4.465-11.02-7.302-17.568-8.58-2.576-.503-5.235-.798-7.952-.885-1.018-.033-2.046-.036-3.08-.01-7.237.18-14.813 1.786-22.29 4.812-11.39 4.61-20.66 11.75-26.663 20.363-5.74 8.233-8.578 18.567-5.275 28.215-10.067 12.647-16.583 26.92-19.236 41.44-.624.295-1.245.608-1.854.96-9.362 5.405-13.828 15.76-14.393 26.244-.566 10.484 2.35 21.814 8.496 32.457 6.144 10.642 14.497 18.834 23.86 23.587 9.36 4.753 20.563 6.063 29.925.658.207-.12.397-.253.598-.377 11.812 4.73 25.68 7.51 41.473 7.867v12.76c0 10.462 5.187 19.975 12.933 27.614 7.745 7.637 18.17 13.892 30.63 19.092 24.92 10.4 58.173 16.504 94.85 16.504 36.677 0 69.93-6.104 94.848-16.504 12.46-5.2 22.888-11.455 30.634-19.093 7.745-7.64 12.93-17.153 12.93-27.615V361.11c0-.106.01-.21.01-.315 0-.105-.01-.21-.01-.315v-.396h-.012c-.23-10.182-5.338-19.442-12.905-26.908-7.743-7.64-18.167-13.897-30.625-19.096-24.916-10.4-58.168-16.498-94.863-16.498-36.696 0-69.95 6.1-94.866 16.498-12.458 5.2-22.882 11.456-30.625 19.096-7.744 7.64-12.927 17.156-12.927 27.62 0 .78.04 1.553.096 2.323h-.1v38.778c-11.41-.283-21.247-1.943-29.628-4.662 1.115-3.32 1.76-6.834 1.95-10.367.566-10.485-2.35-21.815-8.495-32.458-6.144-10.643-14.5-18.833-23.86-23.586-2.735-1.388-5.627-2.47-8.583-3.19 2.238-8.604 6.232-17.206 11.986-25.24 3.724 2.22 7.92 3.75 12.24 4.592 10.305 2.012 21.93.692 33.32-3.92 11.392-4.61 20.66-11.75 26.665-20.363 4.323-6.203 6.995-13.597 6.646-20.992 4.518-.398 9.198-.61 14.046-.61 5.697 0 11.203-.15 16.543-.425 4.364 6.35 11.35 10.637 18.898 12.812 10.088 2.908 21.785 2.614 33.537-.98 11.752-3.594 21.61-9.892 28.347-17.946 4.44-5.307 7.587-11.732 8.323-18.455 17.06-11.132 28.024-25.383 31.982-40.676 8.43-6.693 11.35-17.54 10.414-27.963-.938-10.456-5.444-21.254-13.046-30.91-7.602-9.655-17.04-16.57-26.984-19.935-3.73-1.262-7.645-2.008-11.53-2.096-1.297-.03-2.59.013-3.87.136-4.963.475-9.75 2.143-13.905 5.285-10.607-2.854-22.495-4.62-35.57-5.145V81.95c0-.106.01-.21.01-.315 0-.106-.01-.21-.01-.315v-.396h-.012c-.23-10.182-5.336-19.442-12.902-26.908-7.742-7.64-18.166-13.897-30.624-19.096-24.916-10.4-58.17-16.498-94.865-16.498zm0 18.69c34.588 0 65.87 5.96 87.667 15.056 10.898 4.55 19.377 9.9 24.697 15.15s7.36 9.904 7.36 14.317c0 4.412-2.04 9.065-7.36 14.314-2.635 2.6-6.05 5.224-10.145 7.765-25.566-12.5-61.797-19.834-102.223-19.834-40.424 0-76.645 7.32-102.217 19.833-4.094-2.54-7.508-5.164-10.143-7.764-5.32-5.25-7.36-9.903-7.36-14.315 0-4.413 2.04-9.067 7.36-14.317s13.797-10.6 24.696-15.15C92.19 43.07 123.473 37.11 158.06 37.11zm-.003 65.458c30.217 0 57.918 4.62 78.966 11.82-21.05 7.217-48.743 11.766-78.962 11.766-30.228 0-57.93-4.55-78.984-11.77 21.048-7.197 48.77-11.816 78.98-11.816zm191.517 30.582c1.67.07 3.59.435 5.774 1.174 5.826 1.972 12.726 6.725 18.293 13.795 5.568 7.072 8.568 14.894 9.118 21.02.55 6.127-1.038 9.786-3.442 11.678-2.403 1.893-6.333 2.578-12.16.606-5.826-1.972-12.726-6.723-18.293-13.793-5.567-7.07-8.567-14.894-9.117-21.02-.55-6.127 1.038-9.786 3.442-11.678 1.2-.947 2.785-1.59 4.796-1.752.503-.04 1.033-.05 1.59-.028zm-28.05 89.24c3.342.022 6.4.45 8.986 1.194 5.91 1.704 8.748 4.508 9.642 7.434.895 2.925.11 6.836-3.836 11.554-3.946 4.72-10.87 9.433-19.476 12.065-8.606 2.63-16.984 2.597-22.895.893-5.91-1.703-8.748-4.508-9.642-7.433-.895-2.926-.113-6.837 3.834-11.555 3.946-4.718 10.873-9.433 19.478-12.065 4.303-1.315 8.55-1.966 12.46-2.074.488-.013.97-.02 1.448-.015zm-116.596 30.702c1.762.047 3.414.225 4.924.52 6.037 1.178 9.11 3.722 10.257 6.558 1.147 2.836.71 6.8-2.807 11.848-3.518 5.046-10.003 10.35-18.344 13.726-8.343 3.377-16.692 4.077-22.73 2.9-6.037-1.18-9.107-3.724-10.255-6.56-1.148-2.836-.713-6.8 2.804-11.846s10.004-10.35 18.345-13.726c6.256-2.533 12.517-3.562 17.803-3.42zm150.53 63.177c34.59 0 65.87 5.96 87.667 15.058 10.9 4.55 19.376 9.9 24.695 15.15 5.32 5.25 7.364 9.905 7.364 14.317 0 4.412-2.044 9.065-7.364 14.314-2.636 2.6-6.052 5.226-10.148 7.767-25.56-12.48-61.792-19.834-102.217-19.834-40.052 0-76.002 7.23-101.517 19.488l.51 1.062c-4.625-2.763-8.467-5.636-11.352-8.483-5.32-5.25-7.364-9.903-7.364-14.315 0-4.412 2.044-9.067 7.364-14.316 5.32-5.25 13.796-10.603 24.695-15.152 21.8-9.097 53.08-15.057 87.67-15.057zm-214.036 29.033c2.013.127 4.382.795 7.125 2.187 5.485 2.785 11.635 8.472 16.135 16.266 4.5 7.793 6.35 15.965 6.02 22.107-.332 6.143-2.426 9.537-5.075 11.067-2.65 1.53-6.636 1.645-12.12-1.14-5.486-2.783-11.638-8.47-16.138-16.265-4.5-7.793-6.35-15.965-6.02-22.107.33-6.142 2.426-9.537 5.076-11.066 1.324-.765 2.982-1.177 4.996-1.05zm214.033 36.427c30.225 0 57.92 4.61 78.973 11.82-21.053 7.217-48.747 11.766-78.97 11.766-30.23 0-57.934-4.552-78.99-11.773 21.056-7.213 48.762-11.813 78.987-11.813z" />
</svg>

  );
}

Manacles.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
