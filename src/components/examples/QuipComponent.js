import React, { useState } from 'react';



function QuipComponent(props) {
  const [votes, setVotes] = useState(0); // initialization

  const upVote = event => setVotes(votes + 1);// mounted

  return (<div>
    <p>{props.quip}</p>
    <p>Votes: {votes}</p>
    <p><button onClick={upVote}>Up Vote</button></p>
</div>)

}

export default QuipComponent;