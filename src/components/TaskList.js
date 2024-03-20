import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, deleteTask}) {

  const filteredTasks = tasks.filter((task)=>{
    if(selectedCategory === 'All'){
      return task
    } 
    if (selectedCategory === task.category){
      return task
    }
  })

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} text={task.text} category = {task.category} task = {task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
