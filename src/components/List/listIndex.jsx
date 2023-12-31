import React from "react";
import "./index.css"

const List = ({ itemsList }) => {
  return (
    <ul className="todo-list">
      {itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;