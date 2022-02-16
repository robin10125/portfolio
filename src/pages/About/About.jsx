import React, { Component } from 'react';
import './About.css'
export default class About extends Component{
    state = {
        content: ""
      };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
          <div id='about-div'>
            <p id='bio'>Hello, I am Robin.  I am 24 years old, and as far back as I can remember, 
              I have loved science, nature, and understanding the world around me.  I am naturally curious and open minded.  
              WIth these traits I have a boundless desire for problem solving.  To improve the lives of others with problem solving has always been my dream.  
              History has captured my imagination since childhood, however, much moreso than warlords and conquerers of men so focused upon in history, 
              I have always admired and thought to be truly great those who conquered problems with science, wisdom and knowledge.  
              
              <br/><br/>
              Currently, I am looking for a position as a Junior Software Engineer.  
              I am passionate about solving problems and learning new things; and I believe I am good at these as well.  
              I am comfortable programming in Python and Javascript, as well as related NodeJS.  
              I have a little bit of experience in Java and am quite willing to learn more.  
              I am particularly fond of the mathematical and algorithmic aspects of software development.  
              Learning and developing machine learning has been of special interest to me.    
              <br/><br/>
              What motivates me most is challenge.  
              I love challenge, so it is the hardest problems and best solutions that interest me the most.  
              I am motivated by the prospect of learning and working with new things, new technologies and new domains of knowledge. 
              <br/><br/>
              Aside from my intellectual passions, I enjoy being active: camping, weightlifting and playing sports. I like playing music, reading, and sometimes painting aswell.  
            </p>
          </div>
        )
    }
}