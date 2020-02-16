import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
            roomType:"Error"          
        }
    }
    addType=(e)=>{
        this.setState({roomType:e.target.value})
    }
    addName=(e)=>{
        if(e.target.value.length>5)
        {
            let newName=e.target.value.slice(0,5);
            e.target.value=newName;

        }
        else{
            this.setState({roomName:e.target.value})
        }
    }

    addColor=(e)=>{
        this.setState({roomColor:e.target.value})
    }
    createRoom=()=>{
        if((this.state.roomType!="Error")&&(this.state.roomName!=undefined))
        {
            if(this.state.roomName.length>0)
            {this.props.add(this.state.roomType,this.state.roomName,this.state.roomColor)
            }
            else{
                alert("Error"); 
            }   
        }
        else{
            alert("Error"); 
        }  
    }
    
    
   
    render() {
        return (
            <div>
                <select defaultValue="Error" onChange={this.addType} >
                    <option value="Error"> Choose A New Room </option>
                    <option value="BadRoom">BadRoom</option>
                    <option  value="Bathroom / Toilet">Bathroom / Toilet</option>
                    <option value="Kitchen">Kitchen</option>
                </select><br/><br/><br/>
                <input onChange={this.addName} placeholder="Room Name"></input> <br/><br/><br/>
                <select defaultValue="p-3 mb-2 bg-white text-dark" onChange={this.addColor}>
                    <option value="p-3 mb-2 bg-white text-dark">Choose Room Color</option>
                    <option value="p-3 mb-2 bg-white text-dark">White</option>
                    <option value="p-3 mb-2 bg-success text-white">Green</option>
                    <option value="p-3 mb-2 bg-secondary text-white">Grey</option>
                    <option value="p-3 mb-2 bg-danger text-white">Red</option>
                    <option value="p-3 mb-2 bg-warning text-white">Yellow</option>
                    <option value="p-3 mb-2 bg-info text-white">Light Blue</option>
                    <option value="p-3 mb-2 bg-dark text-white">Black</option>
                
                </select><br/>
                <br/>
                <Link to ='/' ><button onClick={this.createRoom}> Add Room</button></Link>

          <br/>
                <button className={this.state.roomColor}> {this.state.roomName}</button>

            </div>
            
        )
    }
}




