// The following functions will be defined in this file:
// addToBasket(): Allows a product to be added to the <Basket/>
// removeFromBasket(): Allows a product to be removed from the <Basket/>
// search(): Searches the iTunes API for the terms entered by the user
// Each object in the JSON file should be rendered by your <Product/> component.
// Each product should have a button to Add to Basket.
// When clicked the item should be removed from <ProductList/> and added to your <Basket/> component.


import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Basket from "./components/Basket";
import BasketCount from "./components/BasketCount";
import BasketTotal from "./components/BasketTotal";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import About from "./pages/About";
import data from "./models/data.json";

const App = () => {
   const [count, setCount] = useState([]);
   const [item, setItem] = useState(data);
   const [basket, setBasket]= useState([]);
 

  const findItem = async (value) => {
    const url = `https://itunes.apple.com/search?term=${value}&limit=50&explicit=yes`;

    const results = await fetch(url).then((res) => res.json()); //res is short for result
    if (!results.error) {
      setItem(results.items);
      console.log(results.items);
      
    }
  };

  const addToBasket = (id) => {
    setCount(count.concat(item.filter((item) => item.trackId === id)));
    setItem([
      ...item.map((item) => {
        if (item.trackId === id) {
          item.read = true;
        }
        return item;
      }),
    ]);
  };

  const removeFromBasket = (id) => {
    setCount(count.filter((item) => item.trackId !== id));
    setItem([...item.map((item) => {
        if (item.trackId === id) {
          item.read = false;
        }
        return item;
      }),
    ]);
  };
 

  useEffect(() => {
    document.title = `My Library ${count.length} Media`;
    Array.from(document.getElementsByClassName("basketLink")).forEach((el) => {
      el.innerText = ` Mediaa (${count.length})`;
    });
   
  },[]);
  return (
    <Router>
      <div className="container">
        <Route
          exact path="/"
          render={() => (
            <Fragment>
              <Header basketCount={count.length} />
              <Search findItem={findItem} />
              {/* <ProductList item={item} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/> */}
            </Fragment>
          )}
        />
        <Route
          path="/Your Basket"
          render={() => (
            <Fragment>
              <Header basketCount ={count} />
              {/* <Basket basket={basket} basketCount={count} BasketTotal={total} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/> */}
            </Fragment>
          )}
        />
        <Route
          path="/about"
          component={() => <About basketCount={count.length} />} />
      </div>
    </Router>
  );
};

export default App;

