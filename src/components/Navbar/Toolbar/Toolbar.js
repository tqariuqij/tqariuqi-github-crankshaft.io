import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

const Toolbar = props => {
    return (
        <header className='flex wrap h4 w-100 color dib shadow-5'>
            <nav className='flex'>
           
                <div className='red pr5'><h1>The Crankshaft    </h1></div>
                <div className= 'toolbarList'>
                    <ul className=' list  flex  pa0 pv4 pl7 ma0 none white'>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-lightest-blue dib pa3 " href="/">Spare Parts</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-green dib pa3 " href="/">Transport Services</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-blue dib pa3 " href="/">Cars for Sale</a></li>
                        <li><a className="f6 f5-l white bg-animate black-80 hover-bg-light-pink dib pa3 " href="/">Location</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="pl3 pv4">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                
            </nav>
        </header>

    );
}
export default Toolbar;