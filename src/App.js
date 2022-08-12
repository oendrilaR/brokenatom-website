import {useEffect, useState} from "react"
import "./css/index.css";
import Header from "./header.js";
import Home from "./home.js";
import Products from "./products.js";
import Features from "./features";
import About from "./about";
import Career from "./career";
import CareerForm from "./career_form";
import Contact from "./contact";
import Footer from "./footer";
import FooterCareer from "./footer-career";
import MapFooter from "./map_footer";
import ThreeLogo from "./ThreeLogo";
import Scroll from "./onScroll";

function App() {
    const [path, set_path] = useState("home");


    useEffect(()=>{
        
        const hash_changed = () => {
            console.log("hash_changed");
            if(window.location.hash.match("#contact")){
                set_path("contact");        
            }
            else if(window.location.hash.match("#career_form")){
                set_path("career_form");        
            }
            else{
                set_path("home");        
            }
        }
        window.addEventListener("hashchange", hash_changed);

        hash_changed();
    }, [])

    return (
        <>
            
            {path === "home" && (
                <div id="main" className="scroll">            
                    <ThreeLogo />
                    <Scroll />
                    <Header/>
                    <Home />
                    <Products />
                    <Features />
                    <About />
                    <Career />
                    <Footer />
                </div>
            )}


            {path === "contact" && (
                <div id="main" className="">   
                    <Scroll />
                    <Header/>
                    <Contact />
                    <MapFooter />
                </div>
            )}

            
            {path === "career_form" && (
                <div id="main" className="">    
                    <Scroll />
                    <Header/>
                    <CareerForm />
                    <FooterCareer />
                </div>
            )}
        </>
        
    );
}

export default App;


