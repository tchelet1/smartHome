(this.webpackJsonpsmart1home=this.webpackJsonpsmart1home||[]).push([[0],{23:function(e,t,o){e.exports=o(37)},28:function(e,t,o){},30:function(e,t,o){},36:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var a=o(0),r=o.n(a),n=o(20),c=o.n(n),l=(o(28),o(17)),m=o(2),s=o(3),i=o(5),u=o(4),d=o(6),p=(o(29),o(30),o(9)),h=o(11),b=function(e){function t(e){var o;return Object(m.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).nProduct=function(e){o.setState({newP:e.target.value})},o.addProduct=function(){o.props.hide();var e=!0;o.props.room.productsList.length>=5&&(e=!1),"Stereo"===o.state.newP&&o.props.room.productsList.map((function(t){"Stereo"===t.name&&(e=!1)})),"Boiler"===o.state.newP&&"Bathroom / Toilet"!=o.props.room.roomType&&(e=!1),e?o.props.addNewProduct(o.state.newP):alert("Error")},o.state={newP:"Air conditioner"},o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{defaultValue:"Air conditioner",onChange:this.nProduct},r.a.createElement("option",{value:"Air conditioner"}," Choose A Product"),r.a.createElement("option",{value:"Air conditioner"},"Air conditioner"),r.a.createElement("option",{value:"Boiler"},"Boiler"),r.a.createElement("option",{value:"Stereo"},"Stereo"),r.a.createElement("option",{value:"Lamp"},"Lamp")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.addProduct}," Add Product"),r.a.createElement("br",null))}}]),t}(a.Component),E=function(e){function t(e){var o;return Object(m.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).addType=function(e){o.setState({roomType:e.target.value})},o.addName=function(e){if(e.target.value.length>5){var t=e.target.value.slice(0,5);e.target.value=t}else o.setState({roomName:e.target.value})},o.addColor=function(e){o.setState({roomColor:e.target.value})},o.createRoom=function(){"Error"!=o.state.roomType&&void 0!=o.state.roomName&&o.state.roomName.length>0?o.props.add(o.state.roomType,o.state.roomName,o.state.roomColor):alert("Error")},o.state={roomType:"Error"},o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{defaultValue:"Error",onChange:this.addType},r.a.createElement("option",{value:"Error"}," Choose A New Room "),r.a.createElement("option",{value:"BadRoom"},"BadRoom"),r.a.createElement("option",{value:"Bathroom / Toilet"},"Bathroom / Toilet"),r.a.createElement("option",{value:"Kitchen"},"Kitchen")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.addName,placeholder:"Room Name"})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{defaultValue:"p-3 mb-2 bg-white text-dark",onChange:this.addColor},r.a.createElement("option",{value:"p-3 mb-2 bg-white text-dark"},"Choose Room Color"),r.a.createElement("option",{value:"p-3 mb-2 bg-white text-dark"},"White"),r.a.createElement("option",{value:"p-3 mb-2 bg-success text-white"},"Green"),r.a.createElement("option",{value:"p-3 mb-2 bg-secondary text-white"},"Grey"),r.a.createElement("option",{value:"p-3 mb-2 bg-danger text-white"},"Red"),r.a.createElement("option",{value:"p-3 mb-2 bg-warning text-white"},"Yellow"),r.a.createElement("option",{value:"p-3 mb-2 bg-info text-white"},"Light Blue"),r.a.createElement("option",{value:"p-3 mb-2 bg-dark text-white"},"Black")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{onClick:this.createRoom}," Add Room")),r.a.createElement("br",null),r.a.createElement("button",{className:this.state.roomColor}," ",this.state.roomName))}}]),t}(a.Component),w=(o(36),function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/addroom"},r.a.createElement("button",{type:"button",class:"btn btn-danger btn-circle btn-xl"},r.a.createElement("i",{class:"fa fa-plus"},"+"))))}}]),t}(a.Component));function v(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"btn btn-primary btn-lg btn-block"},r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block"},"home"))))}var f=function(e){function t(e,o,a){var r;return Object(m.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this,e,o,a))).power=function(){r.props.power(r.props.index)},r.state={},r}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-4"},r.a.createElement("button",{onClick:this.power,type:"button",class:this.props.product.color},this.props.product.name)," ",r.a.createElement("br",null))}}]),t}(a.Component),g=function(e){function t(e){var o,a=e.show,r=e.add,n=e.room,c=e.index;return Object(m.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,{show:a,add:r,room:n,index:c}))).addProduct=function(){o.props.show()},o.state={showCreateProduct:!1},o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.room.roomColor},r.a.createElement("div",null,r.a.createElement("h2",null,"Room Name:",this.props.room.roomName),r.a.createElement("br",null),r.a.createElement("h2",null,"Room Type:",this.props.room.roomType),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.addProduct,class:"btn btn-warning"},"Add Product")))}}]),t}(a.Component),j=function(e){function t(e){var o;return Object(m.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).change=function(){o.props.show(o.state.index)},o.state={type:e.type,name:e.name,color:e.color,productsList:e.productsList,index:e.index},o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-4"},r.a.createElement(p.b,{to:"/room"},r.a.createElement("button",{onClick:this.change,className:this.state.color},this.state.name)))}}]),t}(a.Component),C=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).showRoom=function(t){e.setState({roomToShow:t})},e.createRoom=function(t,o,a){e.setState({rooms:[].concat(Object(l.a)(e.state.rooms),[{roomType:t,roomName:o,roomColor:a,productsList:[]}])})},e.addNewProduct=function(t){var o=e.state.roomToShow,a=e.state.rooms,r=a[o];r.productsList=[].concat(Object(l.a)(r.productsList),[{name:t,power:!1,color:"btn btn-danger"}]),a[o]=r,e.setState({rooms:a})},e.trueShowCreateProduct=function(){e.setState({showCreateProduct:!0})},e.falseShowCreateProduct=function(){e.setState({showCreateProduct:!1})},e.changePower=function(t){var o=e.state.roomToShow,a=e.state.rooms,r=a[o];r.productsList[t].power=!r.productsList[t].power,r.productsList[t].power?r.productsList[t].color="btn btn-success":r.productsList[t].color="btn btn-danger",a[o]=r,e.setState({rooms:a})},e.state={rooms:[],roomToShow:0,showCreateProduct:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"smart house"),r.a.createElement(p.a,null,r.a.createElement(v,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:function(){return r.a.createElement("div",null,e.state.rooms.map((function(t,o){return r.a.createElement(j,{show:e.showRoom,type:t.roomType,name:t.roomName,color:t.roomColor,productsList:t.productsList,index:o})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w,null))}}),r.a.createElement(h.a,{exact:!0,path:"/addroom",component:function(){return r.a.createElement(E,{add:e.createRoom})}}),r.a.createElement(h.a,{exact:!0,path:"/room",component:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(g,{className:"col-4",show:e.trueShowCreateProduct,add:e.addNewProduct,index:e.state.roomToShow,room:e.state.rooms[e.state.roomToShow]}),e.state.showCreateProduct?r.a.createElement(b,{className:"col-3",hide:e.falseShowCreateProduct,index:e.state.roomToShow,addNewProduct:e.addNewProduct,room:e.state.rooms[e.state.roomToShow]}):r.a.createElement("div",null)),e.state.rooms[e.state.roomToShow].productsList.map((function(t,o){return r.a.createElement(f,{className:"col-1",power:e.changePower,product:t,index:o})})))}}))),r.a.createElement("br",null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2d6c453e.chunk.js.map