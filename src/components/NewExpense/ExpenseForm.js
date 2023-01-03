import React,{useState} from 'react'
import './FormExpense.css'

function ExpenseForm() {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState(0)
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })

    const titleChangeHandler = (e) =>{
        // setEnteredTitle(e.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value 
        // }) 
        setUserInput((prevState)=>{
            return {...prevState,enteredTitle:e.target.value};
        })
    }
    const amountChangeHandler = (e) =>{
        // setEnteredAmount(e.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value 
        // }) 
        setUserInput((prevState)=>{
            return {...prevState,enteredAmount:e.target.value};
        })
    }
    const dateChangeHandler = (e) =>{
        // setEnteredDate(e.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value 
        // }) 
        setUserInput((prevState)=>{
            return {...prevState,enteredDate:e.target.value};
        })
    }
    const submitHandler =(e) =>{
        e.preventDefault()
        //console.log(`Title is ${enteredTitle}, amount is ${enteredAmount} , date is ${enteredDate}`)
        console.log(`Title is ${userInput.enteredTitle}, amount is ${userInput.enteredAmount} , date is ${userInput.enteredDate}`)
    }
    return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls' value={userInput.enteredTitle} onChange={titleChangeHandler}>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2023-01-01"  value={userInput.enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
    )
}

export default ExpenseForm