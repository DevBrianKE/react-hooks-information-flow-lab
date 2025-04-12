// Filter.js
import React from "react";

// Receives current selected category and change handler from ShoppingList
function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        {/* Option "All" means show all items */}
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
