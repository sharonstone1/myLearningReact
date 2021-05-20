import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import Card from './Card';

const ExpenseItem = (props) => {
	//let title = props.title;

	const [ title, setTitle ] = useState(props.title);
	console.log('ExpenseItem evaluated by React');

	const onClickHandler = () => {
		setTitle('updated');
		console.log(title);
	};

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate dateE={props.date} />
				<div className="item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price"> ${props.amount}</div>
				</div>

				<button onClick={onClickHandler}>change title</button>
			</Card>
		</li>
	);
};

export default ExpenseItem;
