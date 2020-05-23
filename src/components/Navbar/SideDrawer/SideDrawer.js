import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => { 
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
      <nav className= {drawerClasses}>
        <ul className= 'list'>
                         <li><a className="f6 f5-l white bg-animate black-80 hover-bg-lightest-blue dib pa3 " href="/">Spare Parts</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-green dib pa3 " href="/">Transport Services</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-blue dib pa3 " href="/">Cars for Sale</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-pink dib pa3 " href="/">Location</a></li>
                       
            
        </ul>
     </nav>

    
);}
export default SideDrawer;