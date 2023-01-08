import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';

function ExpensesList(props) {

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'> Found no expenses.</h2>
     }
 
  let message = (props.items.length === 1) ? <p className='expenses-list__fallback'>Only single Expense here. Please add more...</p> : ""
    
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => {
        return (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}
            location={expense.LocationOfExpenditure} />
        )  
        })}
      {message}
    </ul>
  )
}

export default ExpensesList