import React, { Component } from 'react';
import '../Assets/vendor/bootstrap/bootstrap.min.css';
import '../Assets/vendor/select2/select2.min.css';
import '../Assets/css/style.min.css';


export default class Header extends Component {
    componentDidMount() {
        const script = document.createElement("script")
        script.async = true;
        script.src = "../Assets/js/app.min.js";
        script.src = "../Assets/vendor/select2/select2.min.min.js";
        script.src = "../Assets/vendor/stellar/jquery.stellar.js";
        script.src = "../Assets/vendor/waypoint/waypoint.min.js";



    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>Roxy by GetTemplates.co</title>
                    <meta name="description" content="Roxy" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                </header>
            </React.Fragment>
        );
    }
}