import React from 'react';

const GenerateCost = ({
  cost = { gold: 0, iron: 0, gin: 0, crystals: 0}
}) => {
  const costElements = [];

  if ( cost.gold > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='gold'
      >
        <b>G: </b>{cost.gold}
      </span>
    );
  }

  if ( cost.iron > 0 ) {
    costElements.push(
      <span
        className='shop-cost'
        key='iron'
      >
        <b>I: </b>{cost.iron}
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
        <b>C: </b>{cost.crystals}
      </span>
    );
  }

  return <span>{costElements}</span>;
}

export default GenerateCost;