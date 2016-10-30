import React from 'react';

export default function TreasureMap({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M242.563 27.656c-10.062.033-20.126.205-30.188.5l6.094 65.594-61.095-62.563c-31.256 2.57-62.494 6.655-93.75 12.532l34.25 28.405-48.063-.563c35.158 100.168 6.936 182.575-.312 292l95.75 105.844c10-1.326 19.856-2.423 29.563-3.344l21.53-42.156 18.532 28.844 41.5-33.594.813 43.094c82.943-.242 157.734 9.098 235.687 7.813-28.15-73.01-31.13-143.562-31.875-209.157l-33.25-19.125 32.688-33.874c-.43-21.333-1.342-42.006-3.625-61.937l-57.438.718 50.25-41.657c-3.843-15.477-9.052-30.4-16.125-44.718l-29.53-23.906c-53.8-5.488-107.607-8.924-161.408-8.75zm58.718 36.97l7.095 16.624 24.594 57.625 14.092-19.75 8.344-11.688 7.313 12.376 40.655 69.124-16.125 9.47-33.375-56.688-42.438 59.405-15.187-10.875 24-33.594-21.97-51.406-24.56 40.063 11.967 22.625-16.53 8.75-18.25-34.5-24.845 58.187-17.187-7.344 32.53-76.186 7.69-18.03 9.155 17.31 5.313 10.032 28.25-46.125 9.468-15.405zm-194.842 56.25h.093l.126.03.094.03 4.78 1.126.095.032.125.03 4.53 1.19.126.03.125.03 4.282 1.25.126.032.124.03 4.094 1.314.125.03.126.064.22.062-5.845 16.53-.343 1.095h-.03l-.22-.06-3.562-1.157-.25-.063-3.813-1.125-.25-.063-4.062-1.062-.22-.063-4.343-1-.093-.03-.125-.032 1.155-4.906 2.813-13.345zm37.874 13.374l2.657 1.53.186.095.156.125 2.657 1.656.155.125.188.126 2.437 1.688.188.125.187.155 2.28 1.75.19.125.155.156 2.125 1.78.156.158.19.156 1.936 1.844.188.156.156.188.844.875-13.53 12.875-.47-.5-.375-.344-1.22-1.156-.094-.094-.25-.22L144 156.44l-.156-.125-.188-.157-1.562-1.22-.188-.124-.156-.125-1.78-1.218-.314-.19-.03-.03-2.282-1.438L135 150.47l9.313-16.22zM173 166.625l.25.844.063.25.093.25.5 2.06.063.22.03.25.406 2.063.03.25.064.25.28 2.062.032.22v.25l.188 2.06.03.22v.22l.095 2.06v2.72l-.03.188-.095 2.062v.22l-.03.186-.19 2.064v.156l-.03.188-.156 1.156-18.53-2.406.124-.782.03-.344.126-1.343v-.064l.03-.312.064-1.688v-1.687l-.063-1.19-.125-1.593-.28-2.062-.314-1.563-.375-1.406-.03-.156-.125-.344 17.875-5.53zm-21.25 35.72l17.28 7.06-1.093 2.657-.062.157-.063.155-1.625 3.625-.062.125-.063.125-1.687 3.47-.03.093-.064.093-1.686 3.344-.063.063-.03.062-1.688 3.156-.03.064-.032.062-.313.563-16.343-9.064.25-.437.062-.126 1.53-2.875.095-.157 1.532-2.97.094-.218 1.47-3.03.124-.25 1.406-3.095.125-.313.97-2.343zm-16.47 34.093l17.69 6.03-.157.407-.032.063-1.03 3.5-.906 3.437-.03.22-.064.186-.656 3.314-.438 2.687-.03.22-.032.25-.188 1.906-18.594-2 .282-2.375v-.25l.03-.218.595-3.593.03-.22.03-.188.782-3.718.032-.22.062-.186.97-3.844.03-.188.063-.187 1.186-3.94.063-.186.06-.188.25-.72zm207.845 17.375l.875.093h.22l.186.03 1.906.25.22.033.187.03 1.874.344.187.03.22.032 1.813.406.218.063.19.063 1.78.468.22.063.186.06 1.72.564.218.062.22.063 1.655.624.217.094.188.093 1.625.69.22.092.186.094 1.594.75.188.125.218.095 1.53.844.19.092.187.125 1.218.75-9.75 15.938-1.124-.688-.094-.062-.75-.406-.406-.19-.75-.405-.187-.063-.22-.125-1.25-.5-.844-.312-1.28-.438-.282-.062-.156-.063-.938-.25-.344-.062-.062-.03-1-.22-1.47-.28-.218-.033-.187-.03-1.44-.188h-.06l-.5-.033 1.655-18.625zm-21.22 1.5l2.376 11.875 1.47 6.437-.188.03-2 .44-.156.03-.094.03-2 .533-.218.062-2.094.594-.22.062-2.155.688-.22.062-2.217.75-.22.094-2.312.844-.187.062-2.158.844-6.812-17.406 2.344-.906.094-.063.125-.03 2.687-.97.094-.063.125-.03 2.624-.876.125-.062.092-.03 2.594-.814.125-.03.095-.033 2.563-.718.093-.033.126-.03 2.5-.657.125-.03.126-.032 2.438-.532.125-.03.124-.032.062-.03zM284 271.156l10.97 15.156-1.72 1.22-.094.093-.094.063-3.156 2.156-.094.062-.125.063-3.218 2.092-.095.063-.094.063-3.28 2-.094.062-.125.063-3.31 1.906-.095.06-.125.064-1.063.594-8.937-16.407.875-.5.188-.092 2.937-1.688.22-.125 2.874-1.75.187-.125 2.814-1.844.22-.125 2.936-2.03 1.5-1.094zm-133.53 2.72l.124.437.062.28.47 1.376.06.124.908 2.187.062.19.594 1.186.125.22.844 1.5.124.187.97 1.437.092.125L156 284.53l.094.095 1.28 1.406-13.81 12.595-1.376-1.5-.22-.22-.187-.25-1.624-2.03-.187-.25-.19-.28-1.468-2.158-.187-.25-.156-.28-1.345-2.282-.156-.28-.157-.283-1.188-2.375-.125-.312-.125-.28-1.03-2.5-.126-.314-.095-.31-.875-2.595-.094-.313-.094-.312-.187-.72 18.094-4.655zm230.31 3.312l.845 1.312.063.156.093.125.97 1.69.063.124.093.125.938 1.75.062.124.063.156.905 1.78.063.126.062.125.844 1.876.062.125.063.095.81 1.938.033.125.062.093.78 1.97.033.125.062.125.75 2.03.03.095.033.094.718 2.092.033.094.03.125.157.5-17.813 5.626-.093-.312-.094-.22-.563-1.655-.062-.22-.594-1.594-.092-.22-.594-1.53-.094-.22-.625-1.436-.094-.25-.624-1.375-.125-.25-.655-1.313-.125-.25-.656-1.218-.156-.25-.657-1.156-.186-.282-.656-1.062 15.843-9.906zm-127.405 10.906l6.97 17.344-3 1.218-.095.03-.094.033-3.594 1.342-.093.063-.126.03-3.594 1.25-.094.033-.125.03-3.624 1.188-.094.03-.093.033-3.657 1.092-.094.032-.095.03-.188.032-4.968-18 .186-.062 3.25-.97.188-.062 3.22-1.03.217-.063 3.407-1.22v.03l3.188-1.217.22-.094 2.78-1.126zm-83.75 6.156l.25.125.063.03 2.218.876.375.126 1.97.688.25.062.156.063 2.094.592.125.032.22.062 2.56.625 2.314.5.186.033.156.03 2.75.438-1.468 8.72-.094.5-1.22 9.28-.186-.03-.156-.03-3.063-.533-.188-.03-.156-.032-3.03-.625-.156-.03-.188-.033-2.937-.718-.157-.064-.188-.062-2.844-.813-.186-.06-.22-.064-2.75-.937-.186-.064-.22-.094-2.655-1.03-.188-.094-.22-.094-.655-.28 7.625-17.064zm49.938 3.53l2.843 18.47-3.344.5-.125.03h-.125l-3.562.47h-.125l-.094.03-3.56.345-.126.03h-.125l-3.5.283h-.251l-3.47.187h-.25l-1.156.03-.406-18.686.906-.033h.25l2.97-.156 3.25-.217v-.032l3.31-.31.19-.033h.06l3.095-.406.124-.03h.094l3.125-.47zm174.5 18l.375 2.376.03.125v.158l.72 5.218v.125l.03.126.563 5.406v.219l.47 5.564-18.625 1.5-.438-5.344-.03-.22-.5-4.905v-.063l-.032-.218-.625-4.656-.03-.282-.376-2.125 18.47-3zM326.5 346.595c18.893 3.46 44.913 16.187 68.875 33.875 7.46-9.835 14.425-20.4 21.313-31.095l30.062 12.97c-4.686 12.21-14.99 25.518-28.563 37.186 17.017 16.166 30.87 34.515 37 52.94-13.806-18.108-31.07-31.73-50.28-42.814-23.387 15.846-52.682 25.93-79.626 20.438 22.915-4.383 40.644-16.56 55.814-32.594-16.462-7.504-33.798-13.877-51.25-20.094l-3.344-30.812z" />
</svg>

  );
}

TreasureMap.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
