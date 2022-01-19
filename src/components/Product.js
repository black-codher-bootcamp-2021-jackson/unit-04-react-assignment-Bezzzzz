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
            <h2> {props.name}</h2>
        </div>
        </div>
        )
};


export default Product;