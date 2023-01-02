import React,{useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props)=> {
  const [Title, setTitle] = useState(props.title)
  const [Expence, setExpence] = useState(props.amount)
  const [Display, setDisplay] = useState(true)
  const ChangeTitle = () =>{
    setTitle("Updated")
    setDisplay(false)
  }

  const ChangeExpence = () =>{
    setExpence(100)
  }
  
  
  return (
    Display &&
    <Card className='expense-item'>
        <ExpenseDate date ={props.date} />
        <ExpenseDetails title={Title} amount={Expence} location={props.location} />
        <button onClick={ChangeTitle}>Delete Expense</button>
        
        <button onClick={ChangeExpence}>Change Expense</button>
    </Card>
  )
}

export default ExpenseItem