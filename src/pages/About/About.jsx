import React, { Component } from 'react';

export default class About extends Component{
    state = {
        content: ""
      };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
          <div>
            About
          </div>
        )
    }
}