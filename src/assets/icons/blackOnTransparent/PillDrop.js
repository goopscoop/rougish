import React from 'react';

export default function PillDrop({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M106.033 21.55C77.2 21.787 49.185 36.83 33.775 63.52c-23.137 40.074-9.433 91.807 30.79 114.787l108.824 62.488c.05.03.096.062.147.092 13.688 7.902 30.426 4.335 45.188-4.71 10.51-6.44 20.65-15.867 29.576-27.607 1.62 3.38 3.39 6.757 5.33 10.114 10.956 18.977 24.995 33.888 39.757 42.93 11.663 7.147 24.56 10.868 30.73 10.167l14.31-5.376c.048-.028.098-.053.147-.082.027-.015.05-.033.076-.048l108.913-62.542c40.21-22.984 53.904-74.707 30.77-114.775-15.408-26.69-43.422-41.733-72.255-41.97-.93-.006-1.86 0-2.793.025-13.548.34-27.19 3.96-39.715 11.19-51.58 29.78-74.06 42.965-92.297 53.58-2.996-6.65-7.57-12.215-14.003-15.928-.842-.486-1.698-.915-2.56-1.315l.06-.106c-22.24-12.84-41.192-24.12-106.23-61.67-12.522-7.23-26.166-10.85-39.714-11.19-.93-.023-1.863-.03-2.793-.023zm-.922 18.618c11.55-.25 23.322 2.566 34.087 8.78 42.294 24.42 64.396 37.32 81.3 47.18-2.852 1.264-5.668 2.753-8.415 4.436-14.762 9.045-28.803 23.956-39.76 42.934-10.956 18.978-16.85 38.592-17.3 55.898-.084 3.22.033 6.406.363 9.508l-81.54-46.822-.01-.006C42.482 144.164 31.88 104.18 49.962 72.863c11.867-20.552 33.103-32.215 55.15-32.695zm134.704 70.02c1.147-.03 2.234.038 3.258.195 1.822.278 3.445.84 4.854 1.654 2.94 1.698 5.397 4.767 7.033 9.193-.04.02-.08.04-.118.063-.257.148-.504.305-.754.46l-9.473 7.31c-4.792 4.607-8.68 18.78-8.29 33.72.205 7.805 1.525 16.08 3.907 24.555-9.26 14.926-20.706 26.43-31.27 32.902-11.36 6.96-20.44 7.713-26.077 4.46l.002-.003-.08-.047c-5.595-3.284-9.45-11.507-9.104-24.767.347-13.32 5.22-30.44 14.805-47.04 9.585-16.604 21.975-29.38 33.338-36.343 6.924-4.242 13.002-6.18 17.968-6.31zm8.94 143.134l.002.008v-.008zm.002.008c-14.145 117.223-66.34 101.897-67.387 175.754-.455 33.477 30.9 61.123 69.79 61.123 38.89 0 70.996-27.635 70.996-61.123 0-74.23-57.792-58.98-73.4-175.754zm-19.39 128.237c-4.727 7.142-7.487 15.702-7.487 24.91 0 24.95 20.218 45.176 45.16 45.176 5.416 0 10.608-.958 15.42-2.708-8.066 10.892-21.012 17.918-35.688 17.918-24.622 0-44.383-19.766-44.383-44.402 0-18.444 11.077-34.16 26.977-40.893z" />
</svg>

  );
}

PillDrop.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
