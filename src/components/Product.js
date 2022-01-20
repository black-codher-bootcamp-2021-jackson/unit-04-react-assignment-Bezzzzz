// Product.js
// Expected props for the <Product/> component are listed below:

// Props
// Example expected props. Please note this is not an exhaustive list, but the minimum props required for assessment.

// <Product
//     kind={kind}
//     id={trackId}
//     name={trackName}
//     thumbnail={artworkUrl100}
//     price={trackPrice}
//     addToBasket={addToBasket}
//     removeFromBasket={removeFromBasket} />


import React from 'react';
import PropTypes from 'prop-types';


const Product = ({props}) => {
    //const {trackId, trackName, trackPrice, artworkUrl100, longDescription} = item; 
    
    return (
        <div className={"product"+props.kind} id={props.id}>   
        <img src= {props.thumbnail} alt={props.name}/>
        <div className="product details">
            <h2>{props.name}
            {props.name.length > 50 ? props.name.substring(0,50) + "..." : props.name}
            </h2>
            <p className="product description">
                {props.longDescription
                ? props.longDescription.substring(0,60) + "..."
                : "No description found"}
            </p>
            <p className="product price">
                {props.price ? "£" + props.price : "No Price Found"}</p>
        </div>
        {props.stored === "media" ? (
            <button
             className="Add-button"
             onClick={() => props.addToBasket(props.id)}>
                 Add to Basket
                 </button>
        ) : (
            <button 
            className="remove-button" 
            onClick={() => props.removeFromBasket(props.id)}>
                Remove from Basket
                </button>    
        )}
            </div>
        
    );
};


export default Product;