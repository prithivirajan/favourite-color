import React, { Component } from 'react';
import AddColorComponent from './AddColorComponent';
import DisplayColorComponent from './DisplayColorComponent';

class FavouriteColorComponent extends Component {
    state = {          
        "colors":[]
    }

    addColor = (name, code) => {        
        let newColor = {
            "name": name,
            "code": code
        }
        this.state.colors.push(newColor);        
        this.setState({
            "colors": this.state.colors
        })
    }

    render() { 
        return ( 
            <div style={{width: 500}}>
                <AddColorComponent addColor={this.addColor}/>
                <DisplayColorComponent colors={this.state.colors} />
            </div>            
         );
    }
}
 
export default FavouriteColorComponent;