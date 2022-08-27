import React from 'react'
import { Link } from 'react-router-dom';
import "./media_c.css";
const Responsive = () => {
  return (
    <div className="container">
    <Link to="/">Home</Link>
        <div className="class1" id="id1">widget 1</div>
        <div className="class1" id="id2">widget 2</div>
        <div className="class1" id="id3">widget 3</div>
        <div className="class1" id="id4">widget 4</div>
        <div className="class1" id="id5">widget 5</div>
        <div className="class1" id="id6">widget 6</div>
    </div>
  )
}

export default Responsive