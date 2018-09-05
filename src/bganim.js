import React, { Component } from 'react';
import Particles from 'react-particles-js';



class BgAnim extends Component {

  render() {
    return (
    	    <div>
                  <Particles style ={{position :'fixed',top:'0',right:'0',left:'0',bottom:'0',zIndex:'-1'}}
                  />
    	    </div>
    	    );
  }
}
export default BgAnim;
