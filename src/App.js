import './styles/App.css';
import './components/BasketCount';
import BasketCount from './components/BasketCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BasketCount/>  
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
