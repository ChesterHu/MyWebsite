import React from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <img src={require("../images/uw-brand.png")}/> | Scientific Computing
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Gallery</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}