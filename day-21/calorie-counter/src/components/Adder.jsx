import { useState } from "react";
import "./Adder.css";

function Adder() {
  const [item, setItem] = useState("");
  const [calories, setCalories] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="adder">
      <form className="form">
        <input
          className="input"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <input
          className="input"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
      </form>
      <button
        className="button"
        onClick={() => {
          setItems([...items, [item, calories]]);
          console.log(items);
        }}
      >
        Add Item
      </button>

      {items.length <= 0 ? <h1>Add Something</h1> : <h1>Noaofn</h1>}
    </div>
  );
}

export default Adder;
