import React, {Component} from 'react';
import './App.css';
import {JumboTron} from './components/JumboTron';
import {LearnMore} from './pages/LearnMore/LearnMore'
import { Transport } from './components/Transport/Transport';
import { CarSale } from './components/CarSale/CarSale';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CarHire } from './pages/CarHire/CarHire';
import { SevenSitters } from './pages/SevenSitters/SevenSitters';
import { PickUps } from './pages/PickUps/PickUps';

class App extends Component{
  state={
    showPage: 'Home'
  }

  changePage= (event, pageName) => {
    this.setState({
      showPage: pageName
    });
  }


  render(){
    if (this.state.showPage ==='Home') {
    return(
      <div>
        <Navbar />
        <JumboTron showPage={this.state.showPage}
          changePage={this.changePage}
        />
         <Transport showPage={this.state.showPage}
          changePage={this.changePage}
         />
         <CarSale showPage={this.state.showPage}
          changePage={this.changePage}
         />
         <Footer />
      </div>
    );
    } else if (this.state.showPage === 'LearnMore') {
      return(
        <div>
          <LearnMore showPage={this.state.showPage}
          changePage={this.changePage}/>
        </div>
      );
    } else if (this.state.showPage === 'LearnMore') {
      return(
        <div>
          <LearnMore showPage={this.state.showPage}
          changePage={this.changePage}/>
        </div>
      );
    } else if (this.state.showPage === 'CarHire') {
      return(
        <div>
          <Navbar />
          <CarHire showPage={this.state.showPage}
          changePage={this.changePage}/>
          <Footer />
        </div>
      );
    } else if (this.state.showPage === 'SevenSitters') {
      return(
        <div>
          <Navbar />
          <SevenSitters showPage={this.state.showPage}
          changePage={this.changePage}/>
          <Footer />
        </div>
      );
    } else if (this.state.showPage === 'PickUps') {
      return(
        <div>
          <Navbar />
          <PickUps showPage={this.state.showPage}
          changePage={this.changePage}/>
          <Footer />
        </div>
      );
    }
  }
}
export default App;
