import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">

                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}</h1>
                            <h3>I am a Chicago based {resumeData.role} with a background in Fine Arts. I love making beautiful things and solving problems.</h3>
                            <h3>Let's start scrolling and learn more <a className="smoothscroll" href="#about">about me</a>.
                            </h3>
                            <hr />
                            <ul className="social">
                                <li><a href="https://linkedin.com/in/marina-martin6"><i className="fa fa-linkedin fa-2x" /></a></li>
                                <li><a href="https://github.com/marimartin"><i className="fa fa-github fa-2x" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}