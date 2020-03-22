import React, { Component } from 'react';

export default class Navbar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <React.Fragment>
                <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
            
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center text-white" href="/">
                            <h3 className="font-weight-bolder mb-0">ROXY</h3>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="lnr lnr-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-nav-header">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>

        )
    }
}
