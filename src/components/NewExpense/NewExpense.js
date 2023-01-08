import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


function NewExpense(props) {
  const [formVisiblily, setformVisiblily] = useState(false)

  const formVisibilityHandler = () => {
    setformVisiblily(formVisiblily ? false : true)
  }

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  let addExpenseButton = <button type='button' onClick={formVisibilityHandler} >Add Expense</button>
  
  return (
    <div className='new-expense'>
      {
        formVisiblily ? <ExpenseForm onSaveExpenseData={onSaveExpenseData}  formVisibility = {formVisibilityHandler} /> : addExpenseButton
      }
    </div>
  )
}

export default NewExpense