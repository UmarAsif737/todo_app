import React, { useState } from "react";
import AddNewTodo from "./components/addNewTodo";
import SingleTodo from "./components/singleTodo";

const App = () => {
  const [allTodos, setAllTodos] = useState([]);
  console.log(allTodos);
  const handleDeleteTodo = (item) => {
    setAllTodos(allTodos.filter((x) => x !== item));
  };

  return (
    <div className="app">
      <div className="app_child">
        <h1>Todo App</h1>
        <AddNewTodo setAllTodos={setAllTodos} allTodos={allTodos} />
        {allTodos.length > 0 ? (
          allTodos.map((item) => (
            <SingleTodo item={item} handleClick={handleDeleteTodo} />
          ))
        ) : (
          <p className="text-muted">Please Add a Todo</p>
        )}
      </div>
    </div>
  );
};

export default App;
