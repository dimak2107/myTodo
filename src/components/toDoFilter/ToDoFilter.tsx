import React, { useEffect, useState } from "react";
import "./ToDoFilter.css";

const ToDoFilter = ({ searchItem, setSearchItem }) => {
  return (
    <div className="app__todofilter">
      <input
        value={searchItem}
        className="app__todofilter-input"
        placeholder="search todo"
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
};

export default ToDoFilter;
