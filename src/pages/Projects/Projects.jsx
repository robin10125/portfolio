import './Projects.css';

import Project1 from '../../components/Project1/Project1.jsx'
import Project2 from '../../components/Project2/Project2.jsx'
import Project3 from '../../components/Project3/Project3.jsx'
import Project4 from '../../components/Project4/Project4.jsx'

import React, { Component } from 'react';

export default class Projects extends Component {
    state = {
        count: 0
      };
    project_list = [Project1,Project4,Project2,Project3]

    Project = Project1

    handleChange = () => {
      if (this.state.count == 3){
        this.setState({count: 0})
      }
      else{this.setState({count: this.state.count + 1})
    }}
      
  render(){

    const Project = this.project_list[this.state.count]
    
    return (
      <div>
        <button id = 'next' onClick = {this.handleChange}>Next Project</button>
        <Project/>
        
        {}
      </div>
    );
  } 
} 

