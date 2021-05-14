import React from 'react';
import './Card.css';



const Card =(props)=>{
    const classes = 'Card ' + props.className;// to pass className data css from Card css

    return(
        <div className={classes}>
           {props.children}
        </div>
    )
}

export default Card;

