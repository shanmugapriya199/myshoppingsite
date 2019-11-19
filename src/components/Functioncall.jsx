
import React, { Component } from 'react';

// function Functioncall()
// {
//   return 
//   (
//     <div>
//       <h1> Click me</h1>
      
//     </div>
    
//   )
  
// }

function Functioncall()
{
  function clickHandler()
  {
    alert("clicked");
  }
  return (
    <div>
        <button onClick={() => clickHandler()}> click me </button>
    </div>
  
  )
}



export default Functioncall;
