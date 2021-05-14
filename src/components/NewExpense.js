import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{

        const expenseDataSave ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDataSave)
    }


	return (
		<div className='new-expense'>
            <ExpenseForm   onSaveExpenseData={saveExpenseDataHandler}/>
           
        </div>
	);
};

export default NewExpense;
