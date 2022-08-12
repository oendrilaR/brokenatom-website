import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/about.css'
import ashish from "./images/ashish.webp";
import jeevan from "./images/jeevan.webp";
import hitesh from "./images/hitesh.webp";
import chetan from "./images/chetan.webp";
import roy from "./images/roy.webp";
import mohan from "./images/srikanth.webp";
import arun from "./images/arun.webp";

const people_data = [
    {
        name: "Ashish",
        img: ashish,
        linkedin_url: "https://www.linkedin.com/in/ashishblessing/",
        college: "IIT Bombay",
        position: "Founder"
    },
    {
        name: "Jeevan",
        img: jeevan,
        linkedin_url: "https://www.linkedin.com/in/jeevan-lal-323832222/",
        college: "IIT Bombay",
        position: "Business Development"
    },
    {
        name: "Hitesh",
        img: hitesh,
        linkedin_url: "https://www.linkedin.com/in/hitesh---suthar/",
        college: "NID Amhedabad",
        position: "Design Lead"
    },
    {
        name: "Oendrila",
        img: roy,
        linkedin_url: "https://www.linkedin.com/in/oendrilaroy/",
        college: "IHM Hyderabad",
        position: "Front-End Developer"
    },
    {
        name: "Chetan",
        img: chetan,
        linkedin_url: "https://www.linkedin.com/in/chetan-sai-1720a8174/",
        college: "IIT Bombay",
        position: "Full-Stack Developer"
    },
    {
        name: "Srikanth",
        img: mohan,
        linkedin_url: "https://www.linkedin.com/in/srikanth-sharma-4675b3184/",
        college: "IIT Bombay",
        position: "Full-Stack Developer"
    },
    {
        name: "Arun",
        img: arun,
        linkedin_url: "https://www.linkedin.com/in/arun-setty-kodavali/",
        college: "IIT Bombay",
        position: "Full-Stack Developer"
    },
];


const About = () => {

    return (
        <div id="about_us" className='about'>

            <Row className='about-row'>
                <Col sm={1}></Col>

                <Col className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 about-col'>
                        <div className='about-h'>
                            Who we are
                        </div>

                        <div className='about-p about_blur'> 
                            At Brokenatom, <br />
                            we are building the <br />
                            <span className='txt_color'> next-gen data platform</span> <br />
                            to automate the <br />
                            creation of full-stack  <br />
                            applications. 
                        </div>
                </Col>

                <Col className='col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7'>

                    <Row className='people-group'>
                        {people_data.map((p, i) => {
                            return (    
                                <Col key={i} className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 card-box-container'>
                                    <Row className='card-box'>
                                        
                                        <Col className='col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 image__about'>
                                            <div className='profile_pic'>
                                                <img className='about_profile_img' src={p.img} alt={p.name} />
                                                
                                                <div className='linkedin-icon'>
                                                    <a href={p.linkedin_url}>
                                                        <i className='fa fa-linkedin'></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col className='col-6 col-sm-6 col-md-12 col-lg-12 col-xl-12 card-details'>
                                            <div className="profile_details">
                                            <div className='name'>{p.name}</div>
                                            <div className='college'>{p.college}</div>
                                            <div className='position'>{p.position}</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    )

};

export default About;
