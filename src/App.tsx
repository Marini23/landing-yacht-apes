import { useWindowSize } from "react-use";
import "./App.css";
import { About } from "./components/About/About";
import { MindMap } from "./components/MindMap/MindMap";
import { FAQ } from "./components/FAQ/FAQ";
import { Collection } from "./components/Collection/Collection";
import { Mint } from "./components/Mint/Mint";

function App() {
  const { width } = useWindowSize();
  return (
    <main className="main-container">
      <About widthScreen={width} />
      <MindMap widthScreen={width} />
      <FAQ widthScreen={width} />
      <Collection />
      <Mint widthScreen={width} />
    </main>
  );
}

export default App;
