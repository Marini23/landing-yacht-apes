import { useWindowSize } from "react-use";
import "./App.css";
import { About } from "./components/About/About";
import { MindMap } from "./components/MindMap/MindMap";

function App() {
  const { width } = useWindowSize();
  return (
    <main className="main-container">
      <About widthScreen={width} />
      <MindMap widthScreen={width} />
    </main>
  );
}

export default App;
