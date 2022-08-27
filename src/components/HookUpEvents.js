import React from "react";
import { Link } from "react-router-dom";

const HookUpEvents = () => {
    function hookupevents () {
        for (var i = 0; i < 3; i++) {
          document
            .getElementById("button" + i)
            // eslint-disable-next-line no-loop-func
            .addEventListener("click", function () {
              alert(i);
            });
        }
      }
  return (
    <div>
    <Link to="/">Home</Link>
      <h4>Qno7. Ans:</h4>
      <p>
        No matter which button you click, they all alert 3, rather than the
        respective button number.
        <br />
        The reason for this is given in the prerequisite reading: I closed over
        the loop variable,
        <br />
        so by the time the function actually executed, the variable i had the
        value 3, <br />
        since that’s the leftover value after the loop is complete.
      </p>
      <br />
      <button id="button0" onClick={hookupevents}>
        Button0
      </button>
      <button id="button1" onClick={hookupevents}>
        Button1
      </button>
      <button id="button2" onClick={hookupevents}>
        Button2
      </button>
    </div>
  );
};

export default HookUpEvents;
