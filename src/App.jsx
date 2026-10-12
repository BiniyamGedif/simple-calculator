import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="calculator">
        <Display />
        <Keypad />
      </section>
    </main>
  );
}

export default App;
