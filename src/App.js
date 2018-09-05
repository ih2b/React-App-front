import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'; 
import Facerecong from './facerecong'; 
import UserImage from './userImage'; 
import ImageLink from './imageLink'; 
import Beelogo from './beelogo';
import BgAnim from './bganim';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '3b3e4c6fb69140e8a7b44af889f1576e'
});


class App extends Component {
  constructor (){
  super();
  this.state={
    input:'',
    imageUrl:''
  }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }
  onSubmit =(event) =>{
    
    this.setState({imageUrl: this.state.input});
   
    app.models.predict ( Clarifai.COLOR_MODEL , "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
       console.log(response) ;
    },
    function(err) {
      // there was an error
    }
  );
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
           imageUrl={this.imageUrl}
            />
           <BgAnim />
           <Facerecong 
           imageUrl={this.state.imageUrl}
           />
           
           
      </div>
    );
  }
}
export default App;
