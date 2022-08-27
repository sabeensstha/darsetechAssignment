import React from 'react'

const Work = () => {
    const marginForLi = {
        marginBottom: "10px",
      };
  return (
    <div>
      <i
        style={{
          marginLeft: "300px",
          fontWeight: "90",
          marginRight: "93px",
          display: "flow",
        }}
      >
        Work
      </i>

      <p style={{marginBottom:"20px"}}>
        <ul
          style={{ listStyle: "none", marginLeft: "400px", marginTop: "-20px" }}
        >
          <li style={marginForLi}>
            Currently Freelance Engineer. 
          </li>
        </ul>
      </p>
    </div>
  )
}

export default Work