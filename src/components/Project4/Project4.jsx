import './Project4.css'
export default function Project4(props){
    return(
        <div className = 'project4'>
            <div className='title'><h1 >Pong Reinforcement Learning</h1></div>

            <video height="475" width="500" controls>
                <source src="pongai.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <a href='https://github.com/robin10125/reinforcment-learning-study-project' rel="noreferrer" target="_blank">Link to Repo</a>
            <div id = 'description4'>
                <p>In this project I researched and applied reinforcement learning techniques.  
                    This project uses machine learning and reinforcement learning to play ping pong, 
                    using only the pixels on screen to determine how to behave.  
                    Specifically, a Deep Q Network with convolutional layers is used, 
                    with a bitmap of the screen's pixels as inputs and the action as output.  
                    Above is a sample of it playing against a decent hard coded agent.</p>
            </div>
        </div>
    )
}