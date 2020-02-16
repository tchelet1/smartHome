import React, { Component } from 'react';
import AddProduct from './AddProduct.js';
import Products from './Products'


export default class Room extends Component {

    constructor({show,add,room, index}) {
        super({show,add,room, index})
    
        this.state = {  
            showCreateProduct:false

        }
    }
    addProduct=()=>{this.props.show()}
    
    
    
    render() {
        return (

            <div  className={this.props.room.roomColor}>
                <div >
                <h2>Room Name:{this.props.room.roomName}</h2><br/>
                <h2>Room Type:{this.props.room.roomType}</h2><br/>
                <button onClick={this.addProduct}  class="btn btn-warning">Add Product</button>
              
                </div>

                
            
            </div>
        )
    }
}
