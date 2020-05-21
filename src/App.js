import React from 'react';
import './App.css';
import Shop from './components/Shop';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Employ from './components/Employ'
import { BrowserRouter , Route , Switch, Link } from 'react-router-dom' // have to run npm i react-router-dom to use these functions

class App extends React.Component {
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
            <Route exact path="/home" componemt={Home}/>
            <Route exaxt path="/contact" component={Contact}/>
            <Route exact path="/employment" component={Employ}/>
            <Footer/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
};




export default App;
