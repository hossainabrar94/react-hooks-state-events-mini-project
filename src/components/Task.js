import React, {useState} from "react";

function Task({ text, category, task, deleteTask}) {

  function handleDelete(){
    deleteTask(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
