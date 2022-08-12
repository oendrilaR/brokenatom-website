import logo from "./images/logo.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/header.css";
import React, { useEffect, useState } from "react";
import Navbar from "./images/navbar.svg";
import fav from "./images/b-logo.svg";

const Header = () => {
    const [hide, set_hide] = useState(false);

    useEffect(() => {
        // init_header_scrolling();
        
        let doc = document.documentElement;
        let w = window;

        let curScroll = w.scrollY || doc.scrollTop;
        let prevScroll = curScroll;

        const checkScroll = function (e) {
            curScroll = w.scrollY || doc.scrollTop;
            if(curScroll < 80) return; // for first 80 px don't hide header


            const is_down = curScroll - prevScroll > 0;
            set_hide(p=>is_down);
            

            prevScroll = curScroll;
        };

        window.addEventListener("scroll", checkScroll);
    }, []);

    return (
        <div id="header">
            <div>
                <div id="menu">
                    <div className="menu_br">
                        <div className="menubar">
                            <div style={{position:'absolute', transform:'translate(-85%, -50%)', top:'50%', left:'50%'}}>
                                <nav className="sidebar_menu">
                                    <div>
                                    <a href="#products">Products</a>
                                    <a href="#features">Features</a>
                                    <a href="#about_us">About us</a>
                                    <a href="#careers">Careers</a>
                                    <a href="#contact">Contact</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="sidebar_close"></a>
                </div>
                {/* )} */}
            </div>

            <div className={"header_bkg " + (hide ? "hide" : "")} id="site-header">
                <Row>
                    <Col></Col>
                    <Col sm={10}>
                        <Row>
                            <Col>
                                <div>
                                    <a href="/">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="logo d-none d-sm-block"
                                        />
                                        <img
                                            src={fav}
                                            alt="logo"
                                            width="45rem"
                                            className="logo d-block d-sm-none"
                                        />
                                    </a>
                                </div>
                            </Col>

                            <Col className="nav_bar">
                                <a href="#menu">
                                    {" "}
                                    <img src={Navbar} alt="navbar_img" />{" "}
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;
