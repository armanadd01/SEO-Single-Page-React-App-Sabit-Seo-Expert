import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../../Images/banner/sabit-banner.png';
import Typical from "react-typical";
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="background pb-5 mb-5">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} sm={12} className="text-start">
                        <h1 className='text-golden'>Shabit Ahtasham Songi</h1>

                        <Typical
                            steps={[
                                "Internet Entrepreneur",
                                5000,
                                "SEO Expert",
                                5000,
                                "SEO Consultant",
                                5000,
                            ]}
                            loop={Infinity}
                            wrapper="h2"
                            className="text-golden"
                        />

                        <p className="text-light about-text">Join The Satisfied Clients Today that have grown their businesses by working with Shabit Ahtasham Songi.</p>

                        <Button className='btn-golden mb-5'>
                            <NavLink
                                className="nav-link  text-light p-3 "
                                to="/contact">
                                Free SEO Consulting
                            </NavLink>

                        </Button>
                    </Col>
                    <Col md={6} sm={12}>

                        <img src={bannerImage} alt="" />
                    </Col>
                </Row>

            </Container>
        </div>

    );
};

export default Banner;