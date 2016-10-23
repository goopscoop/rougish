import React from 'react';

const GenerateCost = ({cost}) => {
  const costElements = [];

  if ( cost.gold > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='gold'
      >
        <b>Gold: </b>{cost.gold}
      </span>
    );
  }

  if ( cost.iron > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='iron'
      >
        <b>Iron: </b>{cost.iron}
      </span>
    );
  }

  if ( cost.gin > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='gin'
      >
        <b>Gin: </b>{cost.gin}
      </span>
    );
  }

  if ( cost.crystals > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='crystals'>
        <b>Crystals: </b>{cost.crystals}
      </span>
    );
  }

  return <span>{costElements}</span>;
}

export default GenerateCost;