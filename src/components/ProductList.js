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

const ProductList = ({ media, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "Media library" && <h2>Suggested Media</h2>}
        {media.length === 0 ? (
          <div className="empty">No items found...</div>
        ) : (
          media
            .filter((item) => props.stored === "media" || !item.inBasket)
            .map((media) => <Product key={media.trackId} media={media} {...props} />)
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  media: PropTypes.array.isRequired,
};

export default ProductList;
