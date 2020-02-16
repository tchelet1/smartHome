import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newP:"Air conditioner"           
        }

    }

    nProduct=(e)=>{
        this.setState({newP:e.target.value})
    };
    addProduct=()=>{
        this.props.hide()
        let build=true
        if(this.props.room.productsList.length>=5){build=false}
        if(this.state.newP==="Stereo"){
            this.props.room.productsList.map(e=>{
                if(e.name==="Stereo"){
                    build=false;
                }
            
            })
        }
        if(this.state.newP==="Boiler"){
            if(this.props.room.roomType!="Bathroom / Toilet")
            {
                build=false;
            }
        }
        
        if(build)
        {this.props.addNewProduct(this.state.newP);}
        else
        {alert("Error");}
        
    };
    
   
    render() {
        return (
            <div>
                <select defaultValue="Air conditioner" onChange={this.nProduct} >
                    <option value="Air conditioner"> Choose A Product</option>
                    <option value="Air conditioner">Air conditioner</option>
                    <option  value="Boiler">Boiler</option>
                    <option value="Stereo">Stereo</option>
                    <option value="Lamp">Lamp</option>
                </select><br/>
                
                <br/>
                <button onClick={this.addProduct}> Add Product</button>
          <br/>
                

            </div>
            
        )
    }
    
    
}

