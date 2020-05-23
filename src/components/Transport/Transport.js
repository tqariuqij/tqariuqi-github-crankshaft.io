import React, { Component } from 'react'
import './Transport.css'

export  class Transport extends Component {
 render() {
    
    return (
      <div className='trans vh-50 w-100'>
         <h1>Ask for Transport</h1>
         <h3>for all your car needs</h3>
          <div className=''>  
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'>Saloons</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-hot-pink'>Seven sitters</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'>Pick ups</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'>Lorries</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib black bg-light-green'>Semi Trailers</button>

          </div>
      </div>
    );
  }

}