import React, { Component } from 'react'

export default class Products extends Component {

    constructor(power,product,index) {
        super(power,product,index)
    
        this.state = {
          
             
        }
    }
    

    power=()=>{
        this.props.power(this.props.index);
        
    }

    render() {
        return (
            <div class='col-4'>
                <button onClick={this.power} type="button" class={this.props.product.color}>{this.props.product.name}</button> <br/>
            </div>
        )
    }
}

