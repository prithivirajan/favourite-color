import React, { Component } from 'react';

class AddColorComponent extends Component {
    state = { 
        "code": '#ffffff',
        "name": ''
     }
    addColor = (e) => {       
        this.props.addColor(this.state.name, this.state.code);
    }
    updateColor = (e) => {        
        this.setState({code: e.target.value})
    }
    updateName = (e) => {
        this.setState({name: e.target.value});
    }
    render() { 
        return (  
            <div>
                <fieldset>
                    <legend>Add Color</legend>                    
                        <label htmlFor="addcolor">Select your Color</label> 
                        <input type="color"   id="addcolor" name="addcolor" onChange={this.updateColor} />   
                        <br/>
                        <label htmlFor="addcolorname">Name</label>
                        <input type="text" id="addcolorname"  onChange={this.updateName}/>    
                        <br/>                
                        <button onClick={this.addColor}>Add</button>
                </fieldset>                
            </div>
        );
    }
}
 

export default AddColorComponent;