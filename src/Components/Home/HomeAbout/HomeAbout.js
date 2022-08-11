import React from 'react';
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faDownload, faLink, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDev, faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../../../Images/Shabit Ahtasham Songi.png';
import Typical from "react-typical";

const HomeAbout = () => {
    return (
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
    );
};

export default HomeAbout;