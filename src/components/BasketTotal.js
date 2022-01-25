// Users should be able to see a running total/tally of the costs of the items in their basket as well as the number of items. 
// The total should be displayed in a <BasketTotal /> component.
// <BasketTotal basketTotal={total} />


import React from 'react';

const BasketTotal = (props) => {

  return (
    <div id="Basketotal">
      {props.BasketTotal}
    </div>
  );
}

















export default BasketTotal;