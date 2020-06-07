import React, { Component } from 'react'
import './Tron.css'

export  class Tron extends Component {
 render() {
    
    return (
      <div className='jumb vh-50 w-100'>
         <h1>Welcome To The Crankshaft</h1>
         <h3>for all your car needs</h3>
          <div  >  
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
                      onClick={event => this.props.changePage(event, 'LearnMore')}
              >Learn More</button>
              
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'
                      onClick={event => this.props.changePage(event, 'Home')}
              >Back</button>

          </div>
      </div>
    );
  }

}