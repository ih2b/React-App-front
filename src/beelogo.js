import React, { Component } from 'react';
 import Beelogo1 from './beelogo.png';
   import Tilt from 'react-tilt';
class Beelogo extends Component {
  render() {
    return (
    	    <div style={{paddingTop:20,paddingLeft:600}}>
 				 <img alt='beelogo' src={Beelogo1} width="128" height="128" /> 
			</div>
    	    );
  }
}
export default Beelogo;