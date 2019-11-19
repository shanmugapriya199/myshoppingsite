import React, { Component } from 'react'

export default class ListSample1 extends Component {
    render() {
        
        return (
            <div>
                {this.props.List.id}
            </div>
        )
    }
}
