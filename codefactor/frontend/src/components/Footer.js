import React, { Component } from 'react';

// This will be imported just once.... in Page JS
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <footer className="mastfoot my-3">
                    <div className="inner container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 d-flex align-items-center">

                            </div>
                            <div className="col-lg-4 col-md-12 d-flex align-items-center">
                                <p className="mx-auto text-center mb-0">&copy; {(new Date().getFullYear())} CodeFactor. Design with <i className="fa fa-heart" /> &amp; <i className="fa fa-coffee"/></p>
                            </div>
                            <br />
                            <div className="col-lg-4 col-md-12">
                                <nav className="nav nav-mastfoot justify-content-center">
                                    <a className="nav-link" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </nav>
                            </div>

                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}