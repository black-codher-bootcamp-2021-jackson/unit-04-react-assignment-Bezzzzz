// When the <ProductList/> is empty a message should be displayed:
// "No items found..." 
// Expected props for the <ProductList/> component are listed below:
// Props
// Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.
// <ProductList
//     items={items}
//     addToBasket={addToBasket} />


import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ items, ...props }) => {
  console.log(items);
  return (
    <div className="list">
      <div>
        {props.stored === "Media library" && <h2>Suggested Media</h2>} 
        {items.length === 0 ? (
          <div className="empty"> No items found...</div>
        ) : (
          items
             .filter((item) => props.stored === "media" || !item.inBasket)
            .map((item) => <Product key={item.trackId} item={item} {...props} />)
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ProductList;
