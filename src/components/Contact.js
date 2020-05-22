import React from 'react';
import Footer from './Footer';
import './Contact.css';


const Contact = () => {
    return(
        <div className="contact">
            <div className="wrap-conatiner">
                <form className="contact-form">
                    <span className="form-title">Contact meeee!</span>
                    <label className="label-input" for="first-name">Your name*</label>
                    <div className="wrap-input">
                        <input id="first-name" className="input" type="text" name="first-name" placeholder="First name"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="wrap-input">
                        <input id="last-name" className="input" type="text" name="last-name" placeholder="Last name"/>
                        <span className="focus-input"></span>
                    </div>
                    <label className="label-input" for="email">Email Address*</label>
                    <div className="wrap-input">
                        <input id="email" className="input" type="email" name="email" placeholder="Eg. example@email.com"/>
                        <span className="focus-input"></span>
                    </div>
                    <label className="label-input" for="meggage">Message*</label>
                    <div className="wrap-input">
                        <textarea id="message" className="input" name="message" placeholder="Please enter your comments"></textarea>
                        <span className="focus-input"></span>
                    </div>
                    <div className="container-button">
                        <button className="buttons">
                            <span>"Submit"<i className="arrow-button"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
};


export default Contact;