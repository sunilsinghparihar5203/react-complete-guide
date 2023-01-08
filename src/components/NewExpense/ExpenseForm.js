import React, { useState } from 'react'
import './FormExpense.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(0)
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value 
        // }) 

        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:e.target.value};
        // })
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value 
        // }) 

        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:e.target.value};
        // })
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value 
        // }) 

        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:e.target.value};
        // })
    }

    //form submit
    const submitHandler = (e) => {
        e.preventDefault()
        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            LocationOfExpenditure: "online"
        }
        props.onSaveExpenseData(ExpenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }




    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2023-01-01" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='cancle' onClick={props.formVisibility}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm