import { useState } from "react";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-art-secondary">
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
