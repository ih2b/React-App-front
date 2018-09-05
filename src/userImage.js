import React, { Component } from 'react';
  import Tilt from 'react-tilt';
 import './userImage.css'
 import UserImage1 from './userImage.png';
class UserImage extends Component {
  render() {
    return (
    	    <div style={{paddingTop:40,paddingLeft:40}}>
    	        <p>Hello sir. </p>
 				<Tilt className="Tilt br2 shadow-2 pa3" options={{ max : 50 }} style={{ height:100 , width: 100, borderWidth: 50}} >
 				<span className="Tilt-inner"> <img alt='UserImage' src={UserImage1} /> </span>
				</Tilt>
			</div>
    	    );
  }
}
export default UserImage;
