import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import { logo, mockup, testpic, pic, pic1, pic2, client, unsplash } from '../consts';


// This will be the only page to be included into App JS
export default class Page extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <div className="jumbotron d-flex align-items-center">
                    <div className="container text-center">
                        <h1 className="display-1 mb-4">Code<br />Factor</h1>
                    </div>
                    <div className="rectangle-1"></div>
                    <div className="rectangle-2"></div>
                    <div className="rectangle-transparent-1"></div>
                    <div className="rectangle-transparent-2"></div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                    <div className="triangle triangle-1">
                        <img src={logo} />
                    </div>
                    <div className="triangle triangle-2">
                        <img src={logo} />
                    </div>
                    <div className="triangle triangle-3">
                        <img src={logo} />
                    </div>
                    <div className="triangle triangle-4">
                        <img src={logo} />
                    </div>
                </div>

                <section id="features" className="bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="title-wrap mb-5">
                                <h2 className="section-title">
                                    Test
                                </h2>
                                <p className="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br /> pharetra augue. Donec id elit non mi.</p>
                            </div>

                            <div className="row">

                                <div className="col-md-10 offset-md-1 features-holder">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 text-center mt-4">
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-cog fs-40"></i>
                                                </div>
                                                <h4>Easy to Customize</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-frame-contract fs-40"></i>
                                                </div>
                                                <h4>Pixel Perfect</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 text-center">
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-bubble fs-40"></i>
                                                </div>
                                                <h4>Full Support</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-magic-wand fs-40"></i>
                                                </div>
                                                <h4>Clean Design</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>


                                        <div className="col-md-4 col-sm-12 text-center mt-4">
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-clock fs-40"></i>
                                                </div>
                                                <h4>Ontime Project</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                            <div className="shadow rounded feature-item p-4 mb-4">
                                                <div className="my-4">
                                                    <i className="lnr lnr-thumbs-up fs-40"></i>
                                                </div>
                                                <h4>Built with SASS</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-featurettes" className="featurettes overlay bg-fixed">

                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row align-items-center text-white">

                                        <div className="col-md-4 offset-md-2 col-sm-6">
                                            <h4 className="mb-4">Capture every moments and share it to all your friends</h4>
                                            <p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet.</p>
                                            <button type="button" className="btn btn-outline-primary">FEATURES</button>
                                        </div>

                                        <div className="col-md-4 offset-md-right-2 col-sm-6">
                                            <img className="my-5" src={mockup} alt="" />
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <section id="section-featurettes" className="featurettes">

                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row align-items-center">

                                        <div className="col-md-4 offset-md-2 col-sm-6" >
                                            <img className="my-5" src={mockup} alt="" />
                                        </div>

                                        <div className="col-md-4 offset-md-right-2 col-sm-6" >
                                            <h4 className="mb-4">Capture every moments and share it to all your friends</h4>
                                            <p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet.</p>
                                            <div className="progress mb-3">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">HTML5 95%</div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS3 90%</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <section id="testimonial" className="section-padding bg-fixed bg-white overlay">
                    <div className="container">
                        <div className="section-content" >
                            <div className="heading-section text-center">
                                <h2>
                                    User Testimonials
                                </h2>
                            </div>
                            <div className="row">
                                <div className="testi-content testi-carousel owl-carousel">
                                    <div className="testi-item text-center">
                                        <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                        <h4 className="testi-text"><b>ROXY</b> is best theme i used so far.<br /> It’s ideal for guys without coding knowledge like me!</h4>
                                        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                            <div className="testi-img mr-2">
                                                <img src="img/testi-1.jpg" alt="" />
                                            </div>
                                            <div className="testi-details">
                                                <p className="testi-author mb-0 font-weight-bolder">John Doe</p>
                                                <p className="testi-desc mb-0">Web Designer</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="testi-item text-center">
                                        <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                        <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br /> non doloribus ut, alias doloremque perspiciatis.</h4>
                                        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                            <div className="testi-img mr-2">
                                                <img src="img/testi-1.jpg" alt="" />
                                            </div>
                                            <div className="testi-details">
                                                <p className="testi-author mb-0 font-weight-bolder">John Doe</p>
                                                <p className="testi-desc mb-0">Web Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi-item text-center">
                                        <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                        <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br /> non doloribus ut, alias doloremque perspiciatis.</h4>
                                        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                            <div className="testi-img mr-2">
                                                <img src="img/testi-1.jpg" alt="" />
                                            </div>
                                            <div className="testi-details">
                                                <p className="testi-author mb-0 font-weight-bolder">John Doe</p>
                                                <p className="testi-desc mb-0">Web Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="title-wrap">
                                <h2 className="section-title">Our <b>Awesome</b> Works</h2>
                                <p className="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br /> pharetra augue. Donec id elit non mi.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12 portfolio-holder mt-3">
                                    <div className="filter-button-group btn-filter d-flex justify-content-center">
                                        <a tabIndex="0" className="is-checked" data-filter="*">Show All</a>
                                        <a tabIndex="0" data-filter=".minimalism">Minimalism</a>
                                        <a tabIndex="0" data-filter=".vintage">Vintage</a>
                                        <a tabIndex="0" data-filter=".creative">Creative</a>
                                    </div>
                                    <div className="grid-portfolio">
                                        <div className="grid-sizer"></div>
                                        <div className="gutter-sizer"></div>
                                        <div className="grid-item minimalism" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic} title="Photo-1" >
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Camera</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="grid-item vintage" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic1} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic1} title="Ship">
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Flower</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="grid-item creative grid-item-height" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic1} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic1} title="Tracy Portrait" >
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Breakfast</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="grid-item creative" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic2} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic2} title="Guitar">
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Chair</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="grid-item vintage" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic1} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic1} title="Bookself">
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Hidden Book</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-item creative" >
                                            <div className="grid-item-wrapper">
                                                <img src={pic} alt="portfolio-img" className="portfolio-item" />
                                                <div className="grid-info">
                                                    <div className="grid-link d-flex justify-content-center">
                                                        <a className="img-pop" data-rel="lightcase" href={pic1} title="Guitar">
                                                            <span className="lnr lnr-move"></span>
                                                        </a>
                                                        <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                            <span className="lnr lnr-link"></span>
                                                        </a>
                                                    </div>
                                                    <div className="grid-title">
                                                        <h4>Red</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="client" className="overlay bg-fixed">
                    <div className="container">
                        <div className="section-content" >
                            <div className="row ">
                                <div className="col-md-12">

                                    <div className="title-wrap mb-5">
                                        <h2>Who love to <span> work</span> with us</h2>
                                    </div>

                                </div>

                                <div className="col-md-12 client-holder">
                                    <div className="client-slider owl-carousel">
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                        <div className="client-item">
                                            <img className="img-responsive" src={client} alt=" " />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reservation" className="bg-white section-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 offset-lg-1 mb-5 mb-lg-0" >
                                <div className="bg-white p-5 shadow">
                                    <div className="heading-section text-center">
                                        <h2 className="mb-4">
                                            Contact Us
                    </h2>
                                    </div>
                                    <form method="post" name="contact-us" action="">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" id="websiteUrl" name="websiteUrl" placeholder="Website" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-primary btn-shadow btn-lg" type="submit" name="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1" >
                                <h2 className="mb-4">
                                    Best solution to create any website. Pay once.
            </h2>
                                <p className="mb-4">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                                <ul className="list-inline py-2">
                                    <li className="list-inline-item text-center">
                                        <span className="lnr fs-40 lnr-rocket"></span>
                                        <p>Fast delivery</p>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <span className="lnr fs-40 lnr-magic-wand"></span>
                                        <p>Awesome design</p>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <span className="lnr fs-40 lnr-cog"></span>
                                        <p>Easy to customize</p>
                                    </li>
                                </ul>

                                <a href="#" className="btn btn-link p-0">
                                    <span>PURCHASE NOW</span>
                                    <span className="lnr lnr-arrow-right"></span>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="cta" className="bg-fixed overlay">
                    <div className="container">
                        <div className="section-content" >
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="mb-2">Make a beautiful website, or million of them</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, veritatis qui eligendi delectus quia fuga!</p>
                                    <a className="btn btn-outline-primary btn-lg">FEATURES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment >

        )
    }
}
