import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(10);
  const neww = () =>{
    return(<button onClick={() => setCount(count +5)} style={{marginLeft:"35px"}}>Add 5</button>);
    
  }
    return (
    <div style={{marginLeft:"20px"}}>
        <p> The Number is {count} </p>
        {neww()}
    </div>
  )
}

export default Counter