import './Project1.css'
export default function Project1(props){
    return(
        <div className = 'project1'>
            <div className='title'><h1 >Ai Camera</h1></div>
            <div id = 'images'>
                <a href='https://github.com/robin10125/Ai_Camera' rel="noreferrer" target="_blank" >
                <img src='https://i.imgur.com/Gd3thb7.png' height="500"></img>
                </a>
            </div>
            <div id = 'description1'>
                <p>This app was developed as an introduction to machine learning.  
                    This is a web app that applies machine image translation algorthims to uploaded photos.
                    This app uses generative, machine learning, neural network algorithms, 
                    trained using generative adversarial learning: known as a generative adversarial neural network or GAN for short.  
                    The networks were trained from scratch, and then uploaded to the cloud as a Docker Image using Google Cloud Run.
                    Users upload their photo to the webapp, and recieve, after a short wait, their translated photo.</p>
            </div>
        </div>
    )
}