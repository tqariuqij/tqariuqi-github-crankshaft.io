import React, { Component } from 'react'
import  './Saloons.css'

export  class Saloons extends Component {
 render() {
    
    return (
        <div className='jub flex flex-wrap  w-100'>
            <div>
            <h3>Do you need a saloon?</h3>
            <h4>Contact us on 
            <p>+254727049996/+254722392641</p></h4>
            </div> 
            <div>
                <div className='black outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per kilometer</h4>
                    <h6>Ksh30 (within Nairobi)</h6>
                </div>
                <div className='black outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per day</h4>
                    <h6>ksh2500 plus fuel(within Nairobi)</h6>
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