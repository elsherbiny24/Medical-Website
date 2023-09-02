import React from 'react'
import Banner from '../banner/Banner';
import './blog.css'
import Section7 from '../home/Section7';
import { Col, Container, Row } from "react-bootstrap";
import doc1 from '../../aswets/blog.png1.jpg';
import doc2 from '../../aswets/blog.png2.jpg';
import doc3 from '../../aswets/blog.png3.jpg';
import doc7 from '../../aswets/blog.png4.jpg';
import doc8 from '../../aswets/blog.png5.jpg';
import doc9 from '../../aswets/blog.png6.jpg';
import doc4 from '../../aswets/1.png34.jpg';
import doc5 from '../../aswets/1.png35.jpg';
import doc6 from '../../aswets/1.png36.jpg';

import { MdDateRange } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <>
    <Banner tittle='Blogs' smtittle='Blogs'/>
    <Section7 />
    <section className='min-sec-7'>
        <Container className='contant'>
            
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='dector'>
                        <img src={doc1} className='img' alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                            <img src={doc4} className='img-1' alt=''/>
                            <span>Dev/ Tarek</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More<BiRightArrowAlt className='icon'/></Link>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='dector'>
                        <img src={doc2} className='img'alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                         <img src={doc5} className='img-1'alt=''/>
                         <span>Dev/ ziad</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More<BiRightArrowAlt className='icon' /></Link>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='dector'>
                        <img src={doc3} className='img' alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                         <img src={doc6} className='img-1' alt=''/>
                            <span>Eng/ Tarek</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More <BiRightArrowAlt className='icon' /></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='min-sec-7 min-blog'>
        <Container className='contant'>
            
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='dector'>
                        <img src={doc7} className='img' alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                            <img src={doc4} className='img-1' alt=''/>
                            <span>Dev/ Tarek</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More<BiRightArrowAlt className='icon'/></Link>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='dector'>
                        <img src={doc8} className='img'alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                         <img src={doc5} className='img-1'alt=''/>
                         <span>Dev/ ziad</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More<BiRightArrowAlt className='icon' /></Link>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='dector'>
                        <img src={doc9} className='img' alt=''/>
                        <div className='img-small'>
                         <div className='devlop'>
                         <img src={doc6} className='img-1' alt=''/>
                            <span>Eng/ Tarek</span>
                         </div>
                         <span><MdDateRange />Aug 2004</span>
                        </div>
                        <p>In this hospital there are special surgeon</p>
                        <Link className='link' to='/blog'>Read More <BiRightArrowAlt className='icon' /></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Blog