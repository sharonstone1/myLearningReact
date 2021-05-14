import React,{useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItems';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

// test

const Expenses = (props) => {
  const [expenses, setExpenses ] = useState(props.items) // initialise the statement with the parent 
  const [filterYear, setFilterYear]=useState('2020')
  
  const filterHandler = (selectedYear)=>{
    setFilterYear(selectedYear)

  }
 
 // updating the statement
  useEffect(() => { 
    setExpenses(props.items)
  }, [props.items])  // skip every subsequent with an array paremeter []


  // add a new item in an array object
  const listItems = expenses.map((item) => 
    <div>
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>
    <br />
    </div>
  );

	return (
		<div >
			<Card className="expenses">
        <ExpensesFilter  selected={filterYear}   onChangeFilter ={filterHandler} />
				<br />
       <li> { listItems } </li>
			</Card>
		</div>
	);
};

export default Expenses;
