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
                                <p className="mx-auto text-center mb-0">&copy; 2019 Roxy. Design by <a href="https://gettemplates.co" target="_blank">GetTemplates</a>.</p>
                            </div>

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
                <script src="../Assets/vendor/bootstrap/popper.min.js"></script>
                <script src="../Assets/vendor/bootstrap/bootstrap.min.js"></script>
                <script src="../Assets/vendor/select2/select2.min.js "></script>
                <script src="../Assets/vendor/owlcarousel/owl.carousel.min.js"></script>
                <script src="../Assets/vendor/stellar/jquery.stellar.js" type="text/javascript" charSet="utf-8"></script>
                <script src="../Assets/vendor/isotope/isotope.min.js"></script>
                <script src="../Assets/vendor/lightcase/lightcase.js"></script>
                <script src="../Assets/vendor/waypoints/waypoint.min.js"></script>
            </React.Fragment>
        )
    }
}