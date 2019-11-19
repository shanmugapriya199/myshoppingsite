import React, { Component } from 'react';
import MtdAspropsChild from './MtdAspropsChild';

export class MtdaspropsParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Parent'
        }

        this.GreetParent = this.GreetParent.bind(this);
    }
    

    GreetParent(childname)
    {
        alert('hi '+ this.state.message +'from'+ childname);
    }

    render() {
        return (
           //{passing mtd as parameter to next component}
            <div>
               <MtdAspropsChild Greethandler = {this.GreetParent}/>
            </div>
        )
    }
}

export default MtdaspropsParent
