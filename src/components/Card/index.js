import React from "react";

function Card(projects) {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator portfolioImage" alt="weather_dashboard" src="../assets/weather_dashboard.png" />
            </div>
            <div class="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <a href={projects.deployedLink} target="_blank" rel="noopener noreferrer">Weather Dashboard</a>
                </span>
            </div>
            <div class="card-reveal">
                <span className="card-title grey-text text-darken-4">{projects.title}<i
                    className="material-icons right">close</i></span>
                <p>{projects.explanation}</p>
            </div>
        </div>
    );
}

export default Card;