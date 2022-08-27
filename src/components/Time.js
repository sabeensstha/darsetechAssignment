import React from 'react'

const Time = () => {
    const marginForLi = {
        marginBottom: "10px",
      };
      const date = new Date();
  return (
    <div>
      <i
        style={{
          marginLeft: "300px",
          fontWeight: "90",
          marginRight: "10px"
        }}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
    </svg>
      </i>

      <p style={{marginBottom:"20px"}}>
        <ul
          style={{ listStyle: "none", marginLeft: "300px", marginTop: "-20px" }}
        >
          <li style={marginForLi}>
            <i>Time In Nepal </i>
          </li>
          <li>
          <i>{date.toLocaleString()} (Nepal Time)</i> 
          </li>
        </ul>
      </p>
    </div>
  )}
export default Time