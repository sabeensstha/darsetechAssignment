import React from "react";

const About = () => {
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
        About
      </i>

      <p>
        <ul
          style={{ listStyle: "none", marginLeft: "400px", marginTop: "-20px" }}
        >
          <li style={marginForLi}>
            I'm a self-taught software developer with a heavy focus on frontend
            applications.
          </li>
          <li style={marginForLi}>
            My preferred stack is Javascript and React
          </li>
          <li>
            Currently, I'm building web applications for managing Restaurants.
          </li>
          <li style={marginForLi}>
            I have a great interest in design systems, web accessibility,
            frontend architecture & design patterns.
          </li>
          <li style={marginForLi}>
            To reach me, please use linkedin or facebook.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
