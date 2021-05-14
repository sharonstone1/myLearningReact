import React, { useState } from "react";

const EventApp = () => {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    alert("Hello!");
  };

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          sayHello();
          setCount(count + 1);
        }}
      >
        Say Hello and Increment
      </button>
    </>
  );
};

export default EventApp;