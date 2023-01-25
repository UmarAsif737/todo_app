import React from "react";

const SingleTodo = ({ item, handleClick }) => {
  return (
    <div className="single_todo">
      <div>{item}</div>
      <button className="delete_button" onClick={() => handleClick(item)}>
        ✘
      </button>
    </div>
  );
};

export default SingleTodo;
