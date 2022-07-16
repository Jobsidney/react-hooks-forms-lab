import React, { useState } from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  const [search2,setSearch2]=useState('')
  function handleSearchChange(event) {
    setSearch2(search2)
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;