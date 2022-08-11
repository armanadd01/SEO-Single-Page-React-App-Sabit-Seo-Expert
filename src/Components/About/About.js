import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <div
                    className='heading-title text-center'>
                    <h1 className='text-light'>WHO IS <br /> SEO Protected</h1>

                </div>
                <Row className='align-items-center'>
                    <Col md={6} xs={12}>

                        <img src="https://chrismwalker.io/wp-content/uploads/2018/05/Chris-M.-Walker.png" alt="" />
                    </Col>
                    <Col md={6} xs={12} className="text-start">

                        <p className='about-text'>
                            Chris M. Walker is an internet entrepreneur based in Myrtle Beach, SC and the CEO/Founder of multiple online business including Superstar SEO a 7 figure internet marketing agency, Legiit a digital services freelancing platform and online marketing academy to help entrepreneurs learn valuable business skills.
                        </p>
                        <p className='about-text'>
                            Chris owes all of this to his amazing clients, customers, and staff who have made it possible for Chris to use his business to pursue his true passion… helping people and making the world a better place.
                        </p>

                        <Button className='bg-golden'>Apply For A Consultation</Button>
                        <img src="" alt="" />
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
};

export default About;