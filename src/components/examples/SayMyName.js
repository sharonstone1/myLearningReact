import React from "react";


const SayMyName = () => {
    
  const sayHello = () => {
    const userName =document.getElementById("Name").value
      if(userName !== ''){
        alert('Hello  ' + userName )
    }
    
      }
    

  return (
      <form>
      <label>
    What is your name?
    <input type="text" name='name'id='Name' />
      </label>
    <button
      onClick={sayHello}>
      submit
    </button>
    </form>
  );
};

export default SayMyName;
