import React,{useState} from 'react'
import './FormExpense.css'

function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(0)
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value) 
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value) 
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value) 
    }
    const submitHandler =(e) =>{
        e.preventDefault()
        console.log(`Title is ${enteredTitle}, amount is ${enteredAmount} , date is ${enteredDate}`)
    }
    return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls' value={enteredTitle} onChange={titleChangeHandler}>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2023-01-01"  value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
    )
}

export default ExpenseForm