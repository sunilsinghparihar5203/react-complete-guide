import React, { useState } from "react";
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

import ExpensesFilter from './ExpensesFilter'


const  Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No data available</p>

  let message = "";
  if(filteredExpnses.length === 1){
    message = <p>Only single Expense here. Please add more...</p>
  }

  if(filteredExpnses.length > 0){
    expenseContent = filteredExpnses.map((expense) => {
      return (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}
          location={expense.LocationOfExpenditure} />
      )  
    })
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>
        {expenseContent}
        {message}
    </Card>
  )
}

export default Expenses