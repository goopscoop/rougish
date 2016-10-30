import React from 'react';

export default function Ouroboros({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M361.066 19.732c-10.544.158-22.568 2.455-36.455 7.622-51.68-7.935-149.35 1.07-219.3 67.445-18.193 15.515-33.99 34.47-46.415 56.622C.422 255.664 39.01 391.614 145.668 454.862c106.657 63.247 239.682 29.71 298.156-74.534 48.044-85.65 30.543-192.683-36.38-263.228-4.687-2.128-8.99-3.64-12.84-4.567-4.584-1.104-8.377-1.48-11.557-1.312l2.148 1.858.076.067.078.068 2.322 2.1-12.53 13.865-2.247-2.032-3.72-3.218-1.288-1.065c-1.283 4.36-1.58 10.16-.23 17.346 42.46 51.85 55.07 135.21 23.86 191.16-38.675 69.334-128.217 93.756-197.552 52.372-69.335-41.384-85.586-127.136-46.91-196.47 23.7-42.486 68.22-66.402 112.18-66.188 10.397.05 20.762 1.456 30.812 4.283-3.377-10.83-5.62-21.137-7.033-30.027l-1.078-6.78 6.148-3.054c9.405-4.673 17.726-11.592 25.22-20.53l-5.632-.73 2.408-18.533 5.895.766.1.012.1.016 6.098.928-1.05 6.906c.122-.182.245-.358.366-.54l15.61 10.274c-9.408 14.29-20.69 26.305-34.432 34.647 2.702 13.958 7.508 30.712 15.408 46.554 14.18 26.138 32.952 50.527 59.078 53.91-13.96-17.62-22.724-34.61-26.727-49.976-4.515-17.336-3.088-33.33 6.057-44.384 6.86-8.29 17.515-12.383 29.738-12.146 4.075.08 8.322.64 12.662 1.685 16.536 3.985 35.473 14.414 56.78 32.487 8.212-10.56 9.83-23.052 7.668-37.082-31.578-9.323-45.42-70.888-102.362-70.038zm2.97 16.33c4.357.122 9.314 1.2 14.323 3.297 13.085 5.48 21.578 15.845 18.97 23.154-2.607 7.307-15.328 8.79-28.414 3.31-13.086-5.48-21.58-15.848-18.973-23.156 1.467-4.11 6.134-6.378 12.266-6.6.595-.02 1.205-.023 1.827-.005zm-84.733 7.69h.107l.106.002 5.76.103.107.002.105.003 5.147.21-.758 18.673-5.055-.205-5.51-.1-5.54.03-1.942.05-.516-18.68 2.073-.057.105-.004h.108l5.703-.028zm-27.282 1.303l1.81 18.6-1.387.134-5.13.62-5.233.756-5.01.844-.87.168-3.538-18.35.977-.19.106-.02.11-.018 5.275-.89.108-.017.11-.015 5.34-.774.107-.015.11-.013 5.4-.652.11-.014.106-.01 1.5-.145zm-38.213 7.088l4.826 18.054-1.2.323-4.704 1.376-4.69 1.495-4.597 1.587-1.76.654-6.507-17.52 1.867-.692.102-.04.105-.034 4.816-1.66.104-.038.105-.033 4.883-1.556.106-.034.105-.03 4.95-1.45.106-.03.107-.03 1.274-.34zm-36.672 13.525l8.12 16.83-3.857 1.86-4.173 2.138-4.14 2.242-3.782 2.162-9.278-16.222 3.877-2.217.094-.054.096-.05 4.322-2.342.096-.05.095-.05 4.395-2.25.098-.05.1-.048 3.937-1.898zm-33.528 19.61l10.733 15.3-.885.62-.045.032-3.582 2.64-3.652 2.816-3.574 2.888-2.325 1.97L128.2 97.282l2.423-2.05.08-.066.082-.066 3.717-3.006.082-.067.084-.064 3.795-2.927.084-.066.086-.063 3.87-2.85.087-.064.088-.06.93-.653zm-29.683 25.31l13.3 13.13-1.244 1.26-3.08 3.262-3 3.322-2.925 3.385-1.692 2.047-14.406-11.906 1.74-2.106.065-.078.068-.078 3.066-3.55.07-.08.067-.075 3.15-3.487.07-.076.07-.077 3.236-3.423.07-.077.07-.074 1.304-1.318zm287.633 18.435l1.978 2.14.072.08.07.077 3.173 3.588.07.08.07.08 3.057 3.62.068.083.07.085 2.942 3.655.068.084.065.086.947 1.234-14.82 11.383-.864-1.123-2.824-3.506-2.932-3.475-3.045-3.44-1.883-2.034 13.717-12.697zM89.152 140.666l15.39 10.605-1.03 1.492-2.438 3.707-2.355 3.755-2.273 3.804-1.367 2.404-16.248-9.233 1.412-2.485.05-.088.052-.086 2.375-3.976.053-.085.053-.087 2.465-3.93.054-.086.056-.084 2.55-3.88.058-.087.056-.082 1.088-1.578zm336.278 19.262l1.382 2.2.06.09.056.096 2.283 3.83.058.092.054.096 2.176 3.854.055.095.05.1 2.073 3.874.05.098.05.097 1.27 2.513-16.69 8.414-1.22-2.418-1.95-3.65-2.026-3.593-.025-.04-2.21-3.706-1.316-2.093 15.82-9.95zM69.994 174.57l16.985 7.797-.552 1.196-.008.02-1.79 4.13-1.655 4.06-1.555 4.063-1.113 3.11-17.596-6.296 1.145-3.2.036-.096.038-.094 1.638-4.283.036-.094.04-.094 1.73-4.253.038-.094.04-.09 1.827-4.22.04-.092.042-.09.634-1.38zm372.912 20.303l.024.06.04.102.038.102 1.453 3.988.038.102.035.103 1.354 4.002.035.104.03.103 1.257 4.013.03.103.03.104 1.158 4.027.03.104.026.104.448 1.703-18.077 4.746-.418-1.588-1.103-3.845-1.2-3.832-1.263-3.74-1.368-3.756-.053-.145 6.163-2.246 11.293-4.417zm-385.85 16.44l18.08 4.736-.185.702-.01.04-.99 4.16-.91 4.237-.817 4.246-.692 4.097-18.426-3.115.71-4.197.016-.103.02-.1.86-4.47.02-.104.02-.1.96-4.452.02-.1.024-.102 1.06-4.434.022-.1.027-.1.194-.742zm395.905 21.494l.048.275.017.104.014.103.587 4.067.016.104.01.102.497 4.073.014.1.01.105.404 4.072.012.102.008.1.314 4.073.008.102.006.1.11 2.016-18.66 1.037-.106-1.93-.295-3.83-.39-3.923-.47-3.834-.562-3.893-.024-.142 18.43-3.083zm-402.048 17.23l18.662 1.01-.224 4.17-.135 4.355-.035 4.352.068 4.27.025.66-18.673.734-.03-.77-.006-.11-.002-.108-.07-4.538-.002-.11.002-.108.035-4.537v-.108l.004-.11.142-4.535.002-.108.006-.107.232-4.303zm385.59 21.094l18.664.95-.186 3.662-.003.098-.008.096-.29 4.035-.008.098-.008.096-.373 4.025-.007.093-.012.096-.452 4.013-.01.093-.013.094-.385 2.87-18.523-2.477.37-2.762.434-3.845.357-3.83.275-3.844.18-3.56zM70.697 286.587l.422 3.12.665 4.16.008.046.807 4.342.892 4.23.375 1.582-18.185 4.31-.4-1.692-.028-.114-.024-.113-.943-4.47-.025-.112-.02-.113-.832-4.485-.02-.113-.02-.113-.722-4.497-.017-.112-.015-.11-.437-3.232 18.52-2.512zm360.948 19.842l18.185 4.302-.598 2.53-.02.088-.023.088-1.004 3.896-.022.088-.025.086-1.077 3.875-.024.087-.028.088-1.15 3.85-.026.085-.027.086-1.224 3.826-.027.084-.03.084-.003.01-9.35-3.187-8.392-2.684.055-.17 1.14-3.565 1.077-3.6.01-.03 1.038-3.74.94-3.648.01-.04.59-2.49zM78.78 321.113l.796 2.303 1.537 4.1 1.655 4.095 1.79 4.124.846 1.82-16.945 7.882-.917-1.967-.05-.11-.048-.11-1.86-4.283-.048-.112-.045-.11-1.742-4.313-.045-.112-.04-.11-1.628-4.343-.043-.11-.04-.112-.835-2.42 17.66-6.112zm341.665 19.24l17.184 7.344-.536 1.252-.033.08-.037.077-1.642 3.653-.034.08-.037.078-1.712 3.62-.037.077-.037.078-1.775 3.584-.04.078-.04.08-1.84 3.545-.04.077-.04.076-.633 1.166-16.428-8.913.55-1.012.017-.03 1.81-3.488.016-.03 1.62-3.272.027-.053 1.66-3.518.023-.048 1.533-3.415.502-1.168zM93.668 353.22l1.377 2.305 2.46 3.883 2.518 3.76 2.723 3.84.723.965-14.962 11.2-.803-1.07-.072-.1-.07-.097-2.82-3.978-.07-.1-.068-.1-2.697-4.023-.068-.1-.065-.103-2.576-4.066-.065-.102-.063-.105-1.445-2.42 16.04-9.59zM403.58 371.7l15.53 10.392-2.167 3.24-.048.072-.05.07-2.27 3.26-.05.07-.05.07-2.33 3.214-.05.07-.052.07-2.385 3.165-.053.07-.054.07-1.78 2.276-14.713-11.527 1.675-2.137.032-.04 2.312-3.07.04-.054 2.167-2.992 2.203-3.164.024-.033 2.07-3.094zm-288.91 10l3.246 3.513 3.387 3.486 3.588 3.507 2.43 2.256-12.722 13.69-2.55-2.37-.087-.08-.083-.082-3.695-3.612-.084-.084-.084-.084-3.57-3.67-.083-.086-.08-.088-3.34-3.615 13.73-12.68zm266.736 18.034l13.553 12.868-1.44 1.517-.063.064-.062.064-2.758 2.795-.065.064-.064.065-2.81 2.736-.063.063-.067.063-2.857 2.678-.065.065-.07.06-2.903 2.618-.07.063-.07.06-.7.606-12.23-14.13.644-.56 2.783-2.508.036-.033 2.655-2.49 2.614-2.544.035-.035 2.698-2.735.024-.024 1.314-1.386zm-240.517 6.174l3.48 2.643 4.284 3.093 4.4 3.015 2.536 1.65-10.194 15.665-2.597-1.692-.095-.06-.092-.062-4.605-3.156-.092-.063-.092-.067-4.472-3.227-.092-.066-.092-.068-3.578-2.717 11.3-14.887zm213.827 17.17l10.732 15.3-3.052 2.14-.08.054-.08.055-3.215 2.156-.082.057-.083.053-3.255 2.086-.084.05-.084.054-3.297 2.014-.086.052-.085.05-2.906 1.69-9.4-16.154 2.79-1.62 3.17-1.938 2.99-1.914.04-.026 3.016-2.02.023-.017 3.027-2.122zm-183.643 2.463l1.006.56 5.104 2.683 5.248 2.61 4.78 2.246-7.95 16.913-4.905-2.307-.093-.043-.094-.047-5.41-2.69-.094-.048-.094-.05-5.273-2.77-.095-.05-.094-.052-1.106-.615 9.07-16.34zm152.815 15.103l7.55 17.095-.963.426-.098.043-.1.04-3.55 1.474-.1.042-.1.04-3.585 1.387-.1.04-.103.036-3.615 1.306-.104.037-.103.035-3.647 1.22-.105.035-.107.034-2.158.666-5.51-17.858 2.073-.64 3.398-1.137 3.432-1.24 3.383-1.31 3.326-1.382.885-.39zm-120.013.007l.783.307 5.844 2.16.03.01 6.01 2.082.05.015 3.933 1.263.196.057-5.254 17.935-.277-.08-.113-.033-.113-.037-4.13-1.324-.103-.033-.1-.036-6.24-2.158-.09-.032-.09-.033-6.103-2.254-.09-.032-.092-.035-.89-.35 6.84-17.393zm34.06 10.098l1.954.36 3.807.6 3.885.51 3.773.395 3.75.293.16.008-.978 18.664-.275-.015-.12-.006-.122-.01-4.02-.315-.12-.01-.122-.013-4.037-.423-.12-.012-.12-.015-4.05-.53-.12-.017-.12-.02-4.067-.64-.12-.018-.118-.023-2.086-.383 3.386-18.382zm52.413.137l3.296 18.394-2.17.388-.115.02-.114.02-3.838.59-.117.016-.114.014-3.863.494-.118.016-.117.012-3.885.396-.117.014-.12.008-3.907.298-.12.01-.12.006-.882.045-.95-18.664.782-.04 3.59-.275 3.726-.38 3.63-.465 3.616-.555 2.028-.363z" />
</svg>

  );
}

Ouroboros.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}