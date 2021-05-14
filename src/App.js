import React from 'react';
import './App.css';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';



function App() {
  
  
  const expenses =[
    {id:'e1', title:'Toilet Paper', amount:94.12, date:new Date(2021, 8, 13)},
    {id:'e2', title:'New TV', amount:799.49, date:new Date(2021, 11, 3)},
    {id:'e3', title:'Car Insurrance', amount:294.76, date:new Date(2021, 3, 28)},
    {id:'e4', title:'New Desk (Wooden)', amount:450, date:new Date(2021, 6, 11)}
  ]

//  const [expenses, setExpenses]=useState([
//     {id:'e1', title:'Toilet Paper', amount:94.12, date:new Date(2021, 8, 13)},
//     {id:'e2', title:'New TV', amount:799.49, date:new Date(2021, 11, 3)},
//     {id:'e3', title:'Car Insurrance', amount:294.76, date:new Date(2021, 3, 28)},
//     {id:'e4', title:'New Desk (Wooden)', amount:450, date:new Date(2021, 6, 11)}
//  ])

// const addExpenseHandler = (newExpense)=>{
//   console.log('updating expenses with ' + String(newExpense) );

//   setExpenses(
//     [...expenses, newExpense]
//   )

//   // console.log(expenses)
// }
  
 const addExpenseHandler = expense =>{
   console.log('app.js')
   console.log(expense)

 }



  // render the statement
  return (
    <div className="App">
      

      <h2>Let Go Start</h2>
      
      <NewExpense  onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses} />
    

    </div>
  );
}

export default App;
