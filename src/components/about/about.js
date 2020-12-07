import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="/images/profilepic.png" alt="Profile picture" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>My name is Mari and I am a recent graduate from Northwestern's Full-Stack Web Development Bootcamp.
                            I've enjoyed learning new technologies and implementing them to create some fun projects!
                            With my background in fine art, I have been able to explore a new creative outlet in coding.
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Marina Martin</span><br />
                                        <span>Chicago, IL</span><br />
                                        <span>marinarosemartin@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="https://drive.google.com/file/d/1y6Uf9Bs-ScrGvZMxCmyzJ7fik6lA50KM/view" target="_blank" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}