import React from 'react'



const PrintName = ()=>{

    const person ={
        name: 'Max'
    }; 
    person.name='manu'
    
    const secondPerson ={
        ...person // this is a spread operator
        
    };

   
    console.log(secondPerson)

    return(
        <div>
            
        </div>
    )
}
export default PrintName;