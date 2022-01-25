// Basket.js
// Users should be able to navigate to their <Basket/> and view all saved items.
//  When their <Basket/> is empty a message should be displayed:
// "Sorry, no items in basket" 
// Users should be able to add items returned in the results from the iTunes Search API and items in the data.json to their <Basket/> component.

import React  from 'react';
import PropTypes from 'prop-types';
import BasketCount from './BasketCount';
import BasketTotal from './BasketTotal';
import Product from './Product';

const Basket = ({basket,basketCount,basketTotal,...props}) => {
  return (
    <div id="basket">
        <h2>Your Basket</h2>
        <BasketCount basketCount={basketCount}/>
        { 
          (basketCount > 0 ? 
          basket.map(media => <Product key={media.trackId} media={media} {...props}/>) : 
          <div className="empty">Sorry, no items in basket...</div>)
        }
        <BasketTotal basketTotal={basketTotal}/>
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired
}

export default Basket;