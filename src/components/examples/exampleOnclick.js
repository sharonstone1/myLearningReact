import React from 'react'


const OnclickExample = () => {
    return (
      <button value="Hello!" onClick={(e) => alert(e.target.value)}>
        Say Hello
      </button>
    );
  };
  
  export default OnclickExample;