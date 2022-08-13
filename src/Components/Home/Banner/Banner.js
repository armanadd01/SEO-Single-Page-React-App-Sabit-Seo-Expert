import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="background pb-5">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className="text-start">
                        <h1 className='text-golden'>Shabit Ahtasham Songi</h1>
                        <h2 className="text-golden">Internet Entrepreneur, SEO Expert, SEO Consultant</h2>
                        <p className="text-light">Join The Satisfied Clients Today that have grown their businesses by working with Shabit Ahtasham Songi.</p>

                        <Button className='btn-golden mb-5'>Apply For A Consultation</Button>
                    </Col>
                    <Col md={6}>
                        <h1 className='text-light'>Image</h1>
                    </Col>
                </Row>

            </Container>
        </div>

    );
};

export default Banner;