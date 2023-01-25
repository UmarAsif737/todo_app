import React from "react";

const SingleTodo = ({ handleDelete, singleTodo }) => {
  return (
    <div>
      <div className="single_todo">
        <p>{singleTodo}</p>
        <button className="delete_button" onClick={() => handleClick(item)}>
          ✘
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
