import React, { useState } from "react";

const AddNewTodo = ({ allTodos, setAllTodos }) => {
  const [inputChange, setInputChange] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputChange !== "") {
      setAllTodos([...allTodos, inputChange]);
      setInputChange("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="add_new_todo">
      <input
        type="text"
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNewTodo;
