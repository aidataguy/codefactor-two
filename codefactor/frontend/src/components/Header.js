import React, { Component } from 'react';
import '../Assets/vendor/bootstrap/bootstrap.min.css';
import '../Assets/vendor/owlcarousel/owl.carousel.min.css';
import '../Assets/css/style.min.css';


export default class Header extends Component {
    componentDidMount() {
        const script = document.createElement("script")
        script.async = true;
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"
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