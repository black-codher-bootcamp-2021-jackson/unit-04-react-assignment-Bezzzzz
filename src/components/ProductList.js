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

const ProductList = ({ item, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.item === "Media library" && <h2>Suggested Media</h2>} 
        {item.length === 0 ? (
          <div className="empty"> No items found...</div>
        ) : (
          item
            .filter((item) => props.item === "media" || !item.inBasket)
            .map((item) => <Product key={props.item.trackId} item={item} {...props} />)
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ProductList;
