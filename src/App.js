import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <audio controls>
        <source src="https://nerdcast.jovemnerd.com.br/nerdcast_748_proxima_viagem.mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
