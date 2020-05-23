import React, { Component } from 'react'
import './JumboTron.css'

export  class JumboTron extends Component {
 render() {
    
    return (
      <div className='jumbo vh-50 w-100'>
         <h1>Welcome To The Crankshaft</h1>
         <h3>for all your car needs</h3>
          <div  >  
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
                      onClick={event => this.props.changePage(event, 'LearnMore')}
              >Learn More</button>
              
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'
                      onClick={event => this.props.changePage(event, 'Home')}
              >Our Blog</button>

          </div>
      </div>
    );
  }

}