import { useState } from "react";
import "./Adder.css";
import Card from "./Card";

function Adder() {
  const [item, setItem] = useState();
  const [calories, setCalories] = useState();
  const [items, setItems] = useState([]);

  return (
    <div className="adder">
      <form className="form">
        <input
          className="input"
          type="text"
          required
          placeholder='Item Name'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <input
          className="input"
          type="number"
          required
          placeholder='Calories'
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></input>
      </form>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          setItems([...items, [item, calories]]);
        }}
      >
        Add Item
      </button>

      {items.length <= 0 ? (
        <h1>Add Something</h1>
      ) : (
        items.map((ele, index) => {
          return (
            <Card key={index} items={items} setItems={setItems} item={ele[0]} calories={ele[1]} index={index} />
          );
        })
      )}
    </div>
  );
}

export default Adder;
