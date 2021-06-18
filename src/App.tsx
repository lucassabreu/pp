import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db, functions } from "./service/firebase";

function App() {
  const [result, setResult] = useState<string>("loading...");
  useEffect(() => {
    functions
      .httpsCallable("helloWorld")()
      .then((result) => setResult(result.data || ""))
      .catch((err) => setResult(JSON.stringify(err)));
  }, [setResult]);

  const [items, setItems] = useState<string[]>([]);
  useEffect(
    () =>
      db
        .collection("items")
        .onSnapshot((snapshot) =>
          setItems(snapshot.docs.map((i) => JSON.stringify(i.data())))
        ),
    [setItems]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Result: {result}</p>
        <p>Items:</p>
        {items.map((item, index) => (
          <code key={index}>{item}</code>
        ))}
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
