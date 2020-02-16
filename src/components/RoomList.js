import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class RoomList extends Component {

    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            type:props.type,
            name:props.name,
            color:props.color,
            productsList:props.productsList,
            index:props.index
             
        }
    }
    change=()=>{
        this.props.show(this.state.index)
    }
    
    


    render() {
        return (
            <div class='col-4'>
                {/* <Link to ='/{this.props.index}'><button class={this.props.color}>{this.props.name}</button></Link> */}
                <Link to ='/room'><button onClick={this.change} className={this.state.color}>{this.state.name}</button></Link>
                            
            </div>
        )
    }
}