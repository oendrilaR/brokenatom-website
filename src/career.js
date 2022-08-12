import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/career.css'

const Career = () => {
    
    return ( 

            <div className="career" id="careers">
                <Row>
                    <Col sm={1}></Col>    
                    <Col sm={10}>

                    {/* <BrowserView> */}
                        <Row>
                                <h1>We are Hiring!!!</h1> 
                        </Row>
                        
                        <Row>
                            <Col className='career-p'>
                                We are looking for <br />
                                talented engineers <br />
                                and designers who <br />
                                can help us build <br />
                                future data <br />
                                platforms.</Col>
                        </Row>    

                        <Row>
                            <p className='email'>
                                Send us your resume to <br />
                                <span><a href="mailto:jeevan@brokenatom.io">jeevan@brokenatom.io</a></span>
                            </p>    
                        </Row> 
                        <Row>
                            <Col className=" col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 form_apply">
                                <a href="#career_form">
                                    <button type="submit" className="btn btn-primary">or Apply Here</button>
                                </a>
                            </Col>
                        </Row>
                    </Col>    
                    <Col sm={1}></Col>    
                </Row>
            </div>
        );
    }            
                   
export default Career;