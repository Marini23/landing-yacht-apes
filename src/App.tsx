import "./App.css";
import { About } from "./components/About/About";
import { MindMap } from "./components/MindMap/MindMap";

function App() {
  return (
    <main className="main-container">
      <About />
      <MindMap />
    </main>
  );
}

export default App;
