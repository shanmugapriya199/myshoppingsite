import React, { Component } from 'react'

export class EventBind extends Component {

        //whenever handling event , have to bind within the component
        //4 approches to bind

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'priya'
        }
        this.clickhandler = this.clickhandler.bind(this); //3rd approach
    }
    
    //1 & 2 & 3 approches
    // clickhandler()
    // {
    //     this.setState({
    //         message : 'Shanmugapriya'
    //     })
    // }

    //4th approach
    clickhandler = () => {
        this.setState({
                     message : 'Shanmugapriya'
                })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* using bind(this) with clickhandler method */}
                    {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                {/* using arrow function in clickhandler method */}
                    {/* <button onClick = {() => this.clickhandler()}>Click</button> */}
                {/* using bind(this) in constructor - cons called initially, so auto bind */}
                    {/* <button onClick = {this.clickhandler}>Click</button> */}
                {/* clickhandler as arrow function */}
                    <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
