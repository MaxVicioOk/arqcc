import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Ticker from "./components/Ticker/Ticker";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
