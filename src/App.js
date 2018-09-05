import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'; 
import UserImage from './userImage'; 
import ImageLink from './imageLink'; 
import Beelogo from './beelogo';
import BgAnim from './bganim';


class App extends Component {
  constructor (){
  super();
  this.state={
    input:'',
  }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
 
  }
  onSubmit =(event) =>{
    console.log('click') ;
  }
  render() {
    return (
      <div>
           
           <UserImage />
           <Navigation />
           <Beelogo />
           <ImageLink 
           onInputChange={this.onInputChange}
           onSubmit={this.onSubmit}
            />
           <BgAnim />
           
           
           
      </div>
    );
  }
}
export default App;
