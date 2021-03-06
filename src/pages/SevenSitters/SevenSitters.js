import React, { Component } from 'react'
import  './Tron.css'

export  class SevenSitters extends Component {
 render() {
    
    return (
        <div className='ju flex flex-wrap  w-100'>
            <div>
            <h3>Do you need a seven sitter?</h3>
            <h4>Contact us on 
            <p>+254727049996/+254722392641</p></h4>
            </div> 
            <div>
                <div className='black outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per kilometer</h4>
                    <h6>Ksh40 (within Nairobi)</h6>
                </div>
                <div className='black outline w-25 v-25 pa3 mr2 dib bg-light-green'>
                    <h4>price per day</h4>
                    <h6>ksh4500 plus fuel</h6>
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