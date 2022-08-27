import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ auth, setauth }) => {
  let navigate = useNavigate();
  const click = () => {
    setauth(!auth);
    navigate("/");
  };
  return (
    <div>
      Dashboard<br/>
      <button onClick={click}> Logout</button>{" "}
    </div>
  );
};

export default ProtectedPage;
