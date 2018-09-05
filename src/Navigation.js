import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
    	<nav style ={{paddingLeft:'40px' , display: 'flex' ,justifyContent: 'flex-start'}} >
         <p className='f6 link dim black shadow-2 pointer  ' style ={{backgroundColor: '#008CBA' ,border: 'none ', color: 'white',
    padding: '8px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'}}>Sign Out</p>
        </nav>
    );
  }
}
export default Navigation;
