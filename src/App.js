import { useState } from "react";
import AllTodos from "./components/allTodos";
import SingleTodo from "./components/singleTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [writeTodo, setWriteTodo] = useState("");
  const handleChange = (e) => {
    setWriteTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (writeTodo !== "") {
      setTodos((prev) => [...prev, writeTodo]);
      setWriteTodo("");
    }
  };
  const handleDelete = (singleTodo) => {
    console.log(singleTodo);
    setTodos(todos.filter((todo) => todo !== singleTodo));
  };
  console.log(todos);
  return (
    <div>
      <AllTodos
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        writeTodo={writeTodo}
      />
      {/* <form onSubmit={handleSubmit}>11
        <input
          type="text"
          onChange={handleChange}
          value={writeTodo}
          name="todo"
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form> */}

      {todos?.map((singleTodo) => (
        <SingleTodo handleDelete={handleDelete} singleTodo={singleTodo} />
      ))}

      {/* {todos?.map((singleTodo) => (
        <div className="displayTodo">
          <p>{singleTodo}</p>
          <button onClick={() => handleDelete(singleTodo)}>X</button>
        </div>
      ))} */}
    </div>
  );
}

export default App;
