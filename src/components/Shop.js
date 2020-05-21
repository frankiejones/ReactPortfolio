import React from 'react'
import './Shop.css';
import Footer from './Footer';
import ear from './images/earrings.webp';
import ear2 from './images/earrings2.webp';
import ear3 from './images/earrings3.webp';
import ear4 from './images/earrings6.webp';
import ring from './images/ring.webp';
import neck from './images/necklace.webp';
import neck2 from './images/necklace2.webp';


const Shop = (props) => {
    return (
        <div className="home">
            <h1>Jewellery Shop</h1>
            <p>Buy all the latest trends</p>
            <div className="products">
                <div className= "product">
                    <img  src =  {ear} alt = "mainimage"/>
                    <h3>Rhinestone Pearl Hanging Earrings</h3>
                    <h4>Price: £6.99</h4>
                    <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {ear2} alt = "mainimage"/>  
                    <h3>Earrings</h3>
                    <h4>Price: £7.99</h4>
                <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {ear3} alt = "mainimage"/> 
                    <h3>Wavy Hoop Earrings</h3>
                    <h4>Price: £5.99</h4>
                    <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {ear4} alt = "mainimage"/> 
                    <h3>Puka Shell Drop Earrings</h3>
                    <h4>Price: £8.99</h4>
                <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {neck} alt = "mainimage"/> 
                    <h3>Coin Pendant Chain Necklace</h3>
                    <h4>Price: £9.99</h4>
                    <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {ring} alt = "mainimage"/> 
                    <h3>Twisted Sphere Ring</h3>
                    <h4>Price: £9.99</h4>
                    <button onClick={props.myFunc}>Add to Bag</button>
                </div>
                <div className= "product">
                    <img  src =  {neck2} alt = "mainimage"/> 
                    <h3>Duo Chunky Chain Necklace</h3>
                    <h4>Price: £10.99</h4>
                    <button onClick={props.myFunc}>Add to Bag</button>
                </div>
        </div>
        <Footer/>
    </div>
    )
};

export default Shop;
