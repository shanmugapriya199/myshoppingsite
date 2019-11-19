
import React, { Component } from 'react';

class compo1 extends Component {

  //conditional Rendering

  constructor(props) {
    super(props)

    this.state = {
      isActive: true,
      user1 : 'priya',
      user2 : 'Sri'
    }
  }


  render() {

    //1st method - ifelse - return whole div - 
    //cant write conditions in div tag

    // if(this.state.isActive)
    //   return <div> {this.state.user1} </div> 
    //  else
    //  return <div> {this.state.user2} </div> 
     
    //2nd method = assigning expressions
    // let message
    // if(this.state.isActive)
    //   message =  <div> {this.state.user1} </div> 
    //  else
    //  message = <div> {this.state.user2} </div> 
    //  return message;

    //3rd method = conditional operator
    return (this.state.isActive) ?  (<div> {this.state.user1} </div>)
    : ( <div> {this.state.user2} </div>)

    //4th method = lambda expressions
    //(this.state.isActive) ^^ (<div> {this.state.user1} </div>)



     
  
  }
}

export default compo1;
