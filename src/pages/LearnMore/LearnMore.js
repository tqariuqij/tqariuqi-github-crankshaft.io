import React,{Component} from 'react';
import Particles from 'react-particles-js';
import './LearnMore.css'

const particlesOptions={
                    particles: {
                        number:{
                          value: 50,
                          density:{
                            enable: true,
                            value_area: 800
                          }
                        }
                        },
                    }
                



export  class LearnMore extends Component {
 render() {
    
    return (
      <div className='white dib br4 ma2 pa2 tc vh-100' >
            <Particles className='particles'
                params={particlesOptions} />
                
                    <h2>Our Mission</h2>
                    <h3>To provide you with all that which your car 
                    needs all in one place and at your convinience</h3>

                     <h2>About us</h2>
                     <p> At cranckshaft we love cars, we work with cars 
                     everyday and we were always troubled with how
                      difficult it is to get honest people who can help us
                      in solving the problems we encounter in our day to day.</p>
                     <p>ggklkTherefore here at the cranckshaft we provide you with 
                      everything you need concerning vehicle whether be it transport,
                      spare parts, vehicles for hire everything is found here</p>


                     <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
                      onClick={event => this.props.changePage(event, 'Home')}>Back</button>
                    
                
        </div>
    );
  }

}