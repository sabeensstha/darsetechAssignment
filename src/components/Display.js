import React from 'react'

const Display = (props) => {
  return (
    <div>
        
        <ul>
        <li>{props.name}</li>
        <li>{props.email}</li>
        <li>{props.phoneNumber}</li>
        </ul>
    </div>
  )
}

export default Display