import React from "react";
import { Link } from "react-router-dom";

const Function12 = () => {
  function func1() {
    return {
      out: "hello",
    };
  }

  // function func2()
  // {
  //   return
  // {
  //       out: "hello"
  //   };
  // }

  console.log(func1());
  // console.log(func2());
  return (
    <div>
    <Link to="/">Home</Link>
      <p>
        <h4>Qno6. Ans:</h4>
        <br />
        The output when i execute both the functions are-
        <br />
        func1():
        <br />
        ` out: 'hello'`
        <br />
        func2():
        <br />
        undefined
        <br />
        It's because of automatic semicolon insertion.
        <br />
        Never put a newline after return and prior to what you want to return,
        <br />
        it's treated as though it terminates the return statement
        <br />
        (e.g., a ; is inserted after return), and your function ends up
        effectively <br />
        returning undefined.
      </p>
    </div>
  );
};

export default Function12;
