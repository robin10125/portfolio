import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css'
export default class Home extends Component{
    
    render() {
        return(
            
          <div className = 'home'>
            <div id = 'image'><img src = 'https://i.imgur.com/KgoavK6.png'/></div>
            <div id = 'social-media'>
                <SocialIcon url='https://www.linkedin.com/in/robin-hylands-728a4a199/'/>
                <SocialIcon url='https://github.com/robin10125'/>
            </div>
            <div id = 'text' >I am Robin Hylands.  I love nature, math, algorithms, science - and all avenues of learning.  Welcome to my portfolio website.</div>
          </div>
        )
    }
}