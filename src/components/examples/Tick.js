import React, {useState, useEffect} from 'react'



const Tick = ()=>{

    const [tick, setTick]= useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setTick(tick + 1);
          }, 1000); // mounted
          return () => clearInterval(interval);// unmounted
      
    })

    return(

        <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    

    )
}

export default Tick;