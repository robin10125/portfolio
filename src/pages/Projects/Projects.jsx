import './Projects.css';

import Project1 from '../../components/Project1/Project1.jsx'
import Project2 from '../../components/Project2/Project2.jsx'
import Project3 from '../../components/Project3/Project3.jsx'
import Project4 from '../../components/Project4/Project4.jsx'

import React, { Component } from 'react';

export default class Projects extends Component {
    state = {
        project: Project1
      };
    project_list = [Project1,Project2,Project3,Project4]
    count = 0
    handleChange = () => {
      if (this.count === 4){
        this.count = 0
      }
      else{this.count += 1}
      this.setState({project: this.project_list[this.count]})
    }
  render(){
    return (
      <div>
        Projects List
        <button id = 'next' onClick = {this.handleChange}>Next Project</button>
        {this.state.project}
      </div>
    );
  } 
} 

