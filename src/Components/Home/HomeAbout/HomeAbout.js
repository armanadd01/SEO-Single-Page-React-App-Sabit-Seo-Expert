import React from 'react';
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faDownload, faLink, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faDev, faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../../../Images/Shabit Ahtasham Songi.png';
import Typical from "react-typical";

const HomeAbout = () => {
    return (
        <Col xl={6} lg={6} md={6} sm={12}>
            <Card style={{ width: '90%' }} className='Card-design'>

                <Card.Body>
                    <Card.Title > <h3> Shabit Ahtasham Songi </h3> </Card.Title>
                    <h2 style={{ display: 'none' }}>Shabit Ahtasham Songi The Internet Entrepreneur</h2>
                    <Card.Title className='borders'>
                        <Typical
                            steps={[
                                "is a self-made man.",
                                5000

                            ]}
                            loop={Infinity}
                            wrapper="h4"
                        />

                    </Card.Title>
                    <br />
                    <Card.Text>
                        <span
                            className="autor_name">Shabit Ahtasham Songi</span> is managing multiple business by his own, and doing 9 to 5 jobs at an USA Registered Company, the position of Sr. SEO Account Manager.
                    </Card.Text>
                    <Card.Text>
                        He's built his Local Business from scratch and now he's one of successful Internet Entrepreneurs. Shabit has always been able to take advantage of his unique skills and experiences to create value for his clients. He is a definite asset to any organization and is always looking for ways to contribute to his community and make a difference.
                    </Card.Text>
                    <Card.Text>
                        Shabit handles SEO and Internet Marketing, Works on client websites to make the top ranking, Gives training to other business owners, Provides high-level business consulting, Builds SEO strategies, Applies various strategies practically, and makes good vibes always.
                    </Card.Text>
                </Card.Body>
                {/* <Card.Body className='d-md-flex justify-content-center'>
                    <div className="d-md-flex flex-column justify-content-center">
                        <Card.Link href="https://www.shabitahtashamsongi.com/cv/Shabit-Ahtasham-Songi-Work-Resume.pdf" className='custom-block'
                            rel="noopener noreferrer"
                            target="_blank"><FontAwesomeIcon icon={faDownload} /> Download CV</Card.Link>
                        <Card.Link href="mailto:songi.clients@gmail.com" className='custom-block'><FontAwesomeIcon icon={faMailBulk} /> Email Me</Card.Link>
                    </div>

                </Card.Body> */}
            </Card>
        </Col>
    );
};

export default HomeAbout;