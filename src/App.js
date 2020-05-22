import React, {Component} from 'react';
import './App.css';
import Shop from './components/Shop';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Employ from './components/Employ'
import { BrowserRouter , Route , Switch } from 'react-router-dom' // havent used link in here, have to run npm i react-router-dom to use these functions

class App extends Component {
  state = {basket: 0};
  addToBasket = () => {
    console.log("adding to basket");
    this.setState({
      basket: this.state.basket + 1
    })
  };
  render(){
    return (
      <div>
        <BrowserRouter>
          <Navbar basketNumbers={this.state.basket}/>
          <Switch>
            <Route exact path="/shop" render= { () => <Shop myFunc={this.addToBasket}/>}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/employment" component={Employ}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
};




export default App;
