import About from "./components/About";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Project from "./components/Project";

const App = () => {
  return (
    <main className="min-w-full min-h-screen">
      <Hero />
      <Project />
      <About />
      <Footer />
    </main>
  );
};

export default App;
