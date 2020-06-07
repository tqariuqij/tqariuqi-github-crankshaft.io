import React, { Component } from 'react'
import  './PickUps.css'

export  class PickUps extends Component {
 render() {
    
    return (
        <div className='jumb flex flex-wrap  w-100'>
            <div>
            <h3>Do you need a pickup?</h3>
            <h4>Contact us on 
            <p>+254727049996/+254722392641</p></h4>
            </div> 
            <div>
                <div className='outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>Tonnage</h4>
                    <h6>Upto one ton</h6>
                </div>
                <div className='outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per kilometer</h4>
                    <h6>Ksh300 (within Nairobi)</h6>
                </div>
                <div className='outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per day</h4>
                    <h6>ksh6500 plus fuel(within Nairobi)</h6>
                </div>
            </div>
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