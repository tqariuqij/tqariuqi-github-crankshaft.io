import React,{Component} from 'react';
import {VehicleCard} from './VehicleCard'


export  class CarHire extends Component{
 render(){
     return(
         <div>
         <div className='flex flex-wrap'>
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
                
         </div>
                 <button className='f6 dim br-pill ba bw1 ph2 pv2 mb2 dib navy bg-purple'
                      onClick={event => this.props.changePage(event, 'Home')}>Back</button>
         </div>
     );
 } 
}