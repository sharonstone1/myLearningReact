import React, {useState} from 'react';
import './App.css';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES =[
  {id:'e1', title:'Toilet Paper', amount:94.12, date:new Date(2021, 8, 13)},
  {id:'e2', title:'New TV', amount:799.49, date:new Date(2021, 11, 3)},
  {id:'e3', title:'Car Insurrance', amount:294.76, date:new Date(2021, 3, 28)},
  {id:'e4', title:'New Desk (Wooden)', amount:450, date:new Date(2020, 6, 11)}
]




function App() {
  
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
  
  // updating our new array depending of our previour array
 const addExpenseHandler = expense =>{
   setExpenses((prevExpenses)=>{
     return [expense, ...prevExpenses];
   });
   

 };



  // render the statement
  return (
    <div className="App">
      
     
     <h1>Let Go Start</h1>
    
      
      
      <NewExpense  onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses} />
    

    </div>
  );
}

export default App;
