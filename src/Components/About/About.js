import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import sabit from '../../Images/sabit.png'
import AboutSlider from './AboutSlider/AboutSlider';

const About = () => {
    return (
        <div className='about-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Who Is Shabit Ahtasham Songi</title>
                <link rel="canonical" href="https://shabitahtashamsongi.com/about" />
                <meta name="description" content="Shabit Ahtasham Songi is an Internet Entrepreneur and SEO Expert based in Bangladesh, And the Founder & CEO of Multiple Online Business." />
                <meta name="keywords" content="who is Shabit Ahtasham Songi, Shabit Ahtasham Songi, Ahtasham Songi, Shabit Ahtasham, Songi" />
            </Helmet>
            <Container className='mb-5 mt-5 pt-5 '>
                <div
                    className='heading-title text-center mb-5'>
                    <h1 className=' text-golden text-big'>WHO IS <br /> SHABIT AHTASHAM SONGI</h1>

                </div>
                <Row className='align-items-center mb-5'>
                    <Col md={6} xs={12}>

                        <img className='img-fluid' src={sabit} alt="" />
                    </Col>
                    <Col md={6} xs={12} className="text-start">

                        <p className='about-text'>
                            <span
                                className="autor_name">Shabit Ahtasham Songi</span>  is an Internet Entrepreneur and SEO Expert based in Bangladesh, And the Founder & CEO of Multiple Online Business including SEO GURU a Local SEO and Digital Marketing Agency, Marketer's Panel a White Label SEO Agency, and SEO GURU Academy a Lead SEO Training Center where he helps to Learn SEO Practically.


                        </p>
                        <p className='about-text'>
                            Shabit Ahtasham Songi Doesnt Just Rank Websites, He Grows Businesses Too. He is a self-depended guy who found success online one step at a time through Long Hours, Dedication, and a Good Sense of Humor along the way
                        </p>

                        <Button className='btn-golden mb-5'>
                            <a href="/contact" className='text-decoration-none text-light'>Free SEO Consulting</a>
                        </Button>

                        <Row className='align-items-center'>
                            <Col md={4} sm={2} style={{
                                zIndex: 99
                            }} className="experience-year">
                                <p className='custom-experiance'>
                                    <span>7</span>
                                </p>
                            </Col>
                            <Col md={8} sm={4} className="dotted-bg">

                                <p className='experiance-text'>Years</p>
                                <p className='experiance-text'>Experience</p>
                                <p className='experiance-text'>Working</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='align-items-center mt-5 gallery-section'>
                    <Col md={6} sm={12} className='slider-gallery'>
                        <AboutSlider></AboutSlider>
                    </Col>
                    <Col md={6} sm={12} className='gallery-button'>
                        <Button className='btn-golden mb-5'>
                            <a href="/contact" className='text-decoration-none text-light'>Free SEO Consulting</a>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;