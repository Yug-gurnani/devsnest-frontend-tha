import React, { useState } from "react";
import "./App.css";
import Row from "./Row";

function App() {
  const [items, setItems] = useState([
    ["Pizza", 100],
    ["Pizzsfda", 100],
    ["Pidszza", 100],
    ["Cookies", 100],
    ["Pasta", 100],
    ["dvad", 100],
    ["Pifafzza", 100],
    ["Pieafaezza", 100],
    ["Piefaezza", 100],
  ]);
  return (
    <div className="App">
      <h1>Calorie Tracker</h1>
      <div className="container">
        {items.map((ele, index) => (
          <Row
            key={index}
            items={items}
            setItems={setItems}
            item={ele[0]}
            calories={ele[1]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
