import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/products.css';
import product from "./images/product.svg";

const Page3 = () => {
    
    return ( 
        <div style={{paddingTop:'8rem', paddingBottom:'8rem'}} id='products'>

            <Row>
                <Col className='col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1'></Col>
                <Col className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                    <Row>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                            <div className='product-content'>
                                Do you know to code? <br />
                                Nah? Yah? <br />
                                Don't worry, we have it <br />
                                <span className='txt_color'>automated</span> for you.
                            </div>
                        </Col>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 products_img'>
                            <img src={product} alt="product"/>
                            </Col>
                    </Row>
                </Col>
                <Col className='col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1'></Col>
            </Row>
        </div>
    );
}            
                   
export default Page3;