import "./App.css";
import Counter from "./Counter";

function App() {
  return <div className="App">
    <h1>Click the Button to update the Counter :P</h1>
    {[...Array(4)].map((ele, index) => (
      <Counter />
    ))}
  </div>;
}

export default App;
