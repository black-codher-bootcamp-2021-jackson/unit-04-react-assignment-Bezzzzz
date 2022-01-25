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


const Product = ({item, ...props}) => {
    //const {trackId, trackName, trackPrice, artworkUrl100, longDescription} = item; 
    
    return (
        <div className={"product"+ item.kind} id={item.id}>   
         <img src= {item.artworkUrl100} alt={item.artistName}/>
        <div className="product details">
            <h2>  
            {item.artistName.length > 50 ? item.artistName.substring(0,50) + "..." : item.artistName}
            </h2>
            <p className="product description">
                {item.longDescription
                ? item.longDescription.substring(0,2000) + "..."
                : "No description found"}
            </p>
            <p className="product price">
                {item.trackPrice ? "£" + item.trackPrice : "No Price Found"}</p>
        </div>
        <button
             className="Add-button"
             onClick={() => props.addToBasket(item)}>
                 Add to Basket
                 </button>
        <button
            className="Remove-button"
            onClick={() => props.removeFromBasket(item.trackId)}>
                Remove
                </button>    


       {/* {props.stored === "media" ? (
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
        )} */}
            </div>
        
    );
};


export default Product;