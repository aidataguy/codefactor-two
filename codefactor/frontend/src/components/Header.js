import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// This will be imported just once.... in Page JS
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    const script = document.createElement("script")
    // script.async = true; 
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"
}
    render(){
        return (  


            <header>

                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Roxy by GetTemplates.co</title>
                <meta name="description" content="Roxy" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <Link  to={"../Assets/vendor/bootstrap/bootstrap.min.css"} />
                <Link  to={"../Assets/vendor/select2/select2.min.css"} />
                <Link  to={"../Assets/vendor/owlcarousel/owl.carousel.min.css"} />
                <Link  to={"../Assets/vendor/lightcase/lightcase.css"} />
                <Link  to={"https://unpkg.com/aos@next/dist/aos.css"} />
                <Link to={"https://fonts.googleapis.com/css?family=Lato:300,400|Work+Sans:300,400,700"}/>
                <Link  to={"../Assets/css/style.min.css"}/>
                <Link  to={"https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"} />
                <Link  to={"https://use.fontawesome.com/releases/v5.8.1/css/all.css"} integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

            </header>


        );
    }
}