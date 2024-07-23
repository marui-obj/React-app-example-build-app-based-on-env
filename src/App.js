import logo from './logo.svg';
const color = process.env.REACT_APP_COLOR;
const text = process.env.REACT_APP_TEXT;
const foo = process.env.REACT_APP_FOO;
if (color === "red"){
  require('./App-red.css');
} else if (color === "green"){
  require('./App-green.css')
} else if (color === "blue"){
  require('./App-blue.css')
} else {
  require('./App.css')
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {text}
          {foo}
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
