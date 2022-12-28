import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14), LocationOfExpenditure: "online" },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: "online" },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28), LocationOfExpenditure: "online" },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12), LocationOfExpenditure: "online" },
  ];
  return (
    <div className="App">
      <h2>Lets start</h2>


      {
       expenses.length > 0 ? expenses.map((expense) => {

          return (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.LocationOfExpenditure} />)
        }) : "No data available"
      }
    </div>
  );
}

export default App;
