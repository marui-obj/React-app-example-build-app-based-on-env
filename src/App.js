import logo from './logo.svg';
import './App-theme.scss'
const color = process.env.REACT_APP_COLOR;
const text = process.env.REACT_APP_TEXT;
const foo = process.env.REACT_APP_FOO;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {text}
          {foo}
          {color}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
