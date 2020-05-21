import React from 'react';
import './About.css';
import {Link} from "react-router-dom";
import coden from './images/code.jpeg';
import Footer from './Footer';

const About = () => {
    return (
        <div className= "about">
            <h1>ABOUT ME</h1>
            <h2>WEB DEVELOPMENT?</h2>
            <p>I was a Retail Merchandiser for 6 years for vaious businesses in London, starting out at River Island and finishing at Jack Wills I was incharge of Menswear with an OTB of £25mil with a team of 6 to manage.
            My job consisted of analysing how a previous season went at top line and then breaking that down into sub catergories and finding out wether we hit or missed or forecast, investigate why, if there is a pattern evolving and then decide and plan the new season based on the lessons learnt. Sales in physical stores were down, and I had been seeing a steep increase in web sales over the past 6 years. On top of this, with consumer consumption into mid level brands in fashion slowing down, I decided it was time for a change in career.</p>
            <div className= "codeNation">
                <Link to="https://wearecodenation.com/"><image src={coden} /></Link>
                <h3>CodeNation</h3>
            </div>
            <p>I wanted it a new career to be more future proof, I started to think about what else my skill set could be used for and enhanced in. Thats when I thought more into coding and the languages used, I tried to do a bit of self study part time online but it was difficult with such a demanding job in London.</p>
            <p>I heard of CodeNation through a mutual friend who is a scrum master in a tech company and suggested I'd be really good at it and that the course is highly thought of in the tech world of the north. After completing the 4th week of the 12 week master coding course i know i have made the right decision. It's so interesting learning the theory behind the Javascript languages, all the functions and ways it can be used. When you start to try and put your learnings in to solve a challenge it's both the most infuriating, frustrating thing to do and yet so satisfying when you run the code and it works. I've now managed to secure an apprenteship role on teh .net team at TalkTalk! I'm really looking forward to how much further along I will be in the next 8 weeks! </p>
            <Footer/>
        </div>
    );
};
export default About;
