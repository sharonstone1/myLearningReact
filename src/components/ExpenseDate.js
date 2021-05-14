import React from 'react';
import './ExpenseDate.css';


const ExpenseDate =(props)=>{
    const month = props.dateE.toLocaleString('en-uk', {month:'long'});
    const day = props.dateE.toLocaleString('en-uk', {day:'2-digit'});
    const year = props.dateE.getFullYear();

    return(
        <div className='expense_date'>
                <div className='expense_month'>{month}</div>
                <div className='expense_year'>{year}</div>
                <div className='expense_day'>{day}</div>

            </div>
    )
}

export default ExpenseDate;