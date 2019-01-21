import React from "react";

const About = () => {
    return (
        <div id="about" className="section">
            <h3>About</h3>
            <p>I'm a research-based Master student in computer science at University of Waterloo, I'm current working at the scientific computing lab under the supervision of Professor Yuying Li and Professor Kimon Fountoulakis. My research focuses on optimization in graph clustering. Besides, I have a great interest in machine learning and software development.</p>
            <p>Building my website with JavaScript is fulfilling and exciting, The difficult part for me was commencing the project and the motivation is to learn more about web application. This site is a React app written in ES6, the source code can be found in my GitHub repository.</p>
            <hr />
        </div>
    );
}

const Projects = () => {
    return (
        <div id="projects" className="section">
            <h3>Selected Project</h3>
            <h4>Automated Media Platform</h4>
            <p>In the summer of 2018, I worked as a software engineer intern in Microsoft STCA, where I involved in the development of a media application in NetEase Cloud Music. My project is to build a processor that can convert text to wav voice. I also integrated open source NLP models into my project in order to correct typos and pronunciation errors. The processor now can provide fully managed, I/O efficient media generation. The data processing speed of the processor is around 5ms/word. In this project, I aquired hands-on experience of industry projects and learned algorithms and data structures to build more efficient program.</p>
            <hr />
            <h4>Online Experiment for Cursor Locating Techniques</h4>
            <p>I and another graduate student designed an experiment to test whether some of these techniques are indeed helpful. We developed a web application and published it online. We compared the effect of two techniques: shaking-and-resizing (as in macOS) and Ctrl-and-resizing (pointer is magnified when pressing Ctrl key) with baseline setting (no technique available). In all three settings, we measured the time used to and recorded the trajectories of pointer. Our study shows that neither technique reduces the completion time of pointing tasks, despite the significant difference in pointer trajectories.</p>
            <hr />
            <h4>Human Face Detection by Boosting Techniques</h4>
            <p>I implemented this algorithm during my graduate study. The object of this project is detecting human face by AdaBoost and RealBoost. The training set contains 11838 human face images and 45356 non face images. The images were first converted to integral image in order to reduce the time complexity of computing the predictions from hundreds of filters. The project is written in C++ and the source code can be found in my github repository.</p>
            <hr />
        </div>
    );
}

const Teaching = () => {
    return (
        <div id="teaching" className="section">
            <h3>Teaching Experience</h3>
            <p>Teaching assistant is a role I love to play during my graduate study, Until now, I have TA'ed courses in computer science and statistics</p>
            <ul>
                <li>STAT 442, Data Visualization</li>
                <li>STAT 330, Mathematical Statistics</li>
                <li>CS 370, Numerical Computation</li>
                <li>CS 794, Optimization for Data Science</li>
                <li>CS476/676, Numerical Computation for Financial Modeling</li>
            </ul>
            <hr />
        </div>
    );
}

const Contact = () => {
    return (
        <div id="contact" className="section">
            <h3>Contact</h3>
            <p>If you want to discuss anything, please feel free to email me</p>
            <p>
                Email: c55hu at uwaterloo.ca<br />
                Room 3594, Davis Centre<br />
                David Cheriton School of Computer Science<br />
                University of Waterloo, Ontario<br />
                L3R 8M6
            </p>
            <hr />
        </div>
    );
}

const Picture = () => {
    return (
		<div className="card">
			<img className="card-img-top" src={require('../images/my-photo.jpg')} />
			<div className="card-body">
				<h5 class="card-title">Chufeng Hu</h5>
				<p className="card-text">I'm graduate student in computer scince, I love math and coding</p>
			</div>
		</div>
	);
}

const Footer = () => {
    return (
		<div class="footer">
			&#169; Copyright { new Date().getFullYear() } Chufeng Hu 
		</div>
	);
}

export default () => {
    const about = About();
    const projects = Projects();
    const teaching = Teaching();
    const contact = Contact();
    const picture = Picture();
    const footer = Footer();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    {about}
                    {projects}
                    {teaching}
                    {contact}
                    {footer}
                </div>
                <div className="col-lg-3">
                    {picture}
                </div>
            </div>
        </div>
    )
}