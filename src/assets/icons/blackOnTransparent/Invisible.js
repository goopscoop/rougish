import React from 'react';

export default function Invisible({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M262.53 12.22l-2.936 18.468 2.72.437 2.155.5 2.124.625h.03l1.595.563.155.062.344.125 1.936.813.125.062 2.033 1 1.312.72 9.03-16.345-1.78-1-.22-.125-.217-.094-2.532-1.218-.22-.093-.248-.126-2.563-1.063-.25-.092-.25-.094-2.594-.906-.28-.094-.25-.063-2.656-.78-.28-.063-.252-.062-2.718-.594-.28-.06-.283-.064-2.75-.437zm-12.06.092l-2.376.22-.313.03-.28.032-2.938.5-.28.03-.282.063-2.906.657-.28.062-.283.094-2.81.844-.282.062-.282.094-2.78 1-.25.094-.25.125-2.75 1.155-.25.125-.22.125-1.344.656L237.688 35l.844-.438.064-.03 2.156-.938 2.78-1 2.282-.657 1.75-.406h.063l2.688-.436.156-.032 1.78-.156-1.78-18.593zm-38.564 18.75l-.812.813-.156.156-.157.19-2.124 2.343-.156.156-.156.155-2.03 2.5-.126.156-.125.157-1.97 2.594-.124.19-.126.155-1.844 2.72-.094.186-.125.157-1.75 2.844-.093.157-.093.188-.656 1.156 16.312 9.126.438-.812.218-.344 1.313-2.125.06-.094.157-.25 1.375-2.03.188-.25.063-.094 1.437-1.906 2-2.438.03-.03 1.532-1.688.313-.313.5-.5-13.22-13.218zm88.22 1.875l-14 12.376 1.312 1.468.28.314 1.376 1.718.03.063.22.25 1.562 2.156 1.28 1.907.22.313 1.438 2.344L295 57.937l.188.313.218.438 16.656-8.5-.406-.782-.094-.156-.093-.156-1.533-2.75-.093-.157-.094-.187-1.656-2.656-.094-.157-.125-.156-1.72-2.56-.092-.157-.125-.157-1.813-2.468-.125-.157-.125-.155-1.906-2.344-.126-.155-.125-.156-1.595-1.782zM191.187 67l-.22.688-.062.187-.062.188-.906 3.468-.063.19-.03.186-.782 3.53-.063.19-.03.186-.657 3.626-.032.187-.03.188-.5 3.656-.03.186-.032.188-.313 3.344 18.594 1.843.28-2.936.47-3.344.06-.344.595-3.25.625-2.812.063-.25.03-.125.72-2.75.218-.69L191.188 67zm128.28 2.25l-11.093 3.188-6.938 1.718.063.25.03.094.626 2.625.656 3 .032.22.03.124.438 2.75.063.343.375 2.78.03.313v.03l.25 2.814v.125l.033.25.062.906 18.656-1.06-.092-1.25v-.345l-.344-3.53v-.157l-.03-.188-.47-3.47v-.155l-.03-.188-.595-3.406-.033-.186-.03-.156-.688-3.376-.033-.156-.062-.187-.813-3.282-.03-.188-.063-.156v-.094zm-113.25 36.53l-18.562 1.94.094.968v.187l.03.188.564 3.75.03.187.032.188.688 3.656.03.187.032.19.844 3.593.03.187.064.188.97 3.5.03.187.062.188.875 2.75 17.814-5.688-.875-2.75-.782-2.78-.032-.19-.062-.186-.72-3.22-.56-2.906-.033-.188-.03-.187-.406-2.97-.063-.375-.06-.594zm97.282 1.72l-.375 2.53-.03.157-.033.22-.656 3.343-.687 2.906-.033.094-.062.28-.813 2.814-1.156 3.5-.125.344L317 130.31l.28-.75.064-.187.062-.188 1.156-3.468.063-.19.063-.186 1-3.594.062-.188.063-.187.875-3.656.03-.19.032-.218.72-3.718.06-.188.033-.22.437-2.905-18.5-2.78zm-86.844 29.438l-6.094 3.843-1.156.19-.187.03-.19.063-3.03.656-.22.03-.186.063-2.906.78.718 2.688-2.562 1.595 1.5 2.375.125.188.093.156 1.906 2.75.124.156.125.156.968 1.313 1.78 6.686 2.532-.687.28-.064.126-.03 2.25-.5.375-.064 2.72-.5 15.094-2.656-9.28-12.187-1.72-2.282-.125-.157-.126-.186-1.438-2.03-.187-.314-.032-.03-1.282-2.032zm75.47 1.625l-.688 1.093-.25.344-1.5 2.063-.25.343-1.813 2.28-9.375 11.845 14.78 3.095 2.47.53.375.095 2.03.5h.033l.343.094 2 .594.25.093.126.032 1.125.407 3.126-9.032 1.688-2.375.125-.157.124-.187.937-1.44-1.186-.78 1.28-3.688-1.5-.53-.155-.063-.22-.064-2.72-.812-.186-.063-.188-.03-2.812-.72-.188-.03-.187-.063-2.845-.593-.063.28-4.687-3.06zm-109.063 12.75l-1.625 1.03-.157.095-.155.125-2.375 1.656-.156.093-.156.125-2.282 1.75-.156.125-.156.125-2.22 1.843-.155.126-.126.125-2.156 1.94-.157.124-.124.125-2.062 2.03-.156.125-.125.125-1.594 1.688 13.56 12.875 1.345-1.438.156-.156.095-.095 1.563-1.53.28-.25 1.595-1.44.03-.03.25-.22 1.626-1.343.155-.125.156-.125 1.657-1.28.25-.188.063-.03 1.72-1.19.343-.218 1.28-.812-10.03-15.78zm143.78 2.75L315.97 169.25l1.467 1.03.25.19.032.03 1.655 1.313.28.218 1.626 1.345.22.188.063.062 1.593 1.438.25.25 1.563 1.53 1.78 1.845.22.218 1.31 1.47 13.908-12.47-1.5-1.687-.094-.126-.125-.094-2-2.094-.095-.125-.125-.124-2.063-1.97-.125-.124-.125-.125-2.093-1.906-.125-.124-.158-.094-2.156-1.812-.125-.125-.155-.125-2.22-1.72-.155-.093-.125-.125-1.78-1.25zM154.564 181.5l-1.5 2.594-.063.125-.063.124-1.5 2.75-.062.125-.063.124-1.406 2.844-.03.093-.064.126-1.343 2.906-.064.125-.03.094-1.282 3-.063.095-.03.125-1.094 2.72 17.344 6.968 1-2.532.094-.187v-.032l1.094-2.532.093-.22 1.126-2.436.125-.25 1.157-2.344.032-.03.093-.22 1.218-2.28.126-.25 1.375-2.345-16.218-9.28zm199.656 3.22l-16.25 9.218 1.374 2.437.125.22 1.25 2.343.092.218 1.22 2.406.093.22 1.156 2.5.095.218 1.125 2.563.094.187 1 2.406 17.28-7.062-1.062-2.625-.062-.095-.03-.094-1.314-3-.03-.093-.063-.093-1.344-2.938-.064-.094-.062-.093-1.406-2.845-.063-.125-.063-.094-1.468-2.78-.063-.126-.06-.094-1.5-2.687zM139.874 218.5l-.5 1.97-.03.06v.095l-.814 3.438v.093l-.03.094-.72 3.47-.03.093v.093l-.688 3.53v.064l-.03.094-.595 3.562-.03.094v.063l-.345 2.343 18.47 2.844.312-2.188.03-.156.564-3.25.03-.156.595-3.188.03-.187.72-3.313.687-3.062.063-.188.437-1.78-18.125-4.532zm229.22 2.97l-18.064 4.78.533 1.97.03.155.782 3.094h-.03l.75 3.28.03.188.656 3.187v.03l.033.126.593 3.25.03.157.345 2 18.44-3.093-.376-2.156v-.094l-.03-.063-.658-3.56v-.095l-.03-.094-.72-3.5-.03-.093v-.093l-.782-3.47-.03-.093-.002-.06-.843-3.44-.033-.093-.03-.093-.563-2.125zm-235.158 35.5l-.093 1.342v.126l-.22 3.843v.126l-.186 3.844v.125l-.094 3.875v.125l-.063 3.906v2.032l18.69.032v-1.907l.06-3.78H152l.125-3.594v-.157l.156-3.562v-.156l.22-3.532v-.156l.094-1.188-18.656-1.343zm241.625 2.967l-18.625 1.5.125 1.375h-.03l.25 3.657v.155l.187 3.563v.156l.124 3.594v.125l.062 3.625v.156l.03 1.53 18.69-.062-.032-1.687v-.125l-.063-3.906v-.157l-.124-3.875v-.093l-.03-.064-.188-3.844v-.157l-.25-3.812v-.157l-.125-1.5zM152.5 294.47l-18.656 1.06.187 3.158v.125l.032.125.625 8 .032.093v.126l.78 7.438 18.594-1.97-.75-7.218-.03-.22-.626-7.78-.188-2.937zm204.625 2.905l-.25 3.53h.03l-.342 3.783v.125l-.375 3.78-.032.157-.406 3.78-.03.126-.345 2.78 18.53 2.377.376-2.907v-.125l.47-4.06v-.064l.03-.094.376-4.03.03-.063.002-.095.343-4.03v-.124l.25-3.533-18.655-1.312zm-208.594 31.47v3.092l-10.28 1.813 1.063 6.063 1.375 7.718h20.343v-18.686h-12.5zm31.19 0v9.967h-.126l.125 1.907v6.81h.436l.063.75 18.655-1.25-.625-9.436-.563-8.75H179.72zm130.03 0l-.656 8.655-.75 10.25 18.625 1.406.75-10.25-.908-.062v-10H309.75zm35.75 0v18.686h23.156l1.5-7.5.625-3.124-9.78-1.97v-6.092h-15.5zm-145.375 36.842l-18.656 1.22 1.218 18.656 18.656-1.22-1.22-18.656zm106.813.72l-1.375 18.624 18.625 1.408 1.406-18.657-18.656-1.374zm-60.282 11.906V397h18.688v-18.688h-18.688zM202.562 403l-18.656 1.22 1.25 18.655 18.625-1.25L202.563 403zm101.594.688l-1.375 18.625 18.626 1.375 1.406-18.625-18.656-1.375zm-57.5 12v18.687h18.688v-18.688h-18.688zM205.03 440.28l-18.655 1.22 1.22 18.656 18.655-1.22-1.22-18.655zm96.345.658L300 459.594l18.625 1.375 1.406-18.626-18.655-1.406zm-54.72 12.125v18.687h18.69v-18.688h-18.69zm-39.186 24.53l-18.626 1.22.75 11.656.594 8.717h15.75v-9.812l2.312-.156-.78-11.626zm91.155.626l-.813 10.936 1.563.125v9.908h16.406l.658-8.657.812-10.936-18.625-1.375zm-74 2.28v18.688h18.688V480.5h-18.688zm37.375 0v18.688h18.688V480.5H262z"  fillRule="evenodd"/>
</svg>

  );
}

Invisible.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
