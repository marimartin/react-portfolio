import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="https://github.com/preronam/plantparenthood" title>
                                            <img alt="" src="/images/portfolio/plantparenthood.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Plant Parenthood</h5>
                                                    {/* <p>Illustrration</p> */}
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="https://github.com/marimartin/book-market" title>
                                            <img alt="" src="/images/portfolio/bookmarket.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Book Market</h5>
                                                    {/* <p>Web Development</p> */}
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="https://github.com/marimartin/workout-tracker" title>
                                            <img alt="" src="/images/portfolio/workouttracker.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Workout Tracker</h5>
                                                    {/* <p>Webdesign</p> */}
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="https://github.com/marimartin/employee-directory" title>
                                            <img alt="" src="/images/portfolio/employeedirectory.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Employee Directory</h5>
                                                    {/* <p>Photography</p> */}
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="https://github.com/marimartin/note-taker" title>
                                            <img alt="" src="/images/portfolio/notetaker.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Note Taker</h5>
                                                    {/* <p>Branding</p> */}
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <div className="description-box">
                                <h4>Plant Parenthood</h4>
                                <p>This app allows users to search for plants based on personal criterisa. It uses Materialize for styling, MySQL as the database, and Handlebarsjs as a templating language.</p>
                                <span className="categories"><i className="fa fa-tag" /></span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/preronam/plantparenthood">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <div className="description-box">
                                <h4>Book Market</h4>
                                <p>Users can use this app to find books by author or title. It mainly uses JS for functionality, including AJAX calls to the Google Books and Goodreads APIs.</p>
                                <span className="categories"><i className="fa fa-tag" /></span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/marimartin/book-market">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <div className="description-box">
                                <h4>Workout Tracker</h4>
                                <p>To view, track, and create daily workouts, a user can use this app which stores their data using MongoDB.</p>
                                <span className="categories"><i className="fa fa-tag" /></span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/marimartin/workout-tracker">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <div className="description-box">
                                <h4>Employee Directory</h4>
                                <p>This app uses react to create a directory of randomly generated employees that can be sorted alphabetically, or searched for using a search box.</p>
                                <span className="categories"><i className="fa fa-tag" />Photography</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/marimartin/employee-directory">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}
                        <div id="modal-05" className="popup-modal mfp-hide">
                            <div className="description-box">
                                <h4>Farmer Boy</h4>
                                <p>Using the Express NPM package, this app allows a user to write, save, and delete notes. It uses an express backend to save and retrieve note data from a JSON file.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                            </div>
                            <div className="link-box">
                                <a href="https://github.com/marimartin/note-taker">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-05 End */}
                    </div> {/* row End */}
                </section>
            </React.Fragment>
        );
    }
}