import React, { useState } from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {

  const [itemText, setItemText] = useState('')
  const [newItemCategory, setNewItemCategory] = useState(CATEGORIES[0])

  function handleSubmit(e){
    e.preventDefault()

    let newItem ={
      text: itemText,
      category: newItemCategory
    }

    onTaskFormSubmit(newItem)
  }

  function addItemToList(e){
    setItemText(e.target.value)
  }

  function handleNewItemCateogry(e){
    setNewItemCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={addItemToList} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewItemCateogry}>
          {CATEGORIES.map((category) =>(
            category!= 'All' ? <option key= {category} value={category}>{category}</option> : null
          ))}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
