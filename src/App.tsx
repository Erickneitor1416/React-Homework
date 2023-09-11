import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [es, setEs] = useState(true);

  return (
    <>
      <div>
        <h1>{es ? "Hola mundo" : "Hello world"}</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {(es ? "El contador es " : "count is ") + count}
        </button>
        <button onClick={() => setEs(!es)}>
          {es ? "Cambia el idioma" : "Change the language"}
        </button>
      </div>
    </>
  );
}

export default App;
