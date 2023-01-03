import React,{useState} from 'react'
import './FormExpense.css'

function ExpenseForm() {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log(`Title is ${title}, amount is ${amount} , date is ${date}`)
    }
    return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls' value={title} onChange={(e)=>setTitle(e.target.value)}>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2023-01-01"  value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
    )
}

export default ExpenseForm