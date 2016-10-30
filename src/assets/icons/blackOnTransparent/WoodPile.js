import React from 'react';

export default function WoodPile({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M353.86 48.45c-10.626-.16-20.45 3.456-29.14 13.253l-.193.217-50.586 50.098.628.703c3.395 3.7 3.106 9.463-.642 12.804-3.748 3.342-9.505 2.97-12.793-.825l-5.985-6.712c-.784 1.096-1.627 2.16-2.544 3.178-5.116 5.68-11.746 9.448-18.688 11.023l5.438 20.302c2.54 8.98-8.582 15.417-15.102 8.738l-41.2 40.803c1.41-.082 2.83-.135 4.26-.135 40.63 0 73.616 33.616 73.616 74.672 0 .803-.036 1.598-.06 2.395l141.94-153.74c8.252-10.316 9.687-20.888 6.985-31.832C407.08 82.4 399.6 71.29 389.653 62.967c-3.085-2.583-6.396-4.885-9.835-6.854L258.56 182.725c-3.418 3.685-9.193 3.856-12.824.38-3.63-3.478-3.71-9.255-.175-12.83l115.932-121.05c-1.843-.34-3.68-.584-5.494-.694-.715-.042-1.428-.07-2.137-.08zM232.31 85.597c-4.224-.048-8.876 1.842-12.583 5.96-6.327 7.024-5.918 16.11-.913 20.62 5.006 4.508 14.088 3.968 20.415-3.057 6.325-7.024 5.917-16.112.91-20.62-1.877-1.69-4.328-2.672-6.992-2.867-.277-.02-.556-.032-.837-.035zm-27.95 63.94c-7.19-.12-13.63 2.222-19.577 8.925l-.19.217-99.734 98.77c10.89.53 20.967 4.222 29.386 10.167 1.406-11.834 5.547-22.84 11.785-32.332l.44-.67 6.39-8.21c1.915-2.138 3.963-4.148 6.11-6.05l70.907-70.224c-1.372-.268-2.734-.453-4.07-.534-.486-.03-.968-.05-1.448-.057zm193.3 14.415c-2.226.018-4.423.188-6.588.52L245.744 321.88c-2.968 3.93-6.313 7.544-9.976 10.806l-5.715 6.19c9.9 2.162 19.137 6.16 27.34 11.628-.004-.254-.02-.505-.02-.76 0-12.38 4.545-23.756 12.03-32.496l-.087-.086 1.358-1.344c1.008-1.09 2.06-2.135 3.16-3.13L381.01 206.545c8.52-9.363 20.055-13.314 30.816-12.662 10.908.66 21.093 5.423 29.33 12.316 8.238 6.892 14.684 16.035 17.278 26.538.788 3.194 1.158 6.54 1.078 9.922 4.62-9.422 4.9-19.095 2.242-28.918-3.484-12.87-12.614-25.674-24.47-34.967v.002c-11.194-8.77-24.658-14.314-37.27-14.79-.79-.028-1.573-.04-2.354-.034zm11.926 47.852c-5.712-.106-10.696 1.69-15.463 7.064l-.193.216-82.07 81.28c22.277 2.517 40.072 20.28 43.12 42.585l82.31-89.153c4.454-5.58 5.124-10.833 3.665-16.742-1.468-5.945-5.675-12.3-11.35-17.05-5.678-4.75-12.668-7.778-18.867-8.153-.387-.024-.77-.04-1.152-.047zm-222.274 8.097c-4.898 0-9.644.647-14.167 1.85 1.964-.262 3.962-.41 5.994-.41 24.715 0 45.067 19.99 45.067 44.566 0 24.576-20.355 44.567-45.068 44.567-24.718 0-45.07-19.992-45.07-44.567 0-2.83.282-5.593.797-8.277-2.044 5.915-3.166 12.284-3.166 18.94 0 31.482 24.873 56.668 55.613 56.668s55.61-25.185 55.61-56.668c0-31.482-24.87-56.668-55.61-56.668zm-8.173 19.44c-15.12 0-27.07 11.857-27.07 26.566 0 14.71 11.945 26.567 27.07 26.567 15.117 0 27.067-11.858 27.067-26.567 0-14.71-11.944-26.566-27.068-26.566zm-3.388 7.357c8.742 0 16.023 7.276 16.023 16.02s-7.285 16.02-16.023 16.02c-8.742 0-16.025-7.275-16.025-16.02 0-8.743 7.287-16.02 16.025-16.02zm-93.61 28.68c-21.25 0-38.427 17.364-38.427 39.2 0 21.835 17.177 39.2 38.426 39.2 21.25 0 38.426-17.364 38.426-39.2 0-3.01-.338-5.933-.957-8.74-1.208-2.858-2.23-5.813-3.08-8.838-6.297-12.877-19.314-21.623-34.39-21.623zm-.36 11.016c15.59 0 27.085 14.1 27.085 29.823 0 15.724-11.498 29.82-27.086 29.82-15.59 0-27.087-14.098-27.087-29.82 0-15.727 11.5-29.824 27.088-29.824zm372.58.325c-6.907-.118-13.068 2.118-18.79 8.567l-.193.22-96.345 95.415c27.285 1.628 49.25 23.576 51.547 50.926l96.64-104.672c5.384-6.735 6.24-13.283 4.48-20.42-.234-.944-.527-1.893-.868-2.844l-63.383 66.342c-3.41 3.703-9.196 3.888-12.837.41-3.64-3.48-3.72-9.267-.175-12.844l65.103-68.144c.345-.37.72-.71 1.122-1.018-.786-.76-1.604-1.497-2.447-2.203-6.715-5.62-14.988-9.227-22.463-9.68-.467-.028-.93-.046-1.39-.054zm-372.9 14.73c-7.59 0-13.74 7.046-13.74 15.738 0 8.69 6.15 15.736 13.74 15.736s13.743-7.045 13.743-15.736c0-8.69-6.152-15.737-13.742-15.737zm224.952 16.6c-17.17 0-31.04 14.004-31.04 31.694 0 17.69 13.87 31.695 31.04 31.695s31.04-14.006 31.04-31.696-13.87-31.693-31.04-31.693zm-2.285 11.155c11.398 0 19.28 10.28 19.28 21.092 0 10.814-7.884 21.09-19.28 21.09-11.4 0-19.282-10.277-19.282-21.09 0-10.814 7.883-21.092 19.28-21.092zm-163.378 5.13l-14.027 15.192c-2.17 2.835-4.59 5.46-7.235 7.838l-3.986 4.317c9.624 5.793 17.842 13.746 24.006 23.185 6.715-14.72 17.602-27.106 31.113-35.588-11.134-2.634-21.307-7.826-29.87-14.946zm72.31 20.704c-34.83 0-63.015 28.553-63.015 64.192 0 35.64 28.186 64.194 63.016 64.194s63.017-28.554 63.017-64.194c0-35.638-28.188-64.193-63.017-64.193zM68.68 370.114C42.442 374.65 22.5 397.775 22.5 425.96c0 14.03 4.95 26.802 13.146 36.66-5.09-7.662-8.066-16.868-8.064-26.725v-.004c-.005-26.31 21.188-47.994 47.29-47.994 26.105 0 47.298 21.684 47.292 47.996.005 20.913-13.386 38.89-31.986 45.393 22.622-5.065 40.05-24.075 43.076-47.908-.792-4.6-1.207-9.324-1.207-14.145 0-2.07.077-4.125.226-6.16-4.7-20.763-20.513-37.028-40.71-42.11-3.065.528-6.21.817-9.422.817-4.64 0-9.146-.586-13.462-1.665zm140.48.643c27.187 0 49.2 22.702 49.2 50.203 0 27.503-22.016 50.204-49.2 50.204-27.187 0-49.2-22.702-49.2-50.203 0-27.5 22.017-50.202 49.2-50.202zm0 17.998c-17.21 0-31.2 14.195-31.2 32.205 0 18.012 13.983 32.206 31.2 32.206 17.212 0 31.2-14.195 31.2-32.205 0-18.01-13.982-32.204-31.2-32.204zm81.856 8.148c1.256 4.498 2.16 9.143 2.642 13.912 3.67-4.432 8.01-8.273 12.852-11.38-.032.002-.062.003-.094.003-5.38 0-10.554-.9-15.4-2.536zm-216.14 8.992c-16.2 0-29.295 13.238-29.29 29.995v.005c-.005 16.756 13.09 29.994 29.29 29.994 16.197 0 29.295-13.24 29.29-29.995v-.004c.005-16.756-13.093-29.994-29.29-29.994zm133.706.256c8.967 0 14.96 7.945 14.96 15.953 0 8.01-5.993 15.952-14.96 15.952-8.966 0-14.96-7.943-14.96-15.952 0-8.008 5.994-15.953 14.96-15.953zm127.203 2.664c-20.47 0-37.013 16.723-37.013 37.766 0 21.042 16.544 37.766 37.013 37.766 20.47 0 37.012-16.723 37.012-37.766 0-21.042-16.543-37.766-37.012-37.766zM71.833 422.39c8.965 0 14.958 7.943 14.958 15.952 0 8.01-5.992 15.953-14.958 15.953-8.966 0-14.96-7.944-14.96-15.953 0-8.01 5.994-15.953 14.96-15.953zm267.923 1.423c14.727 0 26.683 12.307 26.683 27.037 0 14.73-11.958 27.037-26.684 27.037-14.728 0-26.682-12.308-26.682-27.037 0-14.73 11.955-27.038 26.682-27.038zm0 18c-4.802 0-8.682 3.845-8.682 9.037s3.877 9.037 8.682 9.037c4.8 0 8.683-3.846 8.683-9.037 0-5.193-3.88-9.038-8.684-9.038z" />
</svg>

  );
}

WoodPile.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
