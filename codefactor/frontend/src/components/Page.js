import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import { logo, mockup, testpic, pic, pic1, pic2, client, unsplash, testi } from '../consts';


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
                <section id="testimonial" className="section-padding bg-fixed bg-white featurettes overlay">
                    <div className="container">
                        <div className="section-content" >
                            <div className="heading-section text-center">
                                <h2>
                                    User Testimonials
                                </h2>
                            </div>
                            <div className="row">
                                <div className="testi-content">
                                    <div className="testi-item text-center">
                                        <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                        <h4 className="testi-text"><b>ROXY</b> is best theme i used so far.<br /> It’s ideal for guys without coding knowledge like me!</h4>
                                        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                            <div className="testi-img mr-2">
                                                <img src={testi} alt="" />
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
                                                <img src={testi} alt="" />
                                            </div>
                                            <div className="testi-details">
                                                <p className="testi-author mb-0 font-weight-bolder">John Doe</p>
                                                <p className="testi-desc mb-0">Web Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi-item testi-section text-center">
                                        <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                        <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br /> non doloribus ut, alias doloremque perspiciatis.</h4>
                                        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                            <div className="testi-img mr-2">
                                                <img src={testi} alt="" />
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
                {/* Latest Blog Post */}
                

                <section id="client" className="overlay bg-fixed">
                    <div className="container">
                        <div className="section-content" >
                            <div className="row ">
                                <div className="col-md-12">

                                    <div className="title-wrap mb-5">
                                        <h2>Techs That I <span> work</span> On</h2>
                                    </div>

                                </div>

                                <div className="col-md-12 client-holder">
                                    <div className="client-slider ">
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
                <Footer />
            </React.Fragment >

        )
    }
}
