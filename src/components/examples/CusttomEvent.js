import React from 'react'

// child component
const CustomButton = ({ onPress }) => {
    return (
      <button type="button" onClick={onPress}>
        Click on me
      </button>
    );
  };
  

  // parent component
  const CusttomEvent = () => {

    const handleEvent = () => {
      alert("I was clicked");
    };

    
    return <CustomButton onPress={handleEvent} />;
  };
  
  export default CusttomEvent;