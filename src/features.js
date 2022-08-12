import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './css/feature.css';
import design from './images/design.svg'
import data from './images/data.svg'
import UI from './images/UI.svg'
import deploy from './images/deploy.svg'
import {BrowserView, MobileView} from 'react-device-detect';



const features_data = [
    {
        title: "Design Your Schema",
        img: design,
        para: "Create your business model with",
        para2: "relationships"
    },
    {
        title: "Data Explore",
        img: data,
        para: "Query & visualize data with a simple",
        para2: "& expressive query language"
    },
    {
        title: "UI Design",
        img: UI,
        para: "Use pre-built template or design",
        para2: "pixel perfect UI"
    },
    {
        title: "Deploy",
        img: deploy,
        para: "Deploy with a click and preview",
        para2: "instantly"
    },
];

const Features = () => {
  return (
    <div>
        {/* <BrowserView> */}
            <div className="feature" id='features'>
                <Row>
                    <Row>
                    <Col sm={1}></Col>
                    <Col className="feature-cont">
                        <h1>What you can do?</h1>
                    </Col>
                    <Col sm={2}></Col>
                    </Row>
                </Row>
                
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        {features_data.map((p, i) => {
                            return (    
                                <Row key={i} className='features_data'>
                                    <Col className='col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                                    <Col className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4' style={{paddingBottom:'1rem'}}>
                                        <div>
                                            <div className="title"> {p.title} </div>
                                            <div className="para"> {p.para}</div>
                                            <div className="para"> {p.para2} </div>
                                        </div>
                                    </Col>
                                    <Col className='col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                                    <Col  className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <img className='feature_img' src={p.img} alt={p.name}/>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </div>
        {/* </BrowserView> */}
        {/* <MobileView>
        <div className="feature" id='features'>
                <Row>
                    <Row>
                    <Col sm={1}></Col>
                    <Col className="feature-cont-mobile">
                        <h1>What you can do?</h1>
                    </Col>
                    </Row>
                </Row>
                
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        {features_data.map((p, i) => {
                            return (    
                                <Row className='features_data_mobile'>
                                    <Col className='col-12 col-sm-12 col-md-6'>
                                        <div style={{textAlign:'center'}}>
                                            <div className="title_mobile"> {p.title} </div>
                                            <div className="para"> {p.para}</div>
                                            <div className="para"> {p.para2} </div>
                                        </div>
                                    </Col>

                                    <Col  className="col-12 col-sm-12 col-md-6">
                                        <img className='feature_img' src={p.img} alt={p.name}/>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </div>
        </MobileView> */}
    </div>
  );
};

export default Features;
