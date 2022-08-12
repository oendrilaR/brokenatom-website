import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './css/home.css';
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { isTablet, isMobileOnly } from 'react-device-detect';


function Home() {

        
        //form state....
        const [email, setEmail]=useState('');
    
        //submit event
        const handleSubmit=(e)=>{
            e.preventDefault();
            // console.log(firstname,lastname,email,message);
            const data={
                Email:email,
            }
    
            axios.post('https://sheet.best/api/sheets/cd1412a2-b810-4af0-8934-261e095f62ee',data)
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
                    setEmail('');
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
    

    //form state....
    // const [email, setEmail] = useState('');

    // // useEffect(()=>{})
    // const check_email = (email) => {
    //     if (!email.length) return false;

    //     const a = email.split("@");
    //     if (a.length !== 2) return false;

    //     let right = a[1];

    //     let b = right.split(".");
    //     if (b.length < 2) return false;

    //     // 
    //     let domain = b[b.length - 1];
    //     if (domain.length < 2) return false;
    // }

    // //submit event
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(firstname,lastname,email,message);
    //     const data = {
    //         Email: email,
    //     }
    //     axios.post('https://sheet.best/api/sheets/84f60e39-efae-4f6f-a048-47ab6f2f12e1', data)
    //         .then((response) => {

    //             // show success dialog
    //             swal({
    //                 title: "Successfully Subscribed",
    //                 text: "Thank you for subscribing !",
    //                 icon: "success",
    //                 button: "Ok",
    //             });

    //             // console.log(response);
    //             // clearing form feilds 
    //             setEmail('');
    //         })

    //         .catch(e => {
    //             swal({
    //                 title: "Form submission failed !!",
    //                 text: "",
    //                 icon: "error",
    //                 button: "Ok",
    //             });
    //         })
    // }

    // const sliding_text = () => {
    //     return (
    //         <div className="content-home-tablet blur" style={{fontSize: "2rem"}}>
    //             <div style={{ textAlign: "center"}}>
    //                 <div>Cloud-Native Data</div>
    //                 <div>Modelling Platform for</div>
    //                 <div> Next-Gen
    //                     <span style={{paddingLeft: "1rem", outline: "1px dashed pink", color: "rgba(0,0,0,0)", display: "inline-block",  position: "relative", overflow: "hidden"}} >
    //                         Enterprises
    //                         <div className="sliding-text-tablet" style={{position: "absolute"}}>
    //                             <div className="txt-4">Enterprises. </div>
    //                             <div className="txt-1">Developers. </div>
    //                             <div className="txt-2">Designers. </div>
    //                             <div className="txt-3">Startups. </div>
    //                             <div className="txt-4">Enterprises. </div>
    //                         </div>

    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    return (
        <div className="home">
            <Col>
                <Row>
                    <Col className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3' style={{height:'9.5rem'}}></Col>
                    <Col className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3' style={{height:'9.5rem'}}></Col>
                    <Col className='col-6 col-sm-6 col-md-12 col-lg-3 col-xl-3' style={{height:'9.5rem'}}></Col>
                    <Col className='col-6 col-sm-6 col-md-12 col-lg-3 col-xl-3' style={{height:'9.5rem'}}></Col>
                </Row>
                <Row>
                    <Col className='col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1'></Col>
                    <Col className='col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6'>
                       
                        <Row>

                        {/* MOBILE */}
                        {isMobileOnly && (
                            <div className="content-home blur">
                                <div className="" style={{ textAlign: "center" }}>
                                    <div>Cloud-Native Data</div>
                                    <div>Modelling Platform for</div>
                                </div>
                                <div style={{ position: "relative", width: "16rem", margin: "auto" }}>
                                    Next-Gen
                                <div style={{ position: "absolute", top: 0, left: "7.7rem", height: "2rem", overflow: "hidden"}}>
                                    <div className="sliding-text" >
                                        <div className="txt-4">Enterprises. </div>
                                        <div className="txt-1">Developers. </div>
                                        <div className="txt-2">Designers. </div>
                                        <div className="txt-3">Startups. </div>
                                        <div className="txt-4">Enterprises. </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TABLET */}
                        {(!isMobileOnly && isTablet) && (
                            <div className="content-home-tablet blur">
                                <div style={{ textAlign: "center"}}>
                                    <div>Cloud-Native Data</div>
                                    <div>Modelling Platform for</div>
                                </div>
                                <div>
                                    <div style={{ position: "relative", width: "30rem", margin: "auto" }}>Next-Gen</div>
                                    <div style={{ position: "absolute", top: 0, left: "19.5rem", height: "3.75rem", overflow: "hidden"}}>
                                        <div className="sliding-text-tablet" >
                                            <div className="txt-4">Enterprises. </div>
                                            <div className="txt-1">Developers. </div>
                                            <div className="txt-2">Designers. </div>
                                            <div className="txt-3">Startups. </div>
                                            <div className="txt-4">Enterprises. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* {(!isMobileOnly && isTablet) && sliding_text()} */}




                        {/* DESKTOP */}
                        {(!isMobileOnly && !isTablet) && (
                            <div className="content-home-desktop">
                                <div>
                                <div>Cloud-Native Data</div>
                                <div>Modelling Platform for</div>
                                <div>Next-Gen
                                    <div style={{ position: "absolute", top: 0, left: "12.75rem", height: "3.2rem", overflow: "hidden"}}>
                                        <div className="sliding-text-desktop" >
                                            <div className="txt-4">Enterprises. </div>
                                            <div className="txt-1">Developers. </div>
                                            <div className="txt-2">Designers. </div>
                                            <div className="txt-3">Startups. </div>
                                            <div className="txt-4">Enterprises. </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )}

                    </Row>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-1 col-lg-5 col-xl-5'></Col>
                </Row>
                
                <Row>
                <Col className="col-12 col-sm-12 col-md-2 col-lg-1 col-xl-1"></Col>
                <Col className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5" style={{paddingTop:'2rem'}}>
                <Row>
                    <div className="home-h">Be the first to know.</div>
                </Row>

                <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>

                <Row>
                    <Col sm={8} className="form-email">
                        <i className='fa fa-envelope-o'></i>
                        <input 
                            type='text'
                            placeholder='Email' required
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)} value={email}
                        />
                    </Col>
                    <Col sm={4} className="form-subscribe">
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </Col>
                </Row>
                </form>
                </Col>
                <Col className="col-12 col-sm-12 col-md-2 col-lg-6 col-xl-6"></Col>
                </Row>
            </Col>
        </div>
    )
}

export default Home;
