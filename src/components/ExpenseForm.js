import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props)=>{
    // working with multiple state
    const [enteredTitle, setEnteredTitle] =useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');

    // working with one state instead of multiple
    //   const [userInput, setUserInput]=useState({
    //   enteredTitle: '',
    //   enteredAmount:'',
    //   enteredDate:'',

    //   })

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value)   // first option 
        // setUserInput({...userInput, 
        // enteredTitle: event.target.value})      // second option with spread operator
        // setUserInput((prevState)=>{
        //     return {... prevState, enteredTitle: event.target.value} // third option with a previous state for the situation the update depend of the previous state
        // })

    }

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({...userInput, enteredAmount:event.target.value})
    }

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({...userInput, 
        // enteredDate: event.target.value})   // to avoid losing other data , we need to use spread operator
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        // clean the input after updating. this is the first way to bind input. the second way is to add value in our input 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }





    return(
        // listening the event with onSubmit click
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>

                </div>

                <div className='new-expense__control'>
                    <label>Data</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>

                </div>



            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;