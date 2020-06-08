import React, { Component } from 'react'
import './Transport.css'

export  class Transport extends Component {
 render() {
    
    return (
      <div className='trans vh-50 w-100'>
         <h1>Ask for Transport</h1>
         <h3>for all your car needs</h3>
          <div >  
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
              onClick={event => this.props.changePage(event, 'Saloons')}
              >Saloons</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-hot-pink'
               onClick={event => this.props.changePage(event, 'SevenSitters')}
              >Seven sitters</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'
               onClick={event => this.props.changePage(event, 'PickUps')}
              > Pick ups</button>
              
          </div>
      </div>
    );
  }

}