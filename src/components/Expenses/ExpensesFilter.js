import React, { useState } from "react";

import './ExpensesFilter.css'
 
function ExpensesFilter(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectedYearHandler = (e) => {
    e.preventDefault();
    setSelectedYear(e.target.value)
  };
  props.onChangeFilter(selectedYear)
  return (
    <div className="expense-filter">
        <div className="expense-filter__control">
            <label>Filter by year</label>
            <select value={props.selected} onChange={selectedYearHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
  );
}
 
export default ExpensesFilter;