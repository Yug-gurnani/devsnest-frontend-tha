import React from "react";

function Row({ items, setItems, item, calories, index }) {
  return (
    <div className="row">
      <div className="header">
        <h1>{item}</h1>
        <button onClick={() => {
            let newItems = items.filter((ele,i) => i != index);
            setItems(newItems);
        }}>Delete</button>
      </div>
      <p>You Have Consumed {calories} calories. You fat ass!!</p>
    </div>
  );
}

export default Row;
