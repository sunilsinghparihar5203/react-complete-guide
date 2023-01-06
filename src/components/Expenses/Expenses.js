import React, { useState } from "react";
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

import ExpensesFilter from './ExpensesFilter'


const  Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    console.log("expense js")
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }
  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>
        {
        props.expenses.length > 0 ? props.expenses.map((expense) => {
          // This will only show expenses from selected year
          if(expense.date.getFullYear() == filteredYear){
            return (
              <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}
                location={expense.LocationOfExpenditure} />
            )
          }
         
        }) : "No data available"
      }
      
    </Card>
  )
}

export default Expenses