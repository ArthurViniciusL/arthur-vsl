import { useState } from "react";
import "./styles/global.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="">
        <h1>Vite + React</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        
      </main>
    </>
  );
}

export default App;
