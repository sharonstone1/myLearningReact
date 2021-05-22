import React,{useState } from 'react';
import Card from './Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';

const Expenses = (props) => {
  
  const [filterYear, setFilterYear]=useState('2020')
  
  const filterHandler = (selectedYear)=>{
    setFilterYear(selectedYear)

  }

  const filteredExpensesData = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()=== filterYear
  })

   
	return (
		<div >
			<Card className="expenses">
        <ExpensesFilter  selected={filterYear}   onChangeFilter ={filterHandler} />
				<br />
        <ExpensesChart  expenses={filteredExpensesData}/>
        <ExpenseList  items={filteredExpensesData}/>
        {/* {filteredExpensesData.length ===0 && <p>No Expenses found</p>} */}

        {/* {filteredExpensesData.length >0 && filteredExpensesData.map((expense) => (<ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />))} */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
        <br />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <br />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        <br />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        <br /> */}
			</Card>
		</div>
	);
};

export default Expenses;
