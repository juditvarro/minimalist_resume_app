import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Stack from "./components/Stack";

function App() {
  const sections = ["Home", "Experience", "Stack", "Contact"];
  return (
    <div>
      <Header sections={sections} />
      <Home section={sections[0]} />
      <Experience section={sections[1]} />
      <Stack section={sections[2]} />
      <Contact section={sections[3]} />
    </div>
  );
}

export default App;
