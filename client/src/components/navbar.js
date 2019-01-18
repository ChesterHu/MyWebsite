import React from 'react';

const handleClick = (e) => {
    const id = e.target.getAttribute("targetId");
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

export default () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="#">Chufeng Hu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#" targetId="about" onClick={handleClick}>about</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" targetId="projects" onClick={handleClick}>projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" targetId="teaching" onClick={handleClick}>teaching</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" targetId="contact" onClick={handleClick}>contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}