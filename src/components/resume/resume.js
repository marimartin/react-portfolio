import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Northwestern Unveristy</h3>
                                    <p className="info">Full-Stack Web Development Bootcamp <span>•</span> <em className="date">December 2020</em></p>
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                                    </p> */}
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>DePaul University</h3>
                                    <p className="info">M.A. Early Childhood Education <span>•</span> <em className="date">June 2017</em></p>
                                    {/* <p>
                                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                                    </p> */}
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Loyola University Chicago</h3>
                                    <p className="info">B.A. Studio Art: Drawing and Painting <span>•</span> <em className="date">August 2014</em></p>
                                    <p>
                                        <ul>
                                            <li>
                                                Gonska Award for Achievements in the Department of Fine and Performing Arts
                                            </li>
                                            <li>
                                                Mellon Award Honorable Mention for Senior Exhibit
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    {/* <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Awesome Design Studio</h3>
                                    <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                </p>
                                </div>
                            </div> {/* item end */}
                    {/* <div className="row item">
                                <div className="twelve columns">
                                    <h3>Super Cool Studio</h3>
                                    <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                                    <p>
                                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                </p>
                                </div> */}
                    {/* </div>  */}
                    {/* item end */}
                    {/* </div>  */}
                    {/* main-col end */}
                    {/* </div>  */}
                    {/*End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                            </p> */}
                            <div className="bars">
                                <div class="row">
                                    <div className="column">
                                        <ul className="skills">
                                            <li><em>Reactjs</em></li>
                                            <li><em>JavaScript</em></li>
                                            <li><em>SQL</em></li>
                                            <li><em>MongoDB</em></li>
                                            <li><em>AJAX</em></li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <ul className="skills">
                                            <li><em>Nodejs</em></li>
                                            <li><em>CSS</em></li>
                                            <li><em>HTML5</em></li>
                                            <li><em>jQuery</em></li>
                                            <li><em>Bootstrap</em></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}