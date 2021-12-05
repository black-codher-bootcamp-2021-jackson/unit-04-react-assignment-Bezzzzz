import './styles/App.css';
import BasketCount from './components/BasketCount';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BasketCount basketCount={10}/>  
       <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://imusicstore.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         View Example Bookcase App
        </a>
      </header>
     
    </div>
  );
}

export default App;
