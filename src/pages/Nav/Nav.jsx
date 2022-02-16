import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav(props) {
    return (
        <div className = "nav">
            <div id='card-container'>
            <Link to='/home' className = 'link' ><div className = 'card' id = 'home'>Home</div></Link>
            <Link to='/about' className = 'link' ><div className = 'card' id = 'about'>About Me</div></Link>
            <Link to='/projects' className = 'link' ><div className = 'card' id = 'projects'>Projects</div></Link>
            <Link to='/skills' className = 'link' ><div className = 'card' id = 'skills'>Skills</div></Link>
        </div> 
        </div>
    )
}