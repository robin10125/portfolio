import React, { Component } from 'react';
import './Skills.css'
import CsSkill from '../../components/CsSkill/CsSkill.jsx'
import MainSkills from '../../components/MainSkills/MainSkills.jsx'
export default class Skills extends Component {

    render() {
        return(
            <div className="skills">
                <MainSkills />
                <CsSkill />
            </div>
        )
    }
}