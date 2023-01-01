import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'


const  Expenses = (props) => {
  console.log(props)
  return (
    <Card className='expenses'>
        {
        props.expenses.length > 0 ? props.expenses.map((expense) => {

          return (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}
              location={expense.LocationOfExpenditure} />
          )
        }) : "No data available"
      }
      
    </Card>
  )
}

export default Expenses