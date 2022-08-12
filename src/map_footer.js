import footer from './images/footer.svg';
import Footer_mob from './images/footer-mobile.svg';
import Footer_tab from './images/footer_tablet.svg';
import React from "react";
import logo from "./images/b-logo.svg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './css/map_footer.css';

const mapFooter = () => {
    return (
        <div>
            <iframe 
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ736GE0CTyzsR7cD9i0nH_YI&key=AIzaSyCf0oEHv2bTfUngsb4N7U_m4nMCUILieew" 
                frameBorder="0"
                width={"100%"}
                height={"400px"}
                style={{top:'85px'}}
                loading={"lazy"}
                allowFullScreen={true}
                referrerPolicy={"no-referrer-when-downgrade"}
            >
            </iframe>
                
            <div className='' style={{height:'200px'}}>
                <img
                    src={footer}
                    alt="logo"
                    className="footer-bgimg d-none d-sm-none d-md-none d-lg-block d-xl-block"
                />
                <img
                    src={Footer_tab}
                    alt="logo"
                    className="footer-bgimg-tablet d-block d-sm-block d-md-block d-lg-none d-xl-none"
                />
                <img
                    src={Footer_mob}
                    alt="logo"
                    className="footer-bgimg-mobile d-block d-sm-none d-md-none d-lg-none d-xl-none"
                />



                <div style={{}}>
                    <Row className='footer'>
                        <Col className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                        
                        <Col className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1' style={{textAlign:'center'}}>
                            <a href="#header" className='footer-logo'>
                                <img src={logo} alt="logo" className='footer-logo'/> 
                            </a>
                        </Col>
                        
                        <Col className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2'></Col>
                        
                        <Col className='footer-para col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'2rem'}}>© Brokenatom 2022. All rights reserved.</p>
                        </Col>
                        
                        <Col className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                        <Col className='footer-icons col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2' style={{textAlign:'center'}}>      
                            
                            <a href="https://twitter.com/atom_broken">
                                <i className='fa fa-twitter' id='twitter'></i>
                            </a>

                            <a href="https://www.linkedin.com/company/broken-enterprises/">
                                <i className='fa fa-linkedin-square' id='linkedin'></i>
                            </a>

                            <a href="https://github.com/brokenatom">
                                <i className='fa fa-github' id='github'></i>
                            </a>

                            <a href="https://www.facebook.com/Broken-Atom-101632479052084">
                                <i className='fa fa-facebook-square' id='facebook'></i>
                            </a>
                        </Col>
                        <Col className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                    </Row>
                </div>
            </div>

        </div>
    );
  };
  
  export default mapFooter;
  