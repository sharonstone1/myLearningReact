import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setEditing]=useState(false)
    const saveExpenseDataHandler =(enteredExpenseData)=>{

        const expenseDataSave ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDataSave);
        // clear the screen after submitting
        setEditing(false);
    }

    // create a function for editing items
    const startEditingHandler = ()=>{
        setEditing(true);
    }

    // create a function for stopping edited items

    const stopEditingHandler = ()=>{
        setEditing(false)
    }


	return (
		<div className='new-expense'>
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> } 
           {isEditing && <ExpenseForm   onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>} 
           
        </div>
	);
};

export default NewExpense;
