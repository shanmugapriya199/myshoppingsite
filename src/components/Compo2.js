
import React, { Component } from 'react';

//simple js function
// function sample()
// {
//   return <h1>functional</h1>
// }

//arrow function
const sample = (props) => {
  alert("hi");
  return (
    <div>
      <h1>functional arrow {props.color} </h1>
      {props.children}
    </div>
  )
}

export default sample;
