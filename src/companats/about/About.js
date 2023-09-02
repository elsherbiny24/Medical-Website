import React from 'react'
import './abou2.css'
import { Container, Row , Col } from 'react-bootstrap';
import doc1 from "../../aswets/doctor.png1.jpg";
import doc2 from "../../aswets/doctor.png2.jpg";
import doc3 from "../../aswets/doctor.png3.jpg";
import doc4 from "../../aswets/doctor.png4.jpg";
import doc5 from "../../aswets/doctor.png5.jpg";
import doc6 from "../../aswets/doctor.png3.jpg";
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const About = () => {
  return (
   <>
   <section className='team'>
   <div className='head'>
            <h5>Our Doctor</h5>
            <h2>Meet Best Doctors</h2>
        </div>
    <Container className='doctors-team'>
       
        <Row>
        <Col lg={4} md={6} sm={12} className='boxs'>

                <div className='box-doctor'>
                    <div className='image'>
                    <img src={doc1} alt='' className='img'/>
                    </div>
                    <h4>Dr. Addition Smith</h4>
                    <p>Dentist</p>
                    <div className='icons'>
                        <span><BiLogoFacebook /></span>
                        <span><BsTwitter /></span>
                        <span><BsInstagram /></span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className='boxs'>
            <div className='box-doctor'>
                    <div className='image'>
                    <img src={doc2} alt='' className='img'/>
                    </div>
                    <h4>Dr. Addition Smith</h4>
                    <p>Dentist</p>
                    <div className='icons'>
                        <span><BiLogoFacebook /></span>
                        <span><BsTwitter /></span>
                        <span><BsInstagram /></span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} className='boxs'>
            <div className='box-doctor shadow'>
                    <div className='image'>
                    <img src={doc3} alt='' className='img'/>
                    </div>
                    <h4>Dr. Addition Smith</h4>
                    <p>Dentist</p>
                    <div className='icons'>
                        <span><BiLogoFacebook /></span>
                        <span><BsTwitter /></span>
                        <span><BsInstagram /></span>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default About