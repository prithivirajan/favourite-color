import React, { Component } from 'react';
import ColorComponent from './ColorComponent';


class DisplayColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            "colors": props.colors
         }
    }

    render() { 
        console.log("colors", this.state.colors)
        return ( 
            <div>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                    </tr>
                    </thead>  
                    <tbody>
                        {
                            this.state.colors.map( (color, i) => {
                                return (
                                    <ColorComponent 
                                            key={i}
                                            name = {color.name}
                                            color = {color.code}
                                        />
                                    )
                            })
                        }
                    </tbody>                  
                </table>
            </div>
         );
    }
}
 
export default DisplayColorComponent;