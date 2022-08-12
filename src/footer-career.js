import footer from './images/footer.svg';
import Footer_mob from './images/footer-mobile.svg';
import Footer_tab from './images/footer_tablet.svg';
import React from "react";
import logo from "./images/b-logo.svg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './css/map_footer.css';




// window.initMap = ()=>{console.log("map init");};
const mapFooter = () => {
    return (
        <div style={{position:'relative'}} className="">
            <div className='o-' style={{height:'200px', paddingTop:'2rem'}}>
                <img
                    src={footer}
                    alt="logo"
                    width='100%'
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



                <div>
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
  