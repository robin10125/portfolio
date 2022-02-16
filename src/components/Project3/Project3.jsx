import './Project3.css'
export default function Project3(props){
    return(
        <div className = 'project3'>
            <div className='title'><h1  >Shogi School Project</h1></div>
            <div id = "image">
            <a href="https://github.com/robin10125/Shogi-App" rel="noreferrer" target="_blank">
                <img src ='https://raw.githubusercontent.com/robin10125/Shogi-App/main/Shogi/Shogi-Game/Assets/Shogi_Screenshot.png' height="500" ></img>
            </a>
            </div>
            <div id = 'description3'>
                <p>This was a short project I did as a part of General Assembly's Software Engineering bootcamp.  
                    It is a simple single page static app.  The user plays against themselves or against someone sharing the computer, alternating turns.
                    This project was done as an introduction to  CSS, HTML and Javascript.  Shogi operates very similar to chess,
                    but with a couple more rules, such as taking control over units that one captures.</p>
            </div>
        </div>
    )
}