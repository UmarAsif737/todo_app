import React from "react";

const SingleTodo = ({ handleDelete, singleTodo }) => {
  return (
    <div>
      <div className="displayTodo">
        <p>{singleTodo}</p>
        <button onClick={() => handleDelete(singleTodo)}>X</button>
      </div>
    </div>
  );
};

export default SingleTodo;
