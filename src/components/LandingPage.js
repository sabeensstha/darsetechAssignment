import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import DataVis from "./DataVis";
import Display from "./Display";
import Fetching from "./Fetching";

const LandingPage = () => {
  
  return (
    <div style={{ left: "500px" }}>
      <h4>Qno1</h4>
      <Display
        name="Sabeen"
        email="sabeensstha@gmail.com"
        phoneNumber={9843718114}
      />
      <Display
        name="Nabeen"
        email="nabeensstha@gmail.com"
        phoneNumber={9807904109}
      /><hr/>
      <h4>Qno2</h4><br/>

      <Counter />
      <hr />
      <Link to="/responsive">
        <button>GO TO q3</button>
      </Link><hr />
      <Link to="/portfolio">
        <button>GO TO Q4</button>
      </Link>
      <hr />
      <Link to="/protectedpage">
        <button>GO TO Q5</button>
      </Link>
      <hr />
      <Link to="/function1_2">
        <button>GO TO Q6</button>
      </Link>
      <hr />
      <Link to="/hookupevents">
        <button>GO TO Q7</button>
      </Link>
      <hr />
      
      <h4>Qno8</h4>
      <DataVis />
      <hr />
      <Link to="/ssrssg">
        <button>GO TO Q9</button>
      </Link>
      <hr />
      <Fetching />
      
      <hr />
    </div>
  );
};

export default LandingPage;
