import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import Card from './Card'

const ExpenseItem = (props) => {

      //let title = props.title;

      const [title, setTitle]= useState(props.title)

      const onClickHandler = ()=>{
            setTitle('updated')
            console.log(title)
      }
    
	return (
		<Card className="expense_item">
            <ExpenseDate dateE={props.date}/>
            <div className= "expense_item_description">
            <h2>{title}</h2>
            <div className="expense_item_price">${props.amount}</div>    
            </div>

            <button onClick={onClickHandler}>change title</button>
			
		</Card>
	);
};

export default ExpenseItem;
