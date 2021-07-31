import React from "react";
import "./Card.css";

function Card({ items, setItems, item, calories, index }) {
  return (
    <div className="card">
      <h3>{item}</h3>
      <p>You Have Consumed {calories} calories</p>
      <div className="buttons">
        <button>Edit</button>
        <button
          onClick={() => {
            const newItems = items.filter((e, i) => i != index);
            setItems(newItems);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
