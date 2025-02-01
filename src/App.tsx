import { useWindowSize } from "react-use";
import "./App.css";
import { About } from "./components/About/About";
import { MindMap } from "./components/MindMap/MindMap";
import { FAQ } from "./components/FAQ/FAQ";
import { Collection } from "./components/Collection/Collection";
import { Mint } from "./components/Mint/Mint";
import { Footer } from "./components/Footer/Footer";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";

function App() {
  const { width } = useWindowSize();
  return (
    <main className="main-container">
      <BurgerMenu />
      <About widthScreen={width} />
      <MindMap widthScreen={width} />
      <FAQ widthScreen={width} />
      <Collection />
      <Mint widthScreen={width} />
      <Footer />
    </main>
  );
}

export default App;
