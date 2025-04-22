import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="sm:px-5 md:px-20 bg-[#06080c] h-full relative">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
