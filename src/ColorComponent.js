import React, { Component } from 'react';

class ColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name,
            color: props.color
         }
    }
    render() { 
        return ( 
            <tr>
                <td>{this.state.name}</td>
                <td>{this.state.color}</td>
            </tr>
         );
    }
}
 
export default ColorComponent ;