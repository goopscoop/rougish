import React from 'react';

export default function Daggers({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M255.844 19.156c-9.972.074-19.945 2.48-29.406 6.844v14.156h58.78V25.938c-9.4-4.524-19.348-6.855-29.374-6.782zM65.03 33.376c-16.145.014-31.578 5.59-44.093 16.343l3.688 13.75 56.78-15.22-3.655-13.656c-4.262-.735-8.505-1.223-12.72-1.22zm381.72 0c-4.21-.005-8.46.484-12.72 1.218l-3.655 13.656 56.78 15.22 3.69-13.75c-12.52-10.765-27.94-16.33-44.095-16.345zM240.72 57.187v99.156c-.49 1.148-.96 2.312-1.44 3.47h32.25c-.21-.51-.41-1.024-.624-1.533V57.188H240.72zM71.97 68.406L42.812 76.22 69 173.905c-.072.532-.118 1.062-.188 1.594l31.126-8.375c-.756-.985-1.517-1.963-2.282-2.938L71.97 68.407zm367.81 0l-25.655 95.78c-.77.983-1.52 1.978-2.28 2.97l31.092 8.313c-.067-.512-.118-1.02-.187-1.532l26.188-97.72-29.157-7.812zM229.5 178.5c-7.172 13.366-21.99 22.273-39.375 25.625v10.844c13.028-1.903 26.05-3.19 39.063-3.907 4.143-10.668 14.568-18.313 26.625-18.313 12.114 0 22.585 7.72 26.687 18.47 13.02.772 26.03 2.067 39.03 3.843v-10.938c-17.397-3.348-32.228-12.252-39.405-25.625H229.5zm-115.313 4.188l-50.78 13.593c-3.46 14.788-15.46 27.258-31.407 35l2.813 10.532c12.1-5.08 24.338-9.69 36.718-13.812 1.183-11.44 9.276-21.616 20.97-24.75 1.888-.506 3.77-.797 5.656-.906 9.736-.563 19.087 3.99 24.75 11.72 12.77-2.685 25.69-4.84 38.78-6.376l-2.78-10.438c-17.686 1.27-34.327-3.484-44.72-14.563zm283.375 0c-10.385 11.072-27.013 15.825-44.687 14.562l-2.813 10.438c13.095 1.537 26.007 3.69 38.782 6.375 5.663-7.728 15.014-12.282 24.75-11.72 1.885.11 3.8.4 5.687.907 11.696 3.134 19.79 13.31 20.97 24.75 12.384 4.122 24.616 8.73 36.72 13.813l2.81-10.532c-15.944-7.742-27.946-20.212-31.405-35l-50.813-13.593zm-141.75 28.75c-5.538 0-9.812 4.275-9.812 9.812 0 5.537 4.273 9.844 9.813 9.844 5.54 0 9.843-4.307 9.843-9.844 0-5.54-4.304-9.813-9.844-9.813zm-155.5 9.5c-.322-.012-.64.008-.968.03-.66.047-1.332.165-2 .345-5.35 1.433-8.403 6.68-6.97 12.03 1.434 5.35 6.682 8.372 12.032 6.938 5.35-1.432 8.402-6.682 6.97-12.03-1.076-4.01-4.293-6.72-8.095-7.22-.316-.04-.645-.08-.968-.093zm311.157.03c-.325.01-.653.022-.97.063-3.802.5-7.02 3.21-8.094 7.22-1.433 5.348 1.587 10.598 6.938 12.03 5.35 1.435 10.598-1.588 12.03-6.936 1.435-5.35-1.586-10.598-6.937-12.03-1.003-.27-1.996-.374-2.968-.345zm-182.908 8.75c-3.42.202-6.833.436-10.25.72-17.21 88.982-4.777 187.617 37.344 262.625 42.076-85.616 55.17-175.81 37.563-262.407-3.418-.29-6.837-.53-10.25-.75-2.75 8.496-9.41 15.323-17.814 18.28V410.25H246.47V248.187c-8.47-2.98-15.2-9.88-17.907-18.468zm-90.062.25c-3.4.615-6.778 1.28-10.156 1.97-.39 8.99-5.07 17.366-12.47 22.437l41.94 156.563-18.033 4.843-41.968-156.56c-8.893-.682-17.094-5.546-21.937-13.064-3.252 1.088-6.488 2.21-9.72 3.375 5.4 88.204 41.413 171.937 104.22 243.75 21.27-83.35 7.772-181.827-31.875-263.31zm234.78 0c-39.657 81.486-53.177 179.96-31.905 263.313 62.81-71.815 98.79-155.544 104.188-243.75-3.22-1.16-6.45-2.286-9.688-3.374-4.846 7.503-13.02 12.376-21.906 13.063L372 415.78l-18.063-4.842 41.97-156.563c-7.412-5.07-12.11-13.438-12.5-22.438-3.37-.688-6.734-1.355-10.126-1.968z" />
</svg>

  );
}

Daggers.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
