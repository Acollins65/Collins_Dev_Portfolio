import "./App.css";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";

function App() {
  return (
    <>
      <div className="contentWrapper">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
