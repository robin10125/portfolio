import './Project2.css'
export default function Project2(props){
    return(
        <div className = 'project2'>
            <div className='title'><h1>Bidmarket School Project</h1></div>
            <div id = 'images'>
                <a href='https://github.com/robin10125/bidmarket' rel="noreferrer" target="_blank">
                <img src='https://i.imgur.com/yTlRjjU.png' height="500"></img>
                </a>
            </div>
            <div id = 'description2'>
                <p>This app was developed as a part of General Assemebly's Software Engineering bootcamp.
                    It was a 5 day group project that involved coordinated development amongst 2 other group members using git version control.
                    This app is a local emarketplace, combined with an auction house.  
                    The bidding was originally developed as a live event using websockets, however the version uploaded to Heroku uses simple Post requests to handle bidding.
                    The app was developed using Django, with PostgreSQL as the database to store information.  As a demonstration school project, electronic payments were not implemented.
                </p>
            </div>
        </div>
    )
}