import React from 'react';
// import logo from './logo.svg';
import image from '../../Images/Shabit Ahtasham Songi.png';
import Typical from "react-typical";
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faDownload, faLink, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDev, faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <div>
            <div className="sh-component kl-header-toptext kl-font-alt" style="display: flex;align-items: center;justify-content: space-between;align-content: center;"><span>QUALITY GARMENTS MANUFACTURING IN CANADA & BANGLADESH </span> <span> QUESTIONS? CALL: <a href="#" className="fw-bold">+1 6478-066-732</a> </span>
            </div>
            <Container>
                <Row>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <Card style={{ width: '90%' }} className='Card-design'>
                            <Card.Img variant="top" style={{
                                height: '150px',
                                width: '150px',
                                borderRadius: '50%',
                                border: '1px solid #FFB530',
                                margin: '20px auto !important',
                            }} src={image} alt="Shabit Ahtasham Songi" />
                            <Card.Body>
                                <Card.Title > <h1> Shabit Ahtasham Songi </h1> </Card.Title>
                                <h2 style={{ display: 'none' }}>Shabit Ahtasham Songi The Internet Entrepreneur</h2>
                                <Card.Title className='borders'>
                                    <Typical
                                        steps={[
                                            "Founder And CEO - SEO Guru",
                                            5000,
                                            "Founder And CEO - Marketer's Panel",
                                            5000,
                                            "Founder And Trainer - SEO Guru Academy",
                                            5000,
                                        ]}
                                        loop={Infinity}
                                        wrapper="h6"
                                    />
                                </Card.Title>
                                <br />
                                <Card.Text>
                                    <span
                                        className="autor_name">Shabit Ahtasham Songi</span>  is an Internet Entrepreneur and SEO Expert based in Bangladesh, And the Founder & CEO of Multiple Online Business including SEO GURU a Local SEO and Digital Marketing Agency, Marketer's Panel a White Label SEO Agency, and SEO GURU Academy a Lead SEO Training Center where he helps to Learn SEO Practically.
                                    <br /><br />
                                    Shabit Ahtasham Songi Doesnt Just Rank Websites, He Grows Businesses Too. He is a self-depended guy who found success online one step at a time through Long Hours, Dedication, and a Good Sense of Humor along the way
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <a href="https://www.facebook.com/AhtashamSongi"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="https://twitter.com/ahtashamsongi"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="https://bd.linkedin.com/in/ahtashamsongi"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://www.youtube.com/channel/UCTxV2V1dsSJM_WzUIoMI3nQ/videos"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                                    <a href="https://www.pinterest.com/ahtashamsongi/"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faPinterest} /></a>
                                    <a href="https://www.instagram.com/shabitahtashamsongi/"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://wa.me/+8801703928204"
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body className='d-md-flex justify-content-center'>
                                <div className="d-md-flex flex-column justify-content-center">
                                    <Card.Link href="https://www.shabitahtashamsongi.com/cv/Shabit-Ahtasham-Songi-Work-Resume.pdf" className='custom-block'
                                        rel="noopener noreferrer"
                                        target="_blank"><FontAwesomeIcon icon={faDownload} /> Download CV</Card.Link>
                                    <Card.Link href="mailto:songi.clients@gmail.com" className='custom-block'><FontAwesomeIcon icon={faMailBulk} /> Email Me</Card.Link>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="main-services">
                            <Row>
                                <h3 className='heading-title'>Registered Online Business</h3>
                                <Col md={6} sm={12} className='d-sm-flex justify-content-center'>
                                    <div className="Service-Box-One">
                                        <a href="https://www.seoguru.com.bd/"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="text-decoration-none">
                                            <div className="serviceBox orange">
                                                <h3 className="title"> SEO GURU</h3>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                                <Col md={6} sm={12} className='d-sm-flex justify-content-center'>
                                    <div className="Service-Box-twos">
                                        <a href="#"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none" >
                                            <div className="serviceBox orange">

                                                <h3 className="title">SEO GURU <br /> Academy</h3>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                                <Col md={12} sm={12} className='d-sm-flex justify-content-center'>
                                    <div className="Service-Box-three">
                                        <a href="#"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none">
                                            <div className="serviceBox orange">
                                                <h3 className="title">Marketer's Panel</h3>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '3em', marginBottom: '4em' }}>
                <Row>
                    <Col md={6}>
                        <h4 style={{ color: '#FFB530' }}>Located in Bangladesh</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.722844343167!2d90.4167039140507!3d23.82845268455093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e47aed2c85%3A0x84e5b46799eccbb7!2sShabit%20Ahtasham%20Songi%20-%20SEO%20Consultant%20-%20SEO%20Specialist%20and%20SEO%20Expert%20in%20Bangladesh!5e0!3m2!1sen!2sbd!4v1642882876648!5m2!1sen!2sbd"
                            style={{ width: "90%", height: "300px" }}
                            allowfullscreen=""
                            loading="lazy"></iframe>
                    </Col>
                    <Col md={6}>
                        <h4 style={{ color: '#FFB530' }}>Located in USA</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4769749602947!2d-121.31198288544854!3d38.752762779593155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b210ee50647ad%3A0x3c3a51b08f5dc42d!2sSEO%20Expert%20in%20USA%20-%20Shabit%20Ahtasham%20Songi!5e0!3m2!1sen!2sbd!4v1642882916325!5m2!1sen!2sbd"
                            style={{ width: "90%", height: "300px" }}
                            allowfullscreen=""
                            loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;