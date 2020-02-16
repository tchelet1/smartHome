import 'bootstrap/dist/css/bootstrap.css';
//npm install react-bootstrap bootstrap
//start bootstrap
import './App.css';
import {HashRouter as Router, Switch , Route,Link } from 'react-router-dom';
//import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
//npm install react-router-dom
//npm i gh-pages
//github


import AddProduct from './components/AddProduct.js';
import AddRoom from './components/AddRoom.js';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Products from './components/Products.js';
import Room from './components/Room.js';
import RoomList from './components/RoomList.js';


import React, { Component } from 'react'



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      rooms:[],
      roomToShow:0,
      showCreateProduct:false
      
    };
    
  }
  showRoom=(i)=>
  {
    this.setState({roomToShow:i})
  };
  createRoom=(t,n,c)=>{

    this.setState({rooms:[...this.state.rooms,{roomType:t, roomName:n,roomColor:c ,productsList:[]}]});
    
  };
  addNewProduct=(p)=>
  {
    let i=this.state.roomToShow;
    const newRooms = this.state.rooms;
    const newRoom = newRooms[i];
    newRoom.productsList = [...newRoom.productsList,{name:p,power:false,color:"btn btn-danger"}];
    newRooms[i] = newRoom;
    this.setState({rooms:newRooms});
  };
  trueShowCreateProduct=()=>{this.setState({showCreateProduct:true});};
  falseShowCreateProduct=()=>{this.setState({showCreateProduct:false});};
   changePower=(k)=>
   {
    let i=this.state.roomToShow;
    const newRooms = this.state.rooms;
    const newRoom = newRooms[i];
    newRoom.productsList[k].power =!(newRoom.productsList[k].power) 
    if(newRoom.productsList[k].power)
        {
          newRoom.productsList[k].color="btn btn-success"
        }
        else
        {
          newRoom.productsList[k].color="btn btn-danger"
        }
    newRooms[i] = newRoom;
    this.setState({rooms:newRooms});
   }


  render() {
    return (
      <div>
        <div className="App">
          <h1>smart house</h1>
          <Router>
        <Menu/>
          
        <Switch>
        <Route exact path='/' component={()=>{return <div>
            {this.state.rooms.map((element,i)=>{
            return <RoomList show={this.showRoom} type={element.roomType} name={element.roomName} color={element.roomColor}  productsList={element.productsList} index={i}/>
          })}<br/><br/><br/><br/><br/>
            <Home/>
        </div>
           }}/>
          <Route exact path='/addroom' component={()=>{return <AddRoom add={this.createRoom}/>}}/>
          <Route exact path='/room' component={()=>{return <div> 
            <div className='row'><Room className='col-4' show={this.trueShowCreateProduct} add={this.addNewProduct}  index={this.state.roomToShow} room={this.state.rooms[this.state.roomToShow]}/>
          {this.state.showCreateProduct? 
                <AddProduct className='col-3'
                    hide={this.falseShowCreateProduct}
                    index={this.state.roomToShow}
                    addNewProduct={this.addNewProduct}
                    room={this.state.rooms[this.state.roomToShow]}
                />:<div/>}</div>
          
          {this.state.rooms[this.state.roomToShow].productsList.map((element,i)=>{
            return <Products className='col-1' power={this.changePower}   product={element} index={i}/>
          })}
            


          </div>}}/>
         




          
        </Switch>
      </Router>
          
          <br/>
          {/* <p>room number:{this.state.roomToShow}</p> */}
          {/* {this.state.room.map((element,i)=>{
            return <RoomList show={this.showRoom} type={element.roomType} name={element.roomName} color={element.roomColor}  productsList={element.productsList} index={i}/>
          })} */}
        </div>
      </div>
    )
  }
}







