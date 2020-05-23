import React, { Component } from 'react'
import './CarSale.css'



export  class CarSale extends Component {
 render() {
    
    return (
      <div className='car vh-50 w-100'>
         <h2>We have a collection of vehicles suited for your needs</h2>
          <div className=''>  
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
                onClick={event => this.props.changePage(event, 'CarHire')}
              >Buy a Car</button>
              <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-light-green'
                onClick={event => this.props.changePage(event, 'CarHire')}
              >Hire a Vehicle</button>
          </div>
      </div>
    );
  }

}