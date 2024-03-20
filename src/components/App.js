import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [tasks, setTasks] = useState(TASKS)

  function deleteTask(deletedTask){
    setTasks(tasks.filter(element => element !== deletedTask ? true:false))
  }

  function handleSelected(category){
    setSelectedCategory(category)
    // setCategoryFilteredTask(categoryFilteredTask.filter(element => element.category == selectedCategory))
  }

  function handleSubmit(newItem){
    setTasks([...tasks, newItem])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES = {CATEGORIES} onHandleSelected ={handleSelected} selectedCategory = {selectedCategory}/>
      <NewTaskForm CATEGORIES = {CATEGORIES} onTaskFormSubmit={handleSubmit}/> 
      <TaskList tasks = {tasks} selectedCategory = {selectedCategory} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
