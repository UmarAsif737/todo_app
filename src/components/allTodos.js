import React from "react";

const AllTodos = ({ handleSubmit, handleChange, writeTodo }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={writeTodo}
          name="todo"
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AllTodos;
