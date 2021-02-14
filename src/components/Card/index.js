import React from "react";
import "./card.css";
//import ghIcon from "../../assets/otherPics/GitHub-Mark-64px.png";

function Card(projects) {
    const cardImage = {
        //backgroundImage: `url(${process.env.PUBLIC_URL + projects.image})`,
        backgroundImage: `url(${projects.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    const cardContent = {
        textAlign: "center",
        padding: "10px"
    }

    return (
        /*Reveal card setup from materialize
        When image is clicked, content of class=card-reveal is shown*/
        <div className="card">
            <div style={cardImage} className="activator card-image waves-effect waves-block waves-light">
                {/*<img className="activator portfolioImage" alt={projects.title} src={process.env.PUBLIC_URL + projects.image} />*/}
            </div>
            <div className="card-content" style={cardContent}>
                <a className="card-title activator grey-text text-darken-4" href="#!" style={{margin: "0px"}}>{projects.title}</a>
                
                <a className="waves-effect waves-light btn" href={projects.deployedLink} target="_blank" rel="noopener noreferrer">Live Link</a>
                <a className="waves-effect waves-light btn" href={projects.repoLink} target="_blank" rel="noopener noreferrer">GH Repo
                    {/*<img src={ghIcon} alt="Github Repo"/>*/}
                </a>
            </div>

            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{projects.title}
                    <i className="material-icons right">close</i>
                </span>
                <p>{projects.explanation}</p>
            </div>
        </div>
    );
}

export default Card;