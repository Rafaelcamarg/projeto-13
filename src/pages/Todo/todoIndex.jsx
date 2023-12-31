import React, { useState } from "react";
import Form from "../../components/Form/formIndex";
import List from "../../components/List/listIndex";
import "./index.css"

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form
        handleAddItemToList={handleAddItemToList}
        handleChangeInput={handleChangeInput}
        task={task}
      />

      <List itemsList={itemsList} />
    </div>
  );
};

export default Todo;