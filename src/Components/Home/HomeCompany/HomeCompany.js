import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomeCompany = () => {
    return (
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
                </Row>
            </div>
        </Col>
    );
};

export default HomeCompany;