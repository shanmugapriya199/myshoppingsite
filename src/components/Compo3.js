import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';
import { Button } from 'reactstrap';

class Compo3 extends Component
{

  constructor()
  {
    //super is must, bcoz this is child need to extend upto parent
    super()
    this.state = {
        Message : 'this is message',
        Result : {color : 'blue'}
    }
  }

clickmethod()
{
  console.log("clicked");
  this.setState({
    Message : 'message changed'
  })
}

  render()
  {
    const {name , children} = this.props
    return(
      <div>
        Name : {name} <line></line>
        chiildren : {children}
        Message : {this.state.Message}
        <button onClick = {() => this.clickmethod()}>Click me !!</button>
       <Alert primary>Primary Alert</Alert>
       <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default Compo3;
