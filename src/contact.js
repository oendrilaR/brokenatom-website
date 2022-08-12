import { useEffect, useState } from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'
import swal from 'sweetalert';
import './css/contact.css'



function Contact() {
    
    //form state....
    const [firstname, setFirstName]=useState('');
    const [lastname, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [linkedin, setLinkedin]=useState('');
    const [message, setMessage]=useState('');
    

    //submit event
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(firstname,lastname,email,message);
        const data={
            FirstName:firstname,
            LastName:lastname,
            Email:email,
            Linkedin:linkedin,
            Message:message
        }

        axios.post('https://sheet.best/api/sheets/84f60e39-efae-4f6f-a048-47ab6f2f12e1',data)
            .then((response)=>{
                
                // show success dialog
                swal({
                    title: "Successfully Submitted",
                    text: "Thank you for getting in touch! We will get in touch with you shortly! Have a great day!",
                    icon: "success",
                    button: "Ok",
                });
                
                // console.log(response);
                // clearing form feilds 
                setFirstName('');
                setLastName('');
                setEmail('');
                setLinkedin('');
                setMessage('');
            })

        .catch(e=>{
            swal({
                title: "Form submission failed !!",
                text: "",
                icon: "error",
                button: "Ok",
              });
        })
    }

    // let l = ["A","B","C","D"];
    // let [selected, set_selected] = useState(0);

    return (
        <div id="contact">
            <Row ></Row>

            {/* {l.map((e, i)=>(
                <div onClick={()=>{set_selected(i)}}  style={{border: selected===i?"1px solid red": ""}}> {e} </div>
            ))} */}

            <Row>
                <Col className="col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2"></Col>
                <Col className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8">
                    
                    <Row className="contact-heading">
                        Contact us
                    </Row>

                    <Row>                   
                        <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>

                            <Row className="contact">
                                <Col className="contact">
                                    <div>First Name*</div>
                                    <input
                                        type='text'
                                        placeholder='First Name' required
                                        className="form-control"
                                        onChange={(e)=>setFirstName(e.target.value)} value={firstname}
                                    />
                                </Col>
                                <Col className="contact">
                                    <div>Last Name</div>
                                        <input  
                                            type='text'
                                            placeholder='Last Name'
                                            className="form-control"
                                            onChange={(e)=>setLastName(e.target.value)} value={lastname}
                                        />
                                </Col>
                            </Row>
                                    
                            <Row className="contact">
                                <Col>
                                    <div>Email Address*</div>
                                        <input 
                                            type='text'
                                            placeholder='Email' required
                                            className="form-control"
                                            onChange={(e)=>setEmail(e.target.value)} value={email}
                                        />
                                </Col>
                                <Col>
                                    <div>Linkedin</div>
                                        <input 
                                            type='text'
                                            placeholder='Linkedin'
                                            className="form-control"
                                            onChange={(e)=>setLinkedin(e.target.value)} value={linkedin}
                                        />
                                </Col>
                            </Row>
                            <Row className="contact">
                                <Col>
                                    <div>Message</div>
                                        <textarea 
                                            rows={'5'}
                                            placeholder='Enter a description...'
                                            className="form-control" 
                                            onChange={(e)=>setMessage(e.target.value)} value={message} />                         
                                        {/* </textarea> */}
                                </Col>
                                <Col className="contact-button">
                                    <button  type="submit" className="btn btn-primary">Submit</button>
                                </Col>
                            </Row>

                        </form>
                    </Row>
                </Col>
                <Col className="col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2"></Col>
            </Row>
            <Row></Row>




        

        </div>
    )
}

export default Contact