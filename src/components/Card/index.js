import React from "react";
import "./index.css";

function Card(projects) {
    let cardImage = {
        //backgroundImage: `url(${process.env.PUBLIC_URL + projects.image})`,
        backgroundImage: `url(${projects.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    return (
        /*Reveal card setup from materialize
        When image is clicked, content of class=card-reveal is shown*/
        <div className="card">
            <div style={cardImage} className="activator card-image waves-effect waves-block waves-light">
                {/*<img className="activator portfolioImage" alt={projects.title} src={process.env.PUBLIC_URL + projects.image} />*/}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <a href={projects.deployedLink} target="_blank" rel="noopener noreferrer">{projects.title}</a>
                </span>
            </div>
            
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{projects.title}<i
                    className="material-icons right">close</i></span>
                <p>{projects.explanation}</p>
            </div>
        </div>
    );
}

export default Card;