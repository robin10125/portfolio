import React, { Component } from 'react';
import './Skills.css'
import CsSkill from '../../components/CsSkill/CsSkill.jsx'
import HandSkill from '../../components/HandSkill/HandSkill.jsx'
import EyeSkill from '../../components/EyeSkill/EyeSkill.jsx'
export default class Skills extends Component {

    render() {
        return(
            <div className="skills">
                <h1>Skills</h1>
                <HandSkill />
                <EyeSkill />
                <CsSkill />
            </div>
        )
    }
}