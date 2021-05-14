import React from 'react';
import CusttomEvent from './CusttomEvent';
import DeclarAppr from './Declarative';
import EventApp from './event';
import OnclickExample from './exampleOnclick';
import PrintName from './name'
import QuipComponent from './QuipComponent';
import SayMyName from './SayMyName';
import StateExample from './StateExample';
import Tick from './Tick';


const AppExample = ()=>{

const [title, setTitle]=useState('Hello world');// declare variable and assign usestate
  // set up a function for the click event
const onClick = ()=>{
  const newTtile = title === 'Hello world' ? 'Welcome Everyone' : 'Hello world'
  setTitle(newTtile)
}



    return(
        
        <h1>{title}</h1>

      <button onClick={onClick}>click here</button>
      <br></br>
      <PrintName></PrintName>
      <br></br>
      <Tick></Tick>
      <br></br>
      <QuipComponent quip= 'please click to vote'></QuipComponent>
      <br></br>
      <EventApp></EventApp>
      <br></br>
      <SayMyName></SayMyName>
      <br></br>
      <OnclickExample></OnclickExample>
      <br></br>
      <CusttomEvent></CusttomEvent>
      <br></br>
      <br></br>
      <StateExample></StateExample>

      <DeclarAppr></DeclarAppr>
      <br></br> 

    )
}
export default AppExample;