import './App.css';
import React,{useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const  expenseData  = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14), LocationOfExpenditure: "online" },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: "online" },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28), LocationOfExpenditure: "online" },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12), LocationOfExpenditure: "online" },
  ];
  const [expenses, setExpenseData] = useState(expenseData)

  const addExpenseHandler = (expense) =>{ 
      setExpenseData((prevExpenses)=>[expense,...prevExpenses])
  }
  return (
    <div className="App">
      <h2>Lets start </h2>
       <NewExpense onAddExpense = {addExpenseHandler}/>
       <Expenses  expenses={expenses} />
    </div>
  );
}

export default App;
