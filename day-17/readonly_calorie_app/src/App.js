import "./App.css";
import Row from "./row";

function App() {
  return (
    <div className="App">
      <h1>Calorie Reader App</h1>
      <div className="container">
        <Row name="Pizza" calories="80" />
        <Row name="Pasta" calories="100" />
        <Row name="Cookies" calories="50" />
        <Row name="Pizza" calories="80" />
        <Row name="Pasta" calories="100" />
        <Row name="Cookies" calories="50" />
        <Row name="Pizza" calories="80" />
        <Row name="Pasta" calories="100" />
        <Row name="Cookies" calories="50" />
        <Row name="Pizza" calories="80" />
        <Row name="Pasta" calories="100" />
        <Row name="Cookies" calories="50" />
      </div>
    </div>
  );
}

export default App;
