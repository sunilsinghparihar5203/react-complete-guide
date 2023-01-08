import React, { useState } from "react";
import Card from '../UI/Card'

import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from "./ExpensesList";


const  Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2023')
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>

      <ExpensesChart expenses= {filteredExpnses} />
      <ExpensesList items={filteredExpnses}/>
    </Card>
  )
}

export default Expenses