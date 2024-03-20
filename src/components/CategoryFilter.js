import React, {useState} from "react";

function CategoryFilter({CATEGORIES, onHandleSelected, selectedCategory}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category)=>(
        <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => onHandleSelected(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
