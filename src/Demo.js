import  React,{Component} from 'react';

class Demo extends Component
{

    constructor() {
        super();
        this.state = {color: "blue" , name: "priya"};
      }

  render()
  {
    return(
      <div>
          <h1>Demo file result {this.state.color} {this.props.name} </h1>
      </div>
    );
  }
}

export default Demo;
