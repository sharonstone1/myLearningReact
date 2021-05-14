import React from 'react';


const DeclarAppr =()=>{

    const showText= (e)=>{
        e.preventDefault();

        const text = 'Hello beginner'
        alert(text)

    }



    return(
        <div>
            <button onClick={showText}> show the text</button>
        </div>
    )
}

export default DeclarAppr;