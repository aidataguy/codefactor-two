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
                            <h3 className="font-weight-bolder mb-0">CodeFactor</h3>
                        </a>
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
