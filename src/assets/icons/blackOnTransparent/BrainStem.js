import React from 'react';

export default function BrainStem({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M211.563 18.25c-.488.007-.992.037-1.5.063l-.25.03h-.22c-9.283 0-17.057 3.042-20.343 6.876-3.08 3.593-4.738 8.46.063 19.186 5.252 8.088 9.415 19.063 13.03 33.125l-18.093 4.657c-6.1-23.728-13.714-33-18.47-35.093-2.376-1.047-4.654-1.143-8.31-.032-3.66 1.112-8.36 3.675-13.5 7.47-7.858 5.798-12.62 13.214-12.345 19.25.212 4.64 3.06 10.822 13.438 17.75.984.547 1.96 1.082 2.968 1.656l-.093.156c2.512 1.51 5.364 3.062 8.657 4.625l-8.03 16.874c-4.56-2.164-8.668-4.455-12.345-6.844-13.36-7.31-23.12-10.412-28.032-10-2.613.22-4.057.85-6.032 2.813-1.975 1.963-4.286 5.647-6.406 11.562-3.54 9.877-4.03 17.713-1.53 21.78 1.988 3.24 7.208 6.964 20.093 8.25 3.243.073 6.68.21 10.437.376v.095c.35 0 .674.003 1.03 0l.19 18.688c-3.745.035-7.255-.097-10.595-.344-11.04-.077-17.656.83-20.156 2.093-1.55.78-2.033 1.25-2.907 3.03-.875 1.78-1.776 5.05-2.376 9.938-.547 4.472-.156 7.656.72 9.782.875 2.127 2.082 3.65 5.312 5.375 6.457 3.45 21.635 5.8 47.186 3.625l1.594 18.625c-17.282 1.47-30.78 1.482-41.594-.468 4.703 15.06 14.56 21.905 25.72 21.905h94.155c10.546 0 19.79-7.745 23.407-22.125l8.063-32.063 9.906 31.563c4.653 14.806 14.243 22.625 23.53 22.625h94.19c11.196 0 21.038-6.896 25.718-22.063-10.95 2.103-24.684 2.134-42.406.625L367 195.063c25.55 2.175 40.73-.175 47.188-3.625 3.23-1.725 4.436-3.248 5.312-5.375.876-2.126 1.266-5.31.72-9.78-.6-4.888-1.47-8.158-2.345-9.938-.874-1.78-1.36-2.25-2.906-3.03-2.5-1.264-9.116-2.17-20.158-2.095-3.338.246-6.85.378-10.593.343l.155-18.688c.37.003.702 0 1.063 0v-.094c3.754-.165 7.17-.302 10.406-.374 12.892-1.287 18.135-5.01 20.125-8.25 2.498-4.068 2.007-11.904-1.533-21.78-2.12-5.916-4.43-9.6-6.406-11.564-1.974-1.963-3.418-2.593-6.03-2.812-4.932-.413-14.747 2.72-28.188 10.094-3.644 2.358-7.714 4.612-12.218 6.75l-8-16.875c3.277-1.557 6.122-3.092 8.625-4.595l-.095-.188c1.083-.615 2.132-1.195 3.188-1.78 10.228-6.878 13.04-13.013 13.25-17.626.275-6.034-4.52-13.45-12.375-19.25-5.14-3.793-9.812-6.356-13.47-7.468-3.657-1.11-5.965-1.015-8.343.032-1.647.724-3.63 2.344-5.78 5.093-.393.903-.804 1.81-1.25 2.72l-.533-.282c-3.6 5.498-7.486 14.26-10.906 27.563l-18.094-4.657c4.052-15.76 8.777-27.655 14.97-35.936 3.316-8.79 1.733-13.113-1.063-16.375-3.287-3.835-11.03-6.876-20.314-6.876h-.25l-.22-.032c-8.136-.408-13.506 1.53-17.967 4.875-4.463 3.345-8.076 8.497-10.845 15C266.588 51.195 265 69.102 265 82.22v.06l-.156 30.845v.125h-18.688v-.125l-.187-30.844v-.06c0-13.12-1.59-31.025-7.126-44.032-2.77-6.504-6.382-11.656-10.844-15-4.183-3.136-9.13-5.05-16.438-4.938zm44.218 217.906c-7.85 10.703-19.43 17.656-32.75 17.656h-42.936c2.046 4.275 5.368 8.15 10.062 11.75 13.724 10.526 38.908 16.903 64.063 16.782 25.153-.122 50.134-6.77 63.593-17.594 4.192-3.372 7.266-6.975 9.28-10.938h-39.156c-12.98 0-24.2-6.99-32.156-17.656zm23.407 63.03c-8.13 1.216-16.506 1.805-24.875 1.845-8.494.042-16.987-.492-25.25-1.655l.907 17.78h-18.314v18.69h19.28l.94 17.905h43.936l1.094-17.906h19.03l.002-18.688h-17.875l1.125-17.97zm-46.343 73.252l.906 17.656h-15.313v18.687h16.282l.843 16h35.875l.968-16h14.625v-18.686h-13.467l1.093-17.656h-41.812zm3.687 71.03l.814 15.407h-14.5v18.688h15.437l.814 15.437h28.125l.967-15.438h16.563v-18.687h-15.406l.937-15.406h-33.75z" />
</svg>

  );
}

BrainStem.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
