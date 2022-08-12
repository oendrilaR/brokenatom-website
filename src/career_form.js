import Col from 'react-bootstrap/Col'
import { Container, Row } from 'react-bootstrap'
import { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import profile from "./images/profile.png";
import './css/career_form.css'
import md5 from "md5";

function Form() {

    //form state
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [position, setPosition] = useState('');

    //submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(firstname,lastname,email,message,position);
        const data = {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Message: message,
            Position: position
        }

        axios.post('https://sheet.best/api/sheets/4a54e776-cece-4ecb-85f1-216598cc89a4', data)
            .then((response) => {

                // show success dialog
                swal({
                    title: "Successfully Submitted",
                    text: "Thank you for getting in touch! We will get in touch with you shortly!Have a great day!",
                    icon: "success",
                    button: "Ok",
                });

                // console.log(response);
                // clearing form feilds 
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
                setPosition('');
            })
            .catch(e => {
                swal({
                    title: "Form submission failed !!",
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
            })

    }



    const [color, set_color] = useState("white");


    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    const default_user_image = "https://img.icons8.com/fluency/96/000000/filled-circle.png"
    const avatar_url = `https://www.gravatar.com/avatar/${md5(email)}?d=${default_user_image}`;

    return (
        <div style={{backgroundColor:'white'}}>
            <Row style={{height:'10rem'}}></Row>
            <Row>
                <Col className='col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>
                <Col className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <Row>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <Row className='career-form-heading'>
                                Work with us
                            </Row>
                            <Row className='career-form-content'>
                                We are looking for <br />
                                talented engineers and <br />
                                designers who can <br />
                                help us build future <br />
                                data platforms.
                            </Row>
                        </Col>
                    
                        <Col className='d-none d-sm-none d-md-none d-lg-block card-content'>
                            <div>
                                <div className='career-card'>
                                    <div className='image-card'>
                                        <img src={avatar_url}/>
                                        <div className='hover-icon'></div>
                                    </div>
                                    <div className='card-name'> {firstname + " " + lastname} </div>
                                    <div className='card-email'> {email} </div>
                                    <div className='card-position'> {position} </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'></Col>

                <Col className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 career-form-container'>

                    <div className='career-form'>
                        <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
                            <div className='career-form-image'> 
                                <img src={avatar_url}/>
                            </div>

                            <Container>
                                <Row>
                                    <div className='career-form-title' style={{padding:'20px 0 10px 0'}}>First Name*</div>
                                    <input
                                        id='in'
                                        type='text'
                                        placeholder='First Name' required
                                        className="form-control"
                                        onChange={(e) => setFirstName(e.target.value)} value={firstname}
                                    />
                                </Row>
                                <Row>
                                    <div className='career-form-title' style={{padding:'20px 0 10px 0'}}>Last Name</div>
                                    <input
                                        type='text'
                                        placeholder='Last Name' required
                                        className="form-control"
                                        onChange={(e) => setLastName(e.target.value)} value={lastname}
                                    />
                                </Row>

                                <Row>
                                    <div className='career-form-title' style={{padding:'20px 0 10px 0'}}>Email Address*</div>
                                    <input
                                        id='in'

                                        type='text'
                                        placeholder='Email' required
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                    />
                                </Row>

                                <Row>
                                    <div className='career-form-title' style={{padding:'20px 0 10px 0'}}>Applying for the Position*</div>
                                    <input
                                        type={'text'}
                                        placeholder="Developer/ UI Designer/ FS Developer" required
                                        className='form-control'
                                        onChange={(e) => setPosition(e.target.value)} value={position}
                                    />
                                </Row>


                                <Row>
                                    <div className='career-form-title' style={{padding:'20px 0 10px 0'}}>Message</div>
                                    <textarea
                                        rows={'4'}
                                        placeholder='Enter a description'
                                        className="form-control"
                                        onChange={(e) => setMessage(e.target.value)} value={message}
                                    />
                                </Row>
                                <Row style={{paddingTop:'1rem'}}>
                                    <input type="file" id="resume-attachment" name="filename" />
                                </Row>

                                <Row className='career-form-btn-row'>
                                    <Col sm={2}></Col>
                                    <Col className='career-form-btn'>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </Col>
                                    <Col sm={2}></Col>
                                </Row>
                            </Container>
                        </form> 
                    </div>
                </Col>
                <Col className='col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1'></Col>
            </Row>
            <Row style={{height:'14rem'}}></Row>
        </div>
    )
}

export default Form